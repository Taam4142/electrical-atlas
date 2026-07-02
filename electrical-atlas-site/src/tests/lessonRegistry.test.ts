import { describe, expect, it } from "vitest";
import { atlasTopics } from "../lib/generated/atlasTopics";
import {
  getImplementedLessons,
  getLessonForCoveredTopic,
  getLessonHomeLabel,
  lessonRegistry,
  type LessonRegistryEntry,
  type Locale,
} from "../lib/lessonRegistry";
import { atlasRelationships } from "../lib/relationships";

const locales: Locale[] = ["en", "th"];
const registryEntries: readonly LessonRegistryEntry[] = lessonRegistry;
const routeModules = import.meta.glob("../pages/*/lessons/*.astro");

function lessonRouteExists(locale: Locale, slug: string) {
  return `../pages/${locale}/lessons/${slug}.astro` in routeModules;
}

describe("lesson registry", () => {
  it("keeps stable unique lesson slugs and IDs", () => {
    const slugs = new Set(registryEntries.map((lesson) => lesson.slug));
    const lessonIds = new Set(registryEntries.map((lesson) => lesson.lessonId));

    expect(slugs.size).toBe(registryEntries.length);
    expect(lessonIds.size).toBe(registryEntries.length);
    expect(slugs.has("what-is-electricity")).toBe(true);
    expect(slugs.has("switches-contacts")).toBe(true);
  });

  it("points primary and covered lesson topics at real atlas topic IDs", () => {
    const topicIds = new Set(atlasTopics.map((topic) => topic.id));
    const missingPrimaryTopics = registryEntries
      .filter((lesson) => !topicIds.has(lesson.primaryTopicId))
      .map((lesson) => `${lesson.slug}:${lesson.primaryTopicId}`);
    const missingCoveredTopics = registryEntries.flatMap((lesson) =>
      lesson.coveredTopicIds
        .filter((topicId) => !topicIds.has(topicId))
        .map((topicId) => `${lesson.slug}:${topicId}`),
    );
    const lessonsMissingPrimaryCoverage = registryEntries
      .filter((lesson) => !lesson.coveredTopicIds.includes(lesson.primaryTopicId))
      .map((lesson) => lesson.slug);

    expect(missingPrimaryTopics).toEqual([]);
    expect(missingCoveredTopics).toEqual([]);
    expect(lessonsMissingPrimaryCoverage).toEqual([]);
  });

  it("matches implemented lesson entries to real route wrappers", () => {
    const missingRoutes = registryEntries.flatMap((lesson) =>
      locales
        .filter((locale) => lesson.hasPage[locale])
        .filter((locale) => !lessonRouteExists(locale, lesson.slug))
        .map((locale) => `${locale}:${lesson.slug}`),
    );

    expect(missingRoutes).toEqual([]);
  });

  it("keeps implemented lesson navigation labels available in every locale", () => {
    const missingLabels = registryEntries.flatMap((lesson) =>
      locales
        .filter((locale) => lesson.hasPage[locale])
        .filter((locale) => lesson.navLabels[locale].trim().length === 0)
        .map((locale) => `${locale}:${lesson.slug}`),
    );

    expect(missingLabels).toEqual([]);
  });

  it("returns implemented lessons in registry order for homepage and header navigation", () => {
    expect(getImplementedLessons("en").map((lesson) => lesson.slug)).toEqual([
      "what-is-electricity",
      "voltage",
      "current",
      "resistance",
      "ohms-law",
      "series-parallel",
      "power-energy",
      "battery",
      "mosfet",
    ]);

    expect(getLessonHomeLabel(getImplementedLessons("th")[0], "th")).toBe("เริ่มบทแรก: ไฟฟ้าคืออะไร?");
  });

  it("allows planned lessons without creating empty public pages", () => {
    const plannedLessonsWithPages = registryEntries
      .filter((lesson) => lesson.status === "planned")
      .filter((lesson) => lesson.hasPage.en || lesson.hasPage.th)
      .map((lesson) => lesson.slug);

    expect(plannedLessonsWithPages).toEqual([]);
  });

  it("derives published topic-record lesson links from coverage metadata", () => {
    expect(getLessonForCoveredTopic("ea.fundamentals.voltage", "en")?.paths.en).toBe("/en/lessons/voltage/");
    expect(getLessonForCoveredTopic("ea.fundamentals.conductance", "en")?.paths.en).toBe(
      "/en/lessons/resistance/",
    );
    expect(getLessonForCoveredTopic("ea.storage.cell.metric", "th")?.paths.th).toBe("/th/lessons/battery/");
    expect(getLessonForCoveredTopic("ea.component.capacitor", "en")).toBeUndefined();
  });

  it("keeps relationship lesson references pointed at registry slugs", () => {
    const lessonSlugs = new Set<string>(registryEntries.map((lesson) => lesson.slug));
    const missingLessonIds = atlasRelationships.flatMap((relationship) =>
      [relationship.source, relationship.target]
        .filter((node) => node.kind === "lesson" && !lessonSlugs.has(node.id))
        .map((node) => node.id),
    );

    expect(missingLessonIds).toEqual([]);
  });

  it("does not mark source-sensitive lessons as published without source verification", () => {
    const unverifiedPublishedLessons = registryEntries
      .filter((lesson) => lesson.status === "published")
      .filter((lesson) => !["not-needed", "verified"].includes(lesson.sourceStatus))
      .map((lesson) => lesson.slug);

    expect(unverifiedPublishedLessons).toEqual([]);
  });
});
