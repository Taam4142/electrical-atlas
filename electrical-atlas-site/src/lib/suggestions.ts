import type { AtlasTopic } from "./generated/atlasTopics";
import {
  getLessonSuggestionFields,
  type LessonKey,
  type Locale,
} from "./lessonRegistry";
import {
  getOutgoingRelationships,
  getRelationLabel,
  type RelationshipType,
} from "./relationships";
import { getTopicTypeLabel } from "./topicLabels";

export type { LessonKey, Locale } from "./lessonRegistry";

export type SuggestionKind = "lesson" | "topic";

export interface SuggestionItem {
  title: string;
  summary: string;
  href: string;
  kind: SuggestionKind;
  relation: string;
  relationType?: RelationshipType | "metadata";
}

function topicPath(locale: Locale, topic: AtlasTopic) {
  return `/${locale}/topics/${topic.slug}/`;
}

export function topicToSuggestion(
  topic: AtlasTopic,
  locale: Locale,
  relation?: string,
  relationType?: RelationshipType | "metadata",
): SuggestionItem {
  return {
    title: topic.name,
    summary: topic.summary,
    href: topicPath(locale, topic),
    kind: "topic",
    relation: relation || getTopicTypeLabel(topic.type, locale),
    relationType,
  };
}

export function getLessonSuggestions(
  lessonKey: LessonKey,
  locale: Locale,
  topics: AtlasTopic[],
): SuggestionItem[] {
  const topicById = new Map(topics.map((topic) => [topic.id, topic]));

  return getOutgoingRelationships({ kind: "lesson", id: lessonKey })
    .map((relationship): SuggestionItem | undefined => {
      const relation = getRelationLabel(relationship, locale);

      if (relationship.target.kind === "lesson") {
        const lesson = getLessonSuggestionFields(relationship.target.id, locale);

        return lesson
          ? {
              ...lesson,
              kind: "lesson",
              relation,
              relationType: relationship.type,
            }
          : undefined;
      }

      const topic = topicById.get(relationship.target.id);
      return topic ? topicToSuggestion(topic, locale, relation, relationship.type) : undefined;
    })
    .filter((item): item is SuggestionItem => Boolean(item));
}

function sharedTokenScore(a: string, b: string) {
  const aTokens = new Set(a.toLowerCase().split(/[^a-z0-9]+/).filter((token) => token.length > 2));
  const bTokens = new Set(b.toLowerCase().split(/[^a-z0-9]+/).filter((token) => token.length > 2));
  let score = 0;

  for (const token of aTokens) {
    if (bTokens.has(token)) {
      score += 1;
    }
  }

  return score;
}

function idPrefixScore(a: string, b: string) {
  const aParts = a.split(".");
  const bParts = b.split(".");
  let score = 0;

  for (let index = 0; index < Math.min(aParts.length, bParts.length); index += 1) {
    if (aParts[index] !== bParts[index]) {
      break;
    }

    score += index === 0 ? 0 : 1;
  }

  return Math.min(score, 5);
}

function topicSimilarityScore(current: AtlasTopic, candidate: AtlasTopic) {
  let score = 0;

  if (current.id === candidate.id) {
    return -Infinity;
  }

  if (current.subsection && current.subsection === candidate.subsection) {
    score += 10;
  }

  if (current.section && current.section === candidate.section) {
    score += 7;
  }

  if (current.sourceFile === candidate.sourceFile) {
    score += 4;
  }

  if (current.domain === candidate.domain) {
    score += 3;
  }

  if (current.type === candidate.type) {
    score += 2;
  }

  score += idPrefixScore(current.id, candidate.id);
  score += sharedTokenScore(`${current.name} ${current.summary}`, `${candidate.name} ${candidate.summary}`);

  return score;
}

function metadataRelationLabel(current: AtlasTopic, candidate: AtlasTopic, locale: Locale) {
  if (locale === "th") {
    return getTopicTypeLabel(candidate.type, locale);
  }

  if (current.subsection && current.subsection === candidate.subsection) {
    return `same subsection / ${candidate.subsection}`;
  }

  if (current.section && current.section === candidate.section) {
    return `same section / ${candidate.section}`;
  }

  if (current.domain && current.domain === candidate.domain) {
    return `same domain / ${candidate.domain}`;
  }

  return `${candidate.type} / ${candidate.section || candidate.domain}`;
}

function getSimilarityRankedTopics(current: AtlasTopic, topics: AtlasTopic[]): AtlasTopic[] {
  return topics
    .map((topic) => ({
      topic,
      score: topicSimilarityScore(current, topic),
    }))
    .filter((entry) => Number.isFinite(entry.score) && entry.score > 0)
    .sort((a, b) => b.score - a.score || a.topic.id.localeCompare(b.topic.id))
    .map((entry) => entry.topic);
}

function getExplicitTopicRelationships(current: AtlasTopic) {
  return getOutgoingRelationships({ kind: "topic", id: current.id }).filter(
    (relationship) => relationship.target.kind === "topic",
  );
}

export function getRelatedTopics(current: AtlasTopic, topics: AtlasTopic[], limit = 6): AtlasTopic[] {
  const topicById = new Map(topics.map((topic) => [topic.id, topic]));
  const explicitTopics = getExplicitTopicRelationships(current)
    .map((relationship) => topicById.get(relationship.target.id))
    .filter((topic): topic is AtlasTopic => Boolean(topic));
  const selectedIds = new Set([current.id, ...explicitTopics.map((topic) => topic.id)]);
  const fallbackTopics = getSimilarityRankedTopics(current, topics).filter((topic) => !selectedIds.has(topic.id));

  return [...explicitTopics, ...fallbackTopics].slice(0, limit);
}

export function getRelatedTopicSuggestions(
  current: AtlasTopic,
  topics: AtlasTopic[],
  locale: Locale,
  limit = 6,
): SuggestionItem[] {
  const topicById = new Map(topics.map((topic) => [topic.id, topic]));
  const explicitSuggestions = getExplicitTopicRelationships(current)
    .map((relationship): SuggestionItem | undefined => {
      const topic = topicById.get(relationship.target.id);
      return topic ? topicToSuggestion(topic, locale, getRelationLabel(relationship, locale), relationship.type) : undefined;
    })
    .filter((item): item is SuggestionItem => Boolean(item));
  const selectedIds = new Set([
    current.id,
    ...explicitSuggestions.map((suggestion) => suggestion.href.split("/topics/")[1]?.replace(/\/$/, "") ?? ""),
  ]);
  const fallbackSuggestions = getSimilarityRankedTopics(current, topics)
    .filter((topic) => !selectedIds.has(topic.slug))
    .map((topic) => topicToSuggestion(topic, locale, metadataRelationLabel(current, topic, locale), "metadata"));

  return [...explicitSuggestions, ...fallbackSuggestions].slice(0, limit);
}
