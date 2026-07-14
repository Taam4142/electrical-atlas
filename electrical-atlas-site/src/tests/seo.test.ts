import { describe, expect, it } from "vitest";

const topicRouteSources = import.meta.glob<string>("../pages/*/topics/*.astro", {
  eager: true,
  query: "?raw",
  import: "default",
});
const baseLayoutSources = import.meta.glob<string>("../layouts/BaseLayout.astro", {
  eager: true,
  query: "?raw",
  import: "default",
});

describe("mapped topic indexing", () => {
  it("opts both locale topic templates into noindex without changing other routes", () => {
    const sources = Object.values(topicRouteSources);

    expect(sources).toHaveLength(2);
    expect(sources.every((source) => /\snoindex(?:\s|\n|>)/.test(source))).toBe(true);
  });

  it("renders the narrow noindex,follow policy through the shared layout", () => {
    const layoutSource = Object.values(baseLayoutSources)[0] ?? "";

    expect(layoutSource).toContain('content="noindex,follow"');
    expect(layoutSource).toContain("noindex ?");
  });
});
