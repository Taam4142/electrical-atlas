import type { AtlasTopic } from "./generated/atlasTopics";
import {
  getOutgoingRelationships,
  getRelationLabel,
  type RelationshipType,
} from "./relationships";

export type Locale = "en" | "th";
export type LessonKey =
  | "what-is-electricity"
  | "voltage"
  | "current"
  | "resistance"
  | "ohms-law"
  | "power-energy"
  | "battery"
  | "mosfet";
export type SuggestionKind = "lesson" | "topic";

export interface SuggestionItem {
  title: string;
  summary: string;
  href: string;
  kind: SuggestionKind;
  relation: string;
  relationType?: RelationshipType | "metadata";
}

const lessonLabels: Record<LessonKey, Record<Locale, { title: string; summary: string; href: string }>> = {
  "what-is-electricity": {
    en: {
      title: "What Is Electricity?",
      summary: "Charge, fields, voltage, current, energy, and why a battery can light a lamp.",
      href: "/en/lessons/what-is-electricity/",
    },
    th: {
      title: "ไฟฟ้าคืออะไร?",
      summary: "ประจุ สนามไฟฟ้า แรงดัน กระแส พลังงาน และเหตุผลที่แบตเตอรี่ทำให้หลอดไฟติด",
      href: "/th/lessons/what-is-electricity/",
    },
  },
  voltage: {
    en: {
      title: "What Is Voltage?",
      summary: "Electric potential difference explained as energy per unit charge between two points.",
      href: "/en/lessons/voltage/",
    },
    th: {
      title: "แรงดันไฟฟ้าคืออะไร?",
      summary: "แรงดันหรือความต่างศักย์ อธิบายเป็นพลังงานต่อประจุระหว่างสองจุด",
      href: "/th/lessons/voltage/",
    },
  },
  current: {
    en: {
      title: "What Is Electric Current?",
      summary: "Electric current explained as charge flow rate: how much charge crosses a point per second.",
      href: "/en/lessons/current/",
    },
    th: {
      title: "กระแสไฟฟ้าคืออะไร?",
      summary: "กระแสไฟฟ้าอธิบายเป็นอัตราการไหลของประจุ หรือประจุที่ผ่านจุดหนึ่งต่อวินาที",
      href: "/th/lessons/current/",
    },
  },
  resistance: {
    en: {
      title: "Resistance and Conductance",
      summary: "Resistance and conductance explained as opposite views of how a path limits or allows current.",
      href: "/en/lessons/resistance/",
    },
    th: {
      title: "ความต้านทานและความนำไฟฟ้า",
      summary: "ความต้านทานและความนำไฟฟ้า อธิบายเป็นสองมุมของเส้นทางที่จำกัดหรือยอมให้กระแสผ่าน",
      href: "/th/lessons/resistance/",
    },
  },
  "ohms-law": {
    en: {
      title: "Ohm's Law",
      summary: "Voltage, current, and resistance linked by V = IR, with power and non-ohmic limits.",
      href: "/en/lessons/ohms-law/",
    },
    th: {
      title: "กฎของโอห์ม",
      summary: "แรงดัน กระแส และความต้านทานที่เชื่อมกันด้วย V = IR พร้อมกำลังและข้อจำกัดของอุปกรณ์ non-ohmic",
      href: "/th/lessons/ohms-law/",
    },
  },
  "power-energy": {
    en: {
      title: "Electrical Power and Energy",
      summary: "Watts, joules, watt-hours, heat, batteries, and why time matters in every circuit.",
      href: "/en/lessons/power-energy/",
    },
    th: {
      title: "กำลังและพลังงานไฟฟ้า",
      summary: "วัตต์ จูล วัตต์-ชั่วโมง ความร้อน แบตเตอรี่ และเหตุผลที่เวลาสำคัญในทุกวงจร",
      href: "/th/lessons/power-energy/",
    },
  },
  battery: {
    en: {
      title: "Battery",
      summary: "Chemical energy storage, terminal voltage, capacity, watt-hours, internal resistance, C-rate, and safety.",
      href: "/en/lessons/battery/",
    },
    th: {
      title: "แบตเตอรี่",
      summary: "การเก็บพลังงานเคมี แรงดันปลายขั้ว ความจุ watt-hour ความต้านทานภายใน C-rate และความปลอดภัย",
      href: "/th/lessons/battery/",
    },
  },
  mosfet: {
    en: {
      title: "What Is a MOSFET?",
      summary: "A field-controlled transistor, its structure, channel formation, switching behavior, and applications.",
      href: "/en/lessons/mosfet/",
    },
    th: {
      title: "MOSFET คืออะไร?",
      summary: "ทรานซิสเตอร์ที่ควบคุมด้วยสนามไฟฟ้า โครงสร้าง การสร้างช่องนำกระแส การสวิตช์ และการใช้งาน",
      href: "/th/lessons/mosfet/",
    },
  },
};

function isLessonKey(id: string): id is LessonKey {
  return Object.prototype.hasOwnProperty.call(lessonLabels, id);
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
    relation: relation || topic.type,
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
        if (!isLessonKey(relationship.target.id)) {
          return undefined;
        }

        return {
          ...lessonLabels[relationship.target.id][locale],
          kind: "lesson",
          relation,
          relationType: relationship.type,
        };
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
    return candidate.type;
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
