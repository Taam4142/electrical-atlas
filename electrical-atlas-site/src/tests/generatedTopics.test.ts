import { describe, expect, it } from "vitest";
import { atlasTopicMeta, atlasTopics } from "../lib/generated/atlasTopics";

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

  it("normalizes depth labels for display", () => {
    const thaiMojibakeMarker = "\u0e40\u0e19\u0082";

    expect(atlasTopics.every((topic) => !topic.depth.includes(thaiMojibakeMarker))).toBe(true);
    expect(atlasTopics.some((topic) => topic.depth === "D0-D4")).toBe(true);
  });
});
