import { describe, expect, it } from "vitest";
import { atlasTopics } from "../lib/generated/atlasTopics";
import { lessonRegistry, type Locale } from "../lib/lessonRegistry";
import {
  atlasRelationships,
  relationshipDirectionality,
  type AtlasNodeRef,
  type RelationshipType,
} from "../lib/relationships";
import { getLessonSuggestions } from "../lib/suggestions";

const nodeKey = (node: AtlasNodeRef) => `${node.kind}:${node.id}`;
const orderedPairKey = (source: AtlasNodeRef, target: AtlasNodeRef) => `${nodeKey(source)}>${nodeKey(target)}`;

function hasDirectedCycle(type: RelationshipType) {
  const adjacency = new Map<string, string[]>();

  for (const relationship of atlasRelationships.filter((candidate) => candidate.type === type)) {
    const source = nodeKey(relationship.source);
    const targets = adjacency.get(source) ?? [];
    targets.push(nodeKey(relationship.target));
    adjacency.set(source, targets);
  }

  const state = new Map<string, "visiting" | "visited">();
  function visit(node: string): boolean {
    if (state.get(node) === "visiting") return true;
    if (state.get(node) === "visited") return false;

    state.set(node, "visiting");
    for (const target of adjacency.get(node) ?? []) {
      if (visit(target)) return true;
    }
    state.set(node, "visited");
    return false;
  }

  return [...adjacency.keys()].some(visit);
}

describe("relationship graph integrity", () => {
  it("rejects self-links, duplicate destinations, invalid direction, and invalid weights", () => {
    const selfLinks = atlasRelationships.filter(
      (relationship) => nodeKey(relationship.source) === nodeKey(relationship.target),
    );
    const orderedPairs = atlasRelationships.map((relationship) =>
      orderedPairKey(relationship.source, relationship.target),
    );
    const duplicatePairs = orderedPairs.filter((pair, index) => orderedPairs.indexOf(pair) !== index);
    const topicToLesson = atlasRelationships.filter(
      (relationship) => relationship.source.kind === "topic" && relationship.target.kind === "lesson",
    );
    const invalidWeights = atlasRelationships.filter(
      (relationship) =>
        !Number.isInteger(relationship.weight) || relationship.weight < 1 || relationship.weight > 100,
    );

    expect(selfLinks).toEqual([]);
    expect(duplicatePairs).toEqual([]);
    expect(topicToLesson).toEqual([]);
    expect(invalidWeights).toEqual([]);
  });

  it("keeps prerequisite and successor links acyclic and aligned with lesson order", () => {
    const orderByLesson = new Map<string, number>(lessonRegistry.map((lesson) => [lesson.slug, lesson.order]));
    const ordersByTopic = new Map<string, number[]>();
    for (const lesson of lessonRegistry) {
      for (const topicId of lesson.coveredTopicIds) {
        const orders = ordersByTopic.get(topicId) ?? [];
        orders.push(lesson.order);
        ordersByTopic.set(topicId, orders);
      }
    }
    const orderProblems = atlasRelationships
      .filter((relationship) => relationship.source.kind === "lesson")
      .filter((relationship) => relationship.type === "prerequisite" || relationship.type === "successor")
      .flatMap((relationship) => {
        const sourceOrder = orderByLesson.get(relationship.source.id);
        const targetOrders =
          relationship.target.kind === "lesson"
            ? [orderByLesson.get(relationship.target.id)].filter((order): order is number => order !== undefined)
            : (ordersByTopic.get(relationship.target.id) ?? []);
        if (sourceOrder === undefined || targetOrders.length === 0) return [];

        const isValid = targetOrders.some((targetOrder) =>
          relationship.type === "prerequisite" ? targetOrder < sourceOrder : targetOrder > sourceOrder,
        );
        return isValid ? [] : [orderedPairKey(relationship.source, relationship.target)];
      });

    expect(hasDirectedCycle("prerequisite")).toBe(false);
    expect(hasDirectedCycle("successor")).toBe(false);
    expect(orderProblems).toEqual([]);
  });

  it("does not encode an asymmetric relationship in both directions", () => {
    const relationshipKeys = new Set(
      atlasRelationships.map(
        (relationship) =>
          `${orderedPairKey(relationship.source, relationship.target)}>${relationship.type}`,
      ),
    );
    const reversedAsymmetricEdges = atlasRelationships
      .filter((relationship) => relationshipDirectionality[relationship.type] === "directed")
      .filter((relationship) =>
        relationshipKeys.has(
          `${orderedPairKey(relationship.target, relationship.source)}>${relationship.type}`,
        ),
      )
      .map((relationship) => `${orderedPairKey(relationship.source, relationship.target)}>${relationship.type}`);

    expect(reversedAsymmetricEdges).toEqual([]);
  });

  it("keeps lesson suggestions unique, non-redundant, and prevents self-recommendations", () => {
    const locales: Locale[] = ["en", "th"];
    const problems = lessonRegistry.flatMap((lesson) =>
      locales.flatMap((locale) => {
        const suggestions = getLessonSuggestions(lesson.slug, locale, atlasTopics);
        const hrefs = suggestions.map((suggestion) => suggestion.href);
        const duplicateHrefs = hrefs.filter((href, index) => hrefs.indexOf(href) !== index);
        const selfHref = lesson.paths[locale];
        const lessonCoveredTopics = new Set<string>(
          suggestions.flatMap((suggestion) => {
            if (suggestion.kind !== "lesson") return [];
            const targetLesson = lessonRegistry.find((candidate) => candidate.paths[locale] === suggestion.href);
            return targetLesson ? [...targetLesson.coveredTopicIds] : [];
          }),
        );
        const repeatedAtTopicDepth = suggestions
          .filter((suggestion) => suggestion.kind === "topic")
          .filter((suggestion) => {
            const slug = suggestion.href.split("/topics/")[1]?.replace(/\/$/, "");
            const topic = atlasTopics.find((candidate) => candidate.slug === slug);
            return topic ? lessonCoveredTopics.has(topic.id) : false;
          });

        return duplicateHrefs.length > 0 || hrefs.includes(selfHref) || repeatedAtTopicDepth.length > 0
          ? [`${locale}:${lesson.slug}`]
          : [];
      }),
    );

    expect(problems).toEqual([]);
  });
});
