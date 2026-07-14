import { describe, expect, it } from "vitest";
import { atlasTopicMeta, atlasTopics } from "../lib/generated/atlasTopics";
import { subjectPreview } from "../lib/navigation";

const taxonomyModelSources = import.meta.glob<string>("../../../electrical-atlas/01-taxonomy-model.md", {
  eager: true,
  query: "?raw",
  import: "default",
});
const curriculumSources = import.meta.glob<string>("../../../docs/first-20-lessons.md", {
  eager: true,
  query: "?raw",
  import: "default",
});
const canonicalTopicReferenceSources = { ...taxonomyModelSources, ...curriculumSources };

describe("generated atlas topic index", () => {
  it("contains the full mapped inventory seed", () => {
    expect(atlasTopicMeta.topicCount).toBe(1607);
    expect(atlasTopics).toHaveLength(1607);
    expect(atlasTopicMeta.inventoryFileCount).toBe(13);
  });

  it("has stable unique canonical IDs", () => {
    const ids = new Set(atlasTopics.map((topic) => topic.id));

    expect(ids.size).toBe(atlasTopics.length);
    expect(ids.has("ea.device.fet.mosfet")).toBe(true);
    expect(ids.has("ea.em.electrostatics.coulomb-law")).toBe(true);
    expect(ids.has("ea.device.fet.mosfet.gate-charge")).toBe(true);
    expect(ids.has("ea.storage.lithium-ion")).toBe(true);
  });

  it("has stable unique route slugs for topic record pages", () => {
    const slugs = new Set(atlasTopics.map((topic) => topic.slug));

    expect(slugs.size).toBe(atlasTopics.length);
    expect(slugs.has("device-fet-mosfet")).toBe(true);
    expect(slugs.has("device-fet-mosfet-gate-charge")).toBe(true);
    expect(slugs.has("em-electrostatics-coulomb-law")).toBe(true);
  });

  it("keeps every generated topic inside the executable schema", () => {
    const allowedKinds = new Set([
      "concept",
      "law",
      "quantity",
      "phenomenon",
      "material",
      "component",
      "circuit",
      "architecture",
      "system",
      "model",
      "method",
      "tool",
      "standard",
      "failure",
      "application",
      "history",
    ]);
    const allowedScopes = new Set(["core", "prerequisite", "enabling", "application"]);
    const maturityOrder = ["historical", "legacy", "established", "current", "emerging", "experimental"];
    const invalidTopics = atlasTopics
      .filter((topic) => {
        const maturityParts = topic.maturity?.split("+") ?? [];
        const maturityPositions = maturityParts.map((part) => maturityOrder.indexOf(part));
        const maturityIsValid =
          maturityParts.length <= 2 &&
          maturityPositions.every(
            (position, index) => position >= 0 && (index === 0 || position > maturityPositions[index - 1]),
          );

        return (
          !allowedKinds.has(topic.type) ||
          (topic.scopeRole !== undefined && !allowedScopes.has(topic.scopeRole)) ||
          !maturityIsValid ||
          !/^D[0-4](?:-D[0-4])?$/.test(topic.depth) ||
          !/^(?:S[0-3])?$/.test(topic.safety) ||
          !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(topic.slug)
        );
      })
      .map((topic) => topic.id);

    expect(invalidTopics).toEqual([]);
  });

  it("preserves explicit compact-record overrides in generated topic data", () => {
    const cryogenics = atlasTopics.find((topic) => topic.id === "ea.quantum.cryogenics");

    expect(cryogenics).toMatchObject({
      type: "method",
      scopeRole: "enabling",
      maturity: "current+emerging",
      depth: "D3-D4",
      safety: "S3",
    });
  });

  it("normalizes depth labels for display", () => {
    const thaiMojibakeMarker = "\u0e40\u0e19\u0082";

    expect(atlasTopics.every((topic) => !topic.depth.includes(thaiMojibakeMarker))).toBe(true);
    expect(atlasTopics.some((topic) => topic.depth === "D0-D4")).toBe(true);
  });

  it("keeps every subject preview aligned with a canonical topic", () => {
    const topicsById = new Map(atlasTopics.map((topic) => [topic.id, topic]));
    const missingTopics = subjectPreview.filter((preview) => !topicsById.has(preview.id));
    const mismatchedTopics = subjectPreview
      .filter((preview) => {
        const topic = topicsById.get(preview.id);
        return topic && (preview.en !== topic.name || preview.kind !== topic.type);
      })
      .map((preview) => preview.id);

    expect(missingTopics).toEqual([]);
    expect(mismatchedTopics).toEqual([]);
  });

  it("keeps canonical IDs used by the taxonomy and first-20 curriculum aligned with the inventory", () => {
    expect(Object.keys(canonicalTopicReferenceSources)).toHaveLength(2);
    const sourceText = Object.values(canonicalTopicReferenceSources).join("\n");
    const referencedIds = new Set(
      [...sourceText.matchAll(/\bea(?:\.[a-z0-9]+(?:-[a-z0-9]+)*){2,}\b/g)].map((match) => match[0]),
    );
    const topicIds = new Set(atlasTopics.map((topic) => topic.id));
    const missingIds = [...referencedIds].filter((id) => !topicIds.has(id));

    expect(missingIds).toEqual([]);
  });
});
