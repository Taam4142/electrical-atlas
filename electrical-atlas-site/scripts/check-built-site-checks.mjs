import assert from "node:assert/strict";
import { afterEach, describe, it } from "node:test";
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { tmpdir } from "node:os";
import { representativePages, validateBuiltSite } from "./check-built-site.mjs";

const temporaryRoots = [];

function writePage(root, page, { links = [], noindex = page.path.includes("/topics/") } = {}) {
  const outputPath = resolve(root, page.path);
  mkdirSync(dirname(outputPath), { recursive: true });
  const robots = noindex ? '<meta name="robots" content="noindex,follow">' : "";
  const anchors = links.map((href) => `<a href="${href}">${href}</a>`).join("");
  writeFileSync(
    outputPath,
    `<!doctype html><html lang="${page.locale}"><head>${robots}</head><body>${anchors}</body></html>`,
    "utf8",
  );
}

function createValidFixture() {
  const root = mkdtempSync(join(tmpdir(), "electrical-atlas-built-site-"));
  temporaryRoots.push(root);

  for (const page of representativePages) {
    const links = page.path === "index.html" ? ["/en/", "/th/"] : ["/"];
    writePage(root, page, { links });
  }

  return root;
}

afterEach(() => {
  const temporaryRoot = `${resolve(tmpdir())}${process.platform === "win32" ? "\\" : "/"}`;
  for (const root of temporaryRoots.splice(0)) {
    assert.ok(resolve(root).startsWith(temporaryRoot), `Refusing to remove unexpected path: ${root}`);
    rmSync(root, { recursive: true, force: true });
  }
});

describe("built-site validator", () => {
  it("accepts bilingual representative output with the narrow topic noindex policy", () => {
    const result = validateBuiltSite(createValidFixture());

    assert.equal(result.htmlFileCount, representativePages.length);
    assert.equal(result.topicPageCount, 2);
    assert.equal(result.referenceCount, 3);
  });

  it("rejects a broken root-relative internal link", () => {
    const root = createValidFixture();
    const guide = representativePages.find((page) => page.path === "en/guide/index.html");
    writePage(root, guide, { links: ["/missing-page/"] });

    assert.throws(() => validateBuiltSite(root), /missing internal target \/missing-page\//);
  });

  it("rejects noindex on a non-topic page", () => {
    const root = createValidFixture();
    const lesson = representativePages.find(
      (page) => page.path === "en/lessons/what-is-electricity/index.html",
    );
    writePage(root, lesson, { links: ["/"], noindex: true });

    assert.throws(() => validateBuiltSite(root), /non-topic page unexpectedly contains noindex/);
  });
});
