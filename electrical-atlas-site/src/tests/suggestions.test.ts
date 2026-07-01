import { describe, expect, it } from "vitest";
import { atlasTopics } from "../lib/generated/atlasTopics";
import { getLessonSuggestions, getRelatedTopics } from "../lib/suggestions";

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

    expect(suggestions.some((suggestion) => suggestion.href === "/th/lessons/mosfet/")).toBe(true);
    expect(suggestions.every((suggestion) => suggestion.href.startsWith("/th/"))).toBe(true);
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
});
