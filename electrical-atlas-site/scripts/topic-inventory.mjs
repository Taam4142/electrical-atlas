const TOPIC_RECORD_PATTERN = /^- `([^`]+)` \*\*([^*]+)\*\*\s+(?:—|–|-)\s+(.+?)\s+\[([^\]]+)\]\s*$/;
const TOPIC_RECORD_WITHOUT_BULLET_PATTERN = /^\s*`[^`]+` \*\*[^*]+\*\*\s+(?:—|–|-)\s+.+?\s+\[[^\]]+\]\s*$/;
const CANONICAL_ID_PATTERN = /^ea(?:\.[a-z0-9]+(?:-[a-z0-9]+)*){2,}$/;
const ROUTE_SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export const nodeKinds = [
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
];

export const scopeRoles = ["core", "prerequisite", "enabling", "application"];
export const maturityTags = ["historical", "legacy", "established", "current", "emerging", "experimental"];

export function selectInventoryMarkdownFiles(entries, supportedNumberedFiles) {
  const markdownCandidates = entries.filter((entry) => /\.md$/i.test(entry.name));
  const nonFileCandidates = markdownCandidates.filter((entry) => !entry.isFile()).map((entry) => entry.name);
  if (nonFileCandidates.length > 0) {
    throw new Error(`Inventory Markdown candidates must be files: ${nonFileCandidates.join(", ")}`);
  }

  const noncanonicalExtensions = markdownCandidates
    .filter((entry) => !entry.name.endsWith(".md"))
    .map((entry) => entry.name);
  if (noncanonicalExtensions.length > 0) {
    throw new Error(
      `Inventory Markdown filenames must use the lowercase .md extension: ${noncanonicalExtensions.join(", ")}`,
    );
  }

  const noncanonicalNumberedFiles = entries
    .filter((entry) => /^\d{2}-/.test(entry.name) && !/^\d{2}-.*\.md$/.test(entry.name))
    .map((entry) => entry.name);
  if (noncanonicalNumberedFiles.length > 0) {
    throw new Error(
      `Numbered inventory filenames must use the NN-name.md form: ${noncanonicalNumberedFiles.join(", ")}`,
    );
  }

  const markdownFiles = markdownCandidates.map((entry) => entry.name);
  const unexpectedMarkdownFiles = markdownFiles.filter(
    (file) => file !== "README.md" && !/^\d{2}-.*\.md$/.test(file),
  );
  if (unexpectedMarkdownFiles.length > 0) {
    throw new Error(`Unexpected inventory Markdown files: ${unexpectedMarkdownFiles.join(", ")}`);
  }

  const inventoryFiles = markdownFiles.filter((file) => /^\d{2}-.*\.md$/.test(file)).sort();
  if (inventoryFiles.length === 0) {
    throw new Error("No numbered inventory files found");
  }

  const supportedFiles = new Set(supportedNumberedFiles);
  const unexpectedNumberedFiles = inventoryFiles.filter((file) => !supportedFiles.has(file));
  if (unexpectedNumberedFiles.length > 0) {
    throw new Error(`Unexpected numbered inventory files: ${unexpectedNumberedFiles.join(", ")}`);
  }

  const missingNumberedFiles = supportedNumberedFiles.filter((file) => !inventoryFiles.includes(file));
  if (missingNumberedFiles.length > 0) {
    throw new Error(`Expected inventory files are missing: ${missingNumberedFiles.join(", ")}`);
  }

  return inventoryFiles;
}

const nodeKindSet = new Set(nodeKinds);
const scopeRoleSet = new Set(scopeRoles);
const maturityTagSet = new Set(maturityTags);
const mojibakePattern = /(?:\uFFFD|[\u0080-\u009F]|\u0e42[\u20AC\u0080-\u009F\u201C\u201D\u2013\u2014]|\u00C2[\u00B0\u00B1\u00B5\u00A9\u00AE]|\u00C3.|\u00E2[\u20AC\u0080-\u009F])/u;
const topicSourceLines = new WeakMap();

