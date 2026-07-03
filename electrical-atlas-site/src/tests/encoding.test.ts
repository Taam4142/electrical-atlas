import { describe, expect, it } from "vitest";

const scannedFiles = {
  ...import.meta.glob<string>("../../../README.md", { eager: true, query: "?raw", import: "default" }),
  ...import.meta.glob<string>("../../../CLAUDE.md", { eager: true, query: "?raw", import: "default" }),
  ...import.meta.glob<string>("../../../docs/**/*.md", { eager: true, query: "?raw", import: "default" }),
  ...import.meta.glob<string>("../../../electrical-atlas/**/*.md", { eager: true, query: "?raw", import: "default" }),
  ...import.meta.glob<string>("../**/*.{astro,css,json,md,mdx,mjs,ts,tsx}", {
    eager: true,
    query: "?raw",
    import: "default",
  }),
  ...import.meta.glob<string>("../../public/data/**/*.json", { eager: true, query: "?raw", import: "default" }),
};

const mojibakePatterns = [
  { label: "Unicode replacement character", pattern: /\uFFFD/u },
  { label: "C1 control character", pattern: /[\u0080-\u009F]/u },
  { label: "Thai Windows-1252 mojibake prefix", pattern: /\u0e42[\u20AC\u0080-\u009F\u201C\u201D\u2013\u2014]/u },
  { label: "common Latin-1 mojibake", pattern: /(?:\u00C2[\u00B0\u00B1\u00B5\u00A9\u00AE]|\u00C3.|\u00E2[\u20AC\u0080-\u009F])/u },
];

type EncodingFinding = {
  file: string;
  line: number;
  label: string;
  snippet: string;
};

function displayPath(filePath: string) {
  return filePath
    .replace(/^\.\.\/\.\.\/\.\.\//u, "")
    .replace(/^\.\.\/\.\.\//u, "electrical-atlas-site/")
    .replace(/^\.\.\//u, "electrical-atlas-site/src/");
}

function findEncodingWarnings() {
  const findings: EncodingFinding[] = [];

  for (const [filePath, content] of Object.entries(scannedFiles)) {
    const lines = content.split(/\r?\n/u);

    lines.forEach((line, index) => {
      for (const { label, pattern } of mojibakePatterns) {
        if (pattern.test(line)) {
          findings.push({
            file: displayPath(filePath),
            line: index + 1,
            label,
            snippet: line.trim().replace(/\s+/gu, " ").slice(0, 160),
          });
        }
      }
    });
  }

  return findings;
}

describe("source text encoding", () => {
  it("does not contain common mojibake markers in docs, lessons, source, or generated topic data", () => {
    expect(findEncodingWarnings()).toEqual([]);
  });
});
