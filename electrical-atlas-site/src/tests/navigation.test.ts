import { describe, expect, it } from "vitest";
import { getImplementedLessons } from "../lib/lessonRegistry";

const rootPages = import.meta.glob<string>("../pages/index.astro", {
  eager: true,
  query: "?raw",
  import: "default",
});

const rootSource = Object.values(rootPages)[0] ?? "";

describe("public navigation", () => {
  it("keeps the root page as a minimal bilingual gateway", () => {
    expect(rootSource).toContain('href="/en/"');
    expect(rootSource).toContain('href="/th/"');

    const individualLessonPaths = getImplementedLessons("en").map((lesson) => lesson.paths.en);
    expect(individualLessonPaths.filter((path) => rootSource.includes(path))).toEqual([]);
  });
});