function location(sourceFile, lineNumber) {
  return `${sourceFile}:${lineNumber}`;
}

function fail(sourceFile, lineNumber, message) {
  throw new Error(`${message} at ${location(sourceFile, lineNumber)}`);
}

function topicLocation(topic) {
  const lineNumber = topicSourceLines.get(topic);
  return lineNumber === undefined ? topic.sourceFile : location(topic.sourceFile, lineNumber);
}

export function cleanText(value) {
  return value.replaceAll(/\s+/g, " ").trim();
}

export function idToRouteSlug(id) {
  return id
    .replace(/^ea\./, "")
    .replaceAll(".", "-")
    .replace(/[^a-z0-9-]/gi, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();
}

function parseMaturity(value, sourceFile, lineNumber) {
  const parts = value.split("+");

  if (parts.length > 2) {
    fail(sourceFile, lineNumber, `Maturity field may contain at most two tags in "${value}"`);
  }

  if (parts.some((part) => !maturityTagSet.has(part))) {
    fail(sourceFile, lineNumber, `Invalid maturity tag "${value}"`);
  }

  if (new Set(parts).size !== parts.length) {
    fail(sourceFile, lineNumber, `Repeated maturity tag in "${value}"`);
  }

  const order = parts.map((part) => maturityTags.indexOf(part));
  if (order.some((position, index) => index > 0 && position <= order[index - 1])) {
    fail(sourceFile, lineNumber, `Maturity tags must follow canonical order in "${value}"`);
  }

  return value;
}

function parseDepth(value, sourceFile, lineNumber) {
  const match = value.match(/^D([0-4])(?:[–-]D([0-4]))?$/);

  if (!match) {
    fail(sourceFile, lineNumber, `Invalid depth tag "${value}"`);
  }

  const start = Number(match[1]);
  const end = match[2] === undefined ? start : Number(match[2]);
  if (end < start) {
    fail(sourceFile, lineNumber, `Depth range must be ascending in "${value}"`);
  }

  return start === end ? `D${start}` : `D${start}-D${end}`;
}

function parseTags(rawTags, sourceFile, lineNumber) {
  const tags = rawTags.split(";").map(cleanText);

  if (tags.length === 0 || tags.some((tag) => tag.length === 0)) {
    fail(sourceFile, lineNumber, "Topic tags must not be empty");
  }

  const [type, ...metadataTags] = tags;
  if (!nodeKindSet.has(type)) {
    fail(sourceFile, lineNumber, `Invalid node kind "${type}"`);
  }

  let scopeRole = "";
  let maturity = "";
  let depth = "";
  let safety = "";
  let previousFieldOrder = 0;

  function requireFieldOrder(fieldOrder, tag) {
    if (fieldOrder < previousFieldOrder) {
      fail(sourceFile, lineNumber, `Topic metadata field "${tag}" is out of canonical order`);
    }
    previousFieldOrder = fieldOrder;
  }

  for (const tag of metadataTags) {
    if (scopeRoleSet.has(tag)) {
      requireFieldOrder(1, tag);
      if (scopeRole) {
        fail(sourceFile, lineNumber, `Multiple scope roles "${scopeRole}" and "${tag}"`);
      }
      scopeRole = tag;
      continue;
    }

    if (tag.startsWith("D")) {
      requireFieldOrder(3, tag);
      if (depth) {
        fail(sourceFile, lineNumber, `Multiple depth tags "${depth}" and "${tag}"`);
      }
      depth = parseDepth(tag, sourceFile, lineNumber);
      continue;
    }

    if (tag.startsWith("S")) {
      requireFieldOrder(4, tag);
      if (!/^S[0-3]$/.test(tag)) {
        fail(sourceFile, lineNumber, `Invalid safety tag "${tag}"`);
      }
      if (safety) {
        fail(sourceFile, lineNumber, `Multiple safety tags "${safety}" and "${tag}"`);
      }
      safety = tag;
      continue;
    }

    if (tag.includes("+") || maturityTagSet.has(tag)) {
      requireFieldOrder(2, tag);
      if (maturity) {
        fail(sourceFile, lineNumber, `Multiple maturity fields "${maturity}" and "${tag}"`);
      }
      maturity = parseMaturity(tag, sourceFile, lineNumber);
      continue;
    }

    fail(sourceFile, lineNumber, `Unknown topic metadata tag "${tag}"`);
  }

  if (!depth) {
    fail(sourceFile, lineNumber, "Every topic requires exactly one depth tag");
  }

  return { type, scopeRole, maturity, depth, safety };
}

export function parseInventoryMarkdown(markdown, { sourceFile, domain }) {
  const lines = markdown.split(/\r?\n/);
  const topics = [];
  let section = "";
  let subsection = "";

  for (const [index, line] of lines.entries()) {
    const lineNumber = index + 1;
    if (mojibakePattern.test(line)) {
      fail(sourceFile, lineNumber, "Possible text-encoding corruption");
    }
    const sectionMatch = line.match(/^##\s+(.+)$/);
    if (sectionMatch) {
      section = cleanText(sectionMatch[1]);
      subsection = "";
      continue;
    }

    const subsectionMatch = line.match(/^###\s+(.+)$/);
    if (subsectionMatch) {
      subsection = cleanText(subsectionMatch[1]);
      continue;
    }

    if (!/^\s*-\s+/.test(line)) {
      if (TOPIC_RECORD_WITHOUT_BULLET_PATTERN.test(line)) {
        fail(sourceFile, lineNumber, 'Topic record candidate must begin with "- "');
      }
      continue;
    }

    const topicMatch = line.match(TOPIC_RECORD_PATTERN);
    if (!topicMatch) {
      fail(sourceFile, lineNumber, "Malformed topic record");
    }

    const [, rawId, rawName, rawSummary, rawTags] = topicMatch;
    const id = cleanText(rawId);
    const name = cleanText(rawName);
    const summary = cleanText(rawSummary);

    if (!CANONICAL_ID_PATTERN.test(id)) {
      fail(sourceFile, lineNumber, `Invalid canonical topic ID "${id}"`);
    }
    if (!name) {
      fail(sourceFile, lineNumber, "Topic name must not be empty");
    }
    if (!summary) {
      fail(sourceFile, lineNumber, "Topic summary must not be empty");
    }
    if (!section) {
      fail(sourceFile, lineNumber, "Topic record must appear under an H2 section");
    }

    const tags = parseTags(rawTags, sourceFile, lineNumber);
    const slug = idToRouteSlug(id);
    if (!ROUTE_SLUG_PATTERN.test(slug)) {
      fail(sourceFile, lineNumber, `Invalid route slug "${slug}" generated from "${id}"`);
    }

    const topic = {
      id,
      name,
      summary,
      type: tags.type,
      ...(tags.scopeRole ? { scopeRole: tags.scopeRole } : {}),
      ...(tags.maturity ? { maturity: tags.maturity } : {}),
      depth: tags.depth,
      safety: tags.safety,
      domain,
      sourceFile,
      section,
      subsection,
      slug,
      status: "mapped",
    };
    topicSourceLines.set(topic, lineNumber);
    topics.push(topic);
  }

  return topics;
}

export function validateTopicCollection(topics) {
  const ids = new Map();
  const slugs = new Map();

  for (const topic of topics) {
    if (ids.has(topic.id)) {
      const firstTopic = ids.get(topic.id);
      throw new Error(
        `Duplicate topic ID "${topic.id}" at ${topicLocation(firstTopic)} and ${topicLocation(topic)}`,
      );
    }
    ids.set(topic.id, topic);

    if (slugs.has(topic.slug)) {
      const firstTopic = slugs.get(topic.slug);
      throw new Error(
        `Duplicate route slug "${topic.slug}" for "${firstTopic.id}" at ${topicLocation(firstTopic)} and "${topic.id}" at ${topicLocation(topic)}`,
      );
    }
    slugs.set(topic.slug, topic);
  }
}
