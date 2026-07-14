import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  parseInventoryMarkdown,
  selectInventoryMarkdownFiles,
  validateTopicCollection,
} from "./topic-inventory.mjs";

const options = { sourceFile: "fixture.md", domain: "Fixture domain" };

function record({
  id = "ea.fixture.valid-topic",
  name = "Valid topic",
  summary = "A useful topic summary.",
  tags = "concept; core; current; D1–D3; S1",
} = {}) {
  return `- \`${id}\` **${name}** — ${summary} [${tags}]`;
}

function parseRecord(value) {
  return parseInventoryMarkdown(`## Fixture\n\n${value}`, options);
}

describe("topic inventory parser", () => {
  it("rejects case-variant Markdown extensions and unexpected numbered files", () => {
    const file = (name) => ({ name, isFile: () => true });
    const supportedFiles = ["01-foundations.md"];
    const canonicalEntries = [file("README.md"), file(supportedFiles[0])];

    assert.deepEqual(selectInventoryMarkdownFiles(canonicalEntries, supportedFiles), supportedFiles);
    assert.throws(
      () => selectInventoryMarkdownFiles([...canonicalEntries, file("14-extra.MD")], supportedFiles),
      /lowercase \.md extension/,
    );
    assert.throws(
      () => selectInventoryMarkdownFiles([...canonicalEntries, file("14-extra.txt")], supportedFiles),
      /NN-name\.md form/,
    );
    assert.throws(
      () => selectInventoryMarkdownFiles([...canonicalEntries, file("14-extra.md")], supportedFiles),
      /Unexpected numbered inventory files/,
    );
  });

  it("parses canonical records and intentionally supports model nodes", () => {
    const topics = parseInventoryMarkdown(
      `## Models\n\n${record({ tags: "model; enabling; current; D1–D4; S1" })}`,
      options,
    );

    assert.equal(topics.length, 1);
    assert.equal(topics[0].type, "model");
    assert.equal(topics[0].scopeRole, "enabling");
    assert.equal(topics[0].maturity, "current");
    assert.equal(topics[0].depth, "D1-D4");
    assert.equal(topics[0].safety, "S1");
    assert.equal(topics[0].slug, "fixture-valid-topic");
  });

  it("keeps inherited metadata absent instead of guessing compact-record defaults", () => {
    const [topic] = parseRecord(record({ tags: "concept; D1" }));

    assert.equal(Object.hasOwn(topic, "scopeRole"), false);
    assert.equal(Object.hasOwn(topic, "maturity"), false);
    assert.equal(topic.safety, "");
  });

  it("rejects every malformed bullet instead of silently dropping it", () => {
    const malformed = "- `ea.fixture.broken` **Broken topic — missing closing emphasis [concept; D1–D2]";

    assert.throws(
      () => parseInventoryMarkdown(`## Broken\n\n${malformed}`, options),
      /Malformed topic record at fixture\.md:3/,
    );
  });

  it("rejects invalid canonical IDs and node kinds", () => {
    assert.throws(
      () => parseRecord(record({ id: "EA.fixture.topic" })),
      /Invalid canonical topic ID/,
    );
    assert.throws(
      () => parseRecord(record({ tags: "enabling; current; D1–D3" })),
      /Invalid node kind "enabling"/,
    );
  });

  it("rejects unknown scope, maturity, depth, and safety metadata", () => {
    assert.throws(
      () => parseRecord(record({ tags: "concept; adjacent; D1–D3" })),
      /Unknown topic metadata tag "adjacent"/,
    );
    assert.throws(
      () => parseRecord(record({ tags: "concept; future; D1–D3" })),
      /Unknown topic metadata tag "future"/,
    );
    assert.throws(
      () => parseRecord(record({ tags: "concept; experimental+emerging; D1–D3" })),
      /canonical order/,
    );
    assert.throws(
      () => parseRecord(record({ tags: "concept; current+emerging+experimental; D1–D3" })),
      /at most two tags/,
    );
    assert.throws(
      () => parseRecord(record({ tags: "concept; current; enabling; D1–D3" })),
      /out of canonical order/,
    );
    assert.throws(
      () => parseRecord(record({ tags: "concept; D4–D2" })),
      /Depth range must be ascending/,
    );
    assert.throws(
      () => parseRecord(record({ tags: "concept; current; S1" })),
      /requires exactly one depth tag/,
    );
    assert.throws(
      () => parseRecord(record({ tags: "concept; D1–D3; S4" })),
      /Invalid safety tag "S4"/,
    );
  });

  it("requires heading context, allows prose cross-links, and rejects record-shaped lines without bullets", () => {
    assert.throws(() => parseInventoryMarkdown(record(), options), /must appear under an H2 section/);

    const proseTopics = parseInventoryMarkdown(
      "## Notes\n\nPrerequisite: `ea.fixture.valid-topic`. See also idea.example.com.",
      options,
    );
    assert.deepEqual(proseTopics, []);

    assert.throws(
      () => parseInventoryMarkdown(`## Notes\n\n${record().slice(2)}`, options),
      /must begin with "- "/,
    );
  });

  it("rejects every corruption pattern covered by the repository encoding check", () => {
    assert.throws(
      () => parseInventoryMarkdown(`## Broken\n\n${record({ summary: "Damaged \uFFFD text" })}`, options),
      /text-encoding corruption/,
    );
    assert.throws(
      () => parseInventoryMarkdown("## Broken \u00C2\u00B0 unit", options),
      /text-encoding corruption/,
    );
    assert.throws(
      () => parseInventoryMarkdown("## Broken \u00E2\u20AC\u201D dash", options),
      /text-encoding corruption/,
    );
  });

  it("rejects duplicate IDs and route-slug collisions", () => {
    const first = parseRecord(record({ id: "ea.fixture.same-topic" }))[0];
    const duplicate = parseInventoryMarkdown(
      `## Duplicate\n\n${record({ id: "ea.fixture.same-topic" })}`,
      { ...options, sourceFile: "duplicate.md" },
    )[0];
    assert.throws(
      () => validateTopicCollection([first, duplicate]),
      /Duplicate topic ID .*fixture\.md:3 and duplicate\.md:3/,
    );

    const collision = parseInventoryMarkdown(
      `## Collision\n\n${record({ id: "ea.fixture-same.topic" })}`,
      { ...options, sourceFile: "collision.md" },
    )[0];
    assert.equal(first.slug, collision.slug);
    assert.throws(
      () => validateTopicCollection([first, collision]),
      /Duplicate route slug .*fixture\.md:3.*collision\.md:3/,
    );
  });
});
