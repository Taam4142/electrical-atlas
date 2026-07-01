import { describe, expect, it } from "vitest";
import { atlasTopics } from "../lib/generated/atlasTopics";
import { atlasRelationships, relationshipLabels } from "../lib/relationships";
import { getLessonSuggestions, getRelatedTopicSuggestions, getRelatedTopics } from "../lib/suggestions";

describe("suggestion system", () => {
  it("builds curated lesson suggestions from real atlas topics", () => {
    const suggestions = getLessonSuggestions("mosfet", "en", atlasTopics);
    const hrefs = suggestions.map((suggestion) => suggestion.href);

    expect(suggestions.length).toBeGreaterThanOrEqual(6);
    expect(hrefs).toContain("/en/lessons/what-is-electricity/");
    expect(hrefs).toContain("/en/topics/device-fet-mosfet-gate-charge/");
    expect(hrefs).toContain("/en/topics/digital-cmos-inverter/");
  });

  it("builds localized route prefixes for Thai suggestions", () => {
    const suggestions = getLessonSuggestions("what-is-electricity", "th", atlasTopics);

    expect(suggestions.some((suggestion) => suggestion.href === "/th/lessons/voltage/")).toBe(true);
    expect(suggestions.some((suggestion) => suggestion.href === "/th/lessons/current/")).toBe(true);
    expect(suggestions.some((suggestion) => suggestion.href === "/th/lessons/resistance/")).toBe(true);
    expect(suggestions.some((suggestion) => suggestion.href === "/th/lessons/ohms-law/")).toBe(true);
    expect(suggestions.some((suggestion) => suggestion.href === "/th/lessons/mosfet/")).toBe(true);
    expect(suggestions.every((suggestion) => suggestion.href.startsWith("/th/"))).toBe(true);
  });

  it("builds curated voltage lesson suggestions", () => {
    const suggestions = getLessonSuggestions("voltage", "en", atlasTopics);
    const hrefs = suggestions.map((suggestion) => suggestion.href);

    expect(suggestions.length).toBeGreaterThanOrEqual(6);
    expect(hrefs).toContain("/en/lessons/what-is-electricity/");
    expect(hrefs).toContain("/en/topics/fundamentals-current/");
    expect(hrefs).toContain("/en/topics/em-potential-electric/");
    expect(hrefs).toContain("/en/topics/component-capacitor/");
  });

  it("builds curated current lesson suggestions", () => {
    const suggestions = getLessonSuggestions("current", "en", atlasTopics);
    const hrefs = suggestions.map((suggestion) => suggestion.href);

    expect(suggestions.length).toBeGreaterThanOrEqual(7);
    expect(hrefs).toContain("/en/lessons/voltage/");
    expect(hrefs).toContain("/en/topics/fundamentals-resistance/");
    expect(hrefs).toContain("/en/topics/circuit-law-ohm/");
    expect(hrefs).toContain("/en/topics/transport-current-density/");
    expect(hrefs).toContain("/en/topics/component-fuse/");
  });

  it("builds curated resistance lesson suggestions", () => {
    const suggestions = getLessonSuggestions("resistance", "en", atlasTopics);
    const hrefs = suggestions.map((suggestion) => suggestion.href);
    const ohmsLaw = suggestions.find((suggestion) => suggestion.href === "/en/topics/circuit-law-ohm/");

    expect(suggestions.length).toBeGreaterThanOrEqual(8);
    expect(hrefs).toContain("/en/lessons/voltage/");
    expect(hrefs).toContain("/en/lessons/current/");
    expect(hrefs).toContain("/en/lessons/ohms-law/");
    expect(hrefs).toContain("/en/topics/circuit-law-ohm/");
    expect(hrefs).toContain("/en/topics/component-resistor/");
    expect(hrefs).toContain("/en/topics/transport-ohm-microscopic/");
    expect(ohmsLaw?.relationType).toBe("mathematical-law");
  });

  it("builds curated Ohm's law lesson suggestions", () => {
    const suggestions = getLessonSuggestions("ohms-law", "en", atlasTopics);
    const hrefs = suggestions.map((suggestion) => suggestion.href);

    expect(suggestions.length).toBeGreaterThanOrEqual(8);
    expect(hrefs).toContain("/en/lessons/voltage/");
    expect(hrefs).toContain("/en/lessons/current/");
    expect(hrefs).toContain("/en/lessons/resistance/");
    expect(hrefs).toContain("/en/topics/fundamentals-power/");
    expect(hrefs).toContain("/en/topics/circuit-topology-series-parallel/");
    expect(hrefs).toContain("/en/topics/photonics-led/");
    expect(hrefs).toContain("/en/topics/device-diode-pn/");
  });

  it("keeps structured relationship records pointed at real topic IDs", () => {
    const topicIds = new Set(atlasTopics.map((topic) => topic.id));
    const lessonIds = new Set(["what-is-electricity", "voltage", "current", "resistance", "ohms-law", "mosfet"]);
    const missingTopicIds = atlasRelationships.flatMap((relationship) =>
      [relationship.source, relationship.target]
        .filter((node) => node.kind === "topic" && !topicIds.has(node.id))
        .map((node) => node.id),
    );
    const missingLessonIds = atlasRelationships.flatMap((relationship) =>
      [relationship.source, relationship.target]
        .filter((node) => node.kind === "lesson" && !lessonIds.has(node.id))
        .map((node) => node.id),
    );

    expect(missingTopicIds).toEqual([]);
    expect(missingLessonIds).toEqual([]);
    expect(Object.keys(relationshipLabels).length).toBeGreaterThan(10);
  });

  it("finds nearby topic records without recommending the current topic", () => {
    const mosfet = atlasTopics.find((topic) => topic.id === "ea.device.fet.mosfet");
    expect(mosfet).toBeDefined();

    const related = getRelatedTopics(mosfet!, atlasTopics, 8);
    const relatedIds = related.map((topic) => topic.id);

    expect(relatedIds).not.toContain("ea.device.fet.mosfet");
    expect(relatedIds).toContain("ea.device.fet.mosfet.gate-charge");
    expect(relatedIds.some((id) => id.startsWith("ea.device.fet.mosfet."))).toBe(true);
  });

  it("uses explicit topic relationships before metadata fallback suggestions", () => {
    const mosfet = atlasTopics.find((topic) => topic.id === "ea.device.fet.mosfet");
    expect(mosfet).toBeDefined();

    const suggestions = getRelatedTopicSuggestions(mosfet!, atlasTopics, "en", 8);

    expect(suggestions[0]?.href).toBe("/en/topics/device-fet-mosfet-gate-charge/");
    expect(suggestions[0]?.relationType).toBe("implementation-detail");
    expect(suggestions.some((suggestion) => suggestion.relationType === "metadata")).toBe(true);
  });
});
