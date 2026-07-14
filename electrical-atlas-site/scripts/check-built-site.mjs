import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { dirname, join, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const defaultDistRoot = resolve(projectRoot, "dist");

export const representativePages = [
  { path: "index.html", locale: "en" },
  { path: "en/index.html", locale: "en" },
  { path: "th/index.html", locale: "th" },
  { path: "en/guide/index.html", locale: "en" },
  { path: "th/guide/index.html", locale: "th" },
  { path: "en/lessons/what-is-electricity/index.html", locale: "en" },
  { path: "th/lessons/what-is-electricity/index.html", locale: "th" },
  { path: "en/topics/fundamentals-voltage/index.html", locale: "en" },
  { path: "th/topics/fundamentals-voltage/index.html", locale: "th" },
];

function listFiles(root) {
  return readdirSync(root, { withFileTypes: true }).flatMap((entry) => {
    const path = join(root, entry.name);
    return entry.isDirectory() ? listFiles(path) : [path];
  });
}

function toPortablePath(path) {
  return path.split(sep).join("/");
}

function getMetaAttributes(tag) {
  const attributes = new Map();
  const attributePattern = /([:\w-]+)\s*=\s*(?:"([^"]*)"|'([^']*)')/g;

  for (const match of tag.matchAll(attributePattern)) {
    attributes.set(match[1].toLowerCase(), match[2] ?? match[3] ?? "");
  }

  return attributes;
}

function getRobotsMeta(html) {
  return [...html.matchAll(/<meta\b[^>]*>/gi)]
    .map((match) => getMetaAttributes(match[0]))
    .filter((attributes) => attributes.get("name")?.toLowerCase() === "robots")
    .map((attributes) => attributes.get("content")?.toLowerCase().replace(/\s+/g, "") ?? "");
}

function rootRelativeReferences(html) {
  const references = [];
  const attributePattern = /\b(?:href|src)\s*=\s*(?:"([^"]*)"|'([^']*)')/gi;

  for (const match of html.matchAll(attributePattern)) {
    const value = match[1] ?? match[2] ?? "";
    if (value.startsWith("/") && !value.startsWith("//")) {
      references.push(value);
    }
  }

  return references;
}

function targetCandidates(distRoot, reference) {
  const rawPath = reference.split(/[?#]/, 1)[0];
  let decodedPath;

  try {
    decodedPath = decodeURIComponent(rawPath);
  } catch {
    return [];
  }

  const relativeTarget = decodedPath.replace(/^\/+/, "");
  const resolvedTarget = resolve(distRoot, relativeTarget);
  const distPrefix = `${resolve(distRoot)}${sep}`;
  if (resolvedTarget !== resolve(distRoot) && !resolvedTarget.startsWith(distPrefix)) {
    return [];
  }

  if (decodedPath.endsWith("/") || decodedPath === "/") {
    return [join(resolvedTarget, "index.html")];
  }

  return [resolvedTarget, join(resolvedTarget, "index.html"), `${resolvedTarget}.html`];
}

function hasBuiltTarget(distRoot, reference) {
  return targetCandidates(distRoot, reference).some(
    (candidate) => existsSync(candidate) && statSync(candidate).isFile(),
  );
}

export function validateBuiltSite(distRoot = defaultDistRoot) {
  if (!existsSync(distRoot) || !statSync(distRoot).isDirectory()) {
    throw new Error(`Built site directory is missing: ${distRoot}`);
  }

  const problems = [];
  for (const page of representativePages) {
    const pagePath = resolve(distRoot, page.path);
    if (!existsSync(pagePath)) {
      problems.push(`missing representative page: ${page.path}`);
      continue;
    }

    const html = readFileSync(pagePath, "utf8");
    if (!new RegExp(`<html\\b[^>]*\\blang=["']${page.locale}["']`, "i").test(html)) {
      problems.push(`wrong or missing lang=${page.locale}: ${page.path}`);
    }
  }

  const rootHtmlPath = resolve(distRoot, "index.html");
  if (existsSync(rootHtmlPath)) {
    const rootHtml = readFileSync(rootHtmlPath, "utf8");
    for (const localePath of ["/en/", "/th/"]) {
      if (!rootRelativeReferences(rootHtml).includes(localePath)) {
        problems.push(`root gateway is missing ${localePath}`);
      }
    }
  }

  const htmlFiles = listFiles(distRoot).filter((path) => path.endsWith(".html"));
  const checkedReferences = new Set();
  const missingReferences = new Map();
  let topicPageCount = 0;

  for (const htmlFile of htmlFiles) {
    const relativeHtmlPath = toPortablePath(relative(distRoot, htmlFile));
    const html = readFileSync(htmlFile, "utf8");
    const topicPage = /^(?:en|th)\/topics\/[^/]+\/index\.html$/.test(relativeHtmlPath);
    const robotsMeta = getRobotsMeta(html);

    if (topicPage) {
      topicPageCount += 1;
      if (robotsMeta.length !== 1 || robotsMeta[0] !== "noindex,follow") {
        problems.push(`topic page must contain exactly one noindex,follow robots tag: ${relativeHtmlPath}`);
      }
    } else if (robotsMeta.some((content) => content.split(",").includes("noindex"))) {
      problems.push(`non-topic page unexpectedly contains noindex: ${relativeHtmlPath}`);
    }

    for (const reference of rootRelativeReferences(html)) {
      checkedReferences.add(reference);
      if (!hasBuiltTarget(distRoot, reference)) {
        const sources = missingReferences.get(reference) ?? [];
        if (sources.length < 3) sources.push(relativeHtmlPath);
        missingReferences.set(reference, sources);
      }
    }
  }

  if (topicPageCount === 0) {
    problems.push("no built topic pages were found");
  }

  for (const [reference, sources] of missingReferences) {
    problems.push(`missing internal target ${reference} (from ${sources.join(", ")})`);
  }

  if (problems.length > 0) {
    const displayedProblems = problems.slice(0, 30).map((problem) => `- ${problem}`).join("\n");
    const remainder = problems.length > 30 ? `\n- ...and ${problems.length - 30} more` : "";
    throw new Error(`Built-site validation failed:\n${displayedProblems}${remainder}`);
  }

  console.log(
    `Validated ${htmlFiles.length} HTML files, ${topicPageCount} topic robots policies, and ${checkedReferences.size} unique root-relative references.`,
  );

  return {
    htmlFileCount: htmlFiles.length,
    topicPageCount,
    referenceCount: checkedReferences.size,
  };
}

const invokedPath = process.argv[1] ? resolve(process.argv[1]) : "";
if (invokedPath === fileURLToPath(import.meta.url)) {
  try {
    validateBuiltSite();
  } catch (error) {
    console.error(error instanceof Error ? error.message : error);
    process.exitCode = 1;
  }
}
