import { readFile } from "node:fs/promises";
import { describe, expect, it } from "vitest";
import { lessonRegistry, type LessonRegistryEntry, type SourceStatus } from "../lib/lessonRegistry";

type ReviewState = "draft" | "in-review" | "approved" | "superseded";
type GateState = "pending" | "passed" | "failed" | "not-required";
type ReviewerAuthority = "maintainer" | "project-owner" | "qualified-human" | "policy";

type ReviewGate = {
  status: GateState;
  reviewer: string;
  reviewerAuthority: ReviewerAuthority;
  reviewedAt: string | null;
  note: string;
};

type LessonReviewControl = {
  schemaVersion: 2;
  lessonId: string;
  recordState: ReviewState;
  sourceStatus: SourceStatus;
  reviewedRevision: string;
  reviewedAt: string | null;
  nextReviewAt: string | null;
  qualifiedReviewRequired: boolean;
  qualifiedReviewReason: string;
  blockers: string[];
  reviewedFiles: Record<string, string>;
  approvals: Record<string, ReviewGate>;
};

const registryEntries: readonly LessonRegistryEntry[] = lessonRegistry;
const reviewRecordMarkdown = import.meta.glob("../../../docs/lesson-reviews/*.md", {
  eager: true,
  import: "default",
  query: "?raw",
}) as Record<string, string>;

const reviewStates = ["draft", "in-review", "approved", "superseded"] as const;
const gateStates = ["pending", "passed", "failed", "not-required"] as const;
const reviewerAuthorities = ["maintainer", "project-owner", "qualified-human", "policy"] as const;
const sourceStatuses = ["not-needed", "needed", "draft", "verified", "needs-update"] as const;
const standardGateNames = [
  "sourceReview",
  "technicalAccuracy",
  "englishContent",
  "thaiLanguage",
  "qualifiedHuman",
  "implementationVerification",
  "visualAccessibility",
  "previewDeployment",
  "publication",
] as const;
const reviewReadyPassedGates = [
  "technicalAccuracy",
  "englishContent",
  "implementationVerification",
  "visualAccessibility",
] as const;
const publicationPassedGates = [
  "technicalAccuracy",
  "englishContent",
  "implementationVerification",
  "visualAccessibility",
  "previewDeployment",
  "publication",
] as const;
const controlFields = [
  "schemaVersion",
  "lessonId",
  "recordState",
  "sourceStatus",
  "reviewedRevision",
  "reviewedAt",
  "nextReviewAt",
  "qualifiedReviewRequired",
  "qualifiedReviewReason",
  "blockers",
  "reviewedFiles",
  "approvals",
] as const;
const gateFields = ["status", "reviewer", "reviewerAuthority", "reviewedAt", "note"] as const;
const sha256Pattern = /^[a-f0-9]{64}$/;
const revisionFingerprintPattern = /^sha256:[a-f0-9]{64}$/;
const gateNamePattern = /^[a-z][A-Za-z0-9]*$/;
const reviewedPathPattern = /^electrical-atlas-site\/(?:src|public)\/[A-Za-z0-9._/-]+$/;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function hasOnlyExactKeys(
  value: Record<string, unknown>,
  expectedKeys: readonly string[],
  label: string,
  errors: string[],
) {
  const expected = new Set(expectedKeys);

  for (const key of Object.keys(value)) {
    if (!expected.has(key)) errors.push(`${label}:unknown-field:${key}`);
  }

  for (const key of expectedKeys) {
    if (!Object.hasOwn(value, key)) errors.push(`${label}:missing-field:${key}`);
  }
}

function isValidDate(value: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;

  const parsed = new Date(`${value}T00:00:00.000Z`);
  return !Number.isNaN(parsed.valueOf()) && parsed.toISOString().slice(0, 10) === value;
}

function currentUtcDate(): string {
  return new Date().toISOString().slice(0, 10);
}

function validateOptionalDate(value: unknown, label: string, errors: string[]): value is string | null {
  if (value === null) return true;

  if (typeof value !== "string" || !isValidDate(value)) {
    errors.push(`${label}:expected-real-YYYY-MM-DD-or-null`);
    return false;
  }

  return true;
}

function parseReviewControl(reviewRecord: string, markdown: string): LessonReviewControl {
  const match = markdown.match(/<!-- lesson-review-control\s*([\s\S]*?)\s*-->/);

  if (!match) {
    throw new Error(`${reviewRecord}:missing lesson-review-control block`);
  }

  let parsed: unknown;

  try {
    parsed = JSON.parse(match[1]);
  } catch (error) {
    throw new Error(`${reviewRecord}:invalid JSON:${error instanceof Error ? error.message : String(error)}`);
  }

  if (!isRecord(parsed)) {
    throw new Error(`${reviewRecord}:control block must be a JSON object`);
  }

  const errors: string[] = [];
  hasOnlyExactKeys(parsed, controlFields, "control", errors);

  if (parsed.schemaVersion !== 2) errors.push("schemaVersion:expected-2");
  if (typeof parsed.lessonId !== "string" || !parsed.lessonId.trim()) errors.push("lessonId:non-empty-string");
  if (!reviewStates.includes(parsed.recordState as ReviewState)) errors.push("recordState:invalid-enum");
  if (!sourceStatuses.includes(parsed.sourceStatus as SourceStatus)) errors.push("sourceStatus:invalid-enum");
  if (typeof parsed.reviewedRevision !== "string" || !revisionFingerprintPattern.test(parsed.reviewedRevision)) {
    errors.push("reviewedRevision:expected-manifest-sha256-fingerprint");
  }

  const reviewedAtIsDate = validateOptionalDate(parsed.reviewedAt, "reviewedAt", errors);
  const nextReviewAtIsDate = validateOptionalDate(parsed.nextReviewAt, "nextReviewAt", errors);

  if (typeof parsed.qualifiedReviewRequired !== "boolean") {
    errors.push("qualifiedReviewRequired:expected-boolean");
  }
  if (typeof parsed.qualifiedReviewReason !== "string" || !parsed.qualifiedReviewReason.trim()) {
    errors.push("qualifiedReviewReason:non-empty-string");
  }

  if (!Array.isArray(parsed.blockers)) {
    errors.push("blockers:expected-array");
  } else {
    const blockers = parsed.blockers.filter((blocker): blocker is string => typeof blocker === "string");
    if (blockers.length !== parsed.blockers.length || blockers.some((blocker) => !blocker.trim())) {
      errors.push("blockers:non-empty-strings-only");
    }
    if (new Set(blockers).size !== blockers.length) errors.push("blockers:duplicate");
  }

  if (!isRecord(parsed.reviewedFiles)) {
    errors.push("reviewedFiles:expected-object");
  } else {
    for (const [path, hash] of Object.entries(parsed.reviewedFiles)) {
      if (
        !reviewedPathPattern.test(path) ||
        path.includes("..") ||
        path.includes("//") ||
        path.includes("\\")
      ) {
        errors.push(`reviewedFiles:${path}:invalid-repository-path`);
      }
      if (typeof hash !== "string" || !sha256Pattern.test(hash)) {
        errors.push(`reviewedFiles:${path}:invalid-normalized-lf-sha256`);
      }
    }
  }

  const validatedGates = new Map<string, ReviewGate>();

  if (!isRecord(parsed.approvals)) {
    errors.push("approvals:expected-object");
  } else {
    for (const gateName of standardGateNames) {
      if (!Object.hasOwn(parsed.approvals, gateName)) errors.push(`approvals:missing-gate:${gateName}`);
    }

    for (const [gateName, rawGate] of Object.entries(parsed.approvals)) {
      if (!gateNamePattern.test(gateName)) errors.push(`approvals:${gateName}:invalid-gate-name`);
      if (!isRecord(rawGate)) {
        errors.push(`approvals:${gateName}:expected-object`);
        continue;
      }

      hasOnlyExactKeys(rawGate, gateFields, `approvals:${gateName}`, errors);
      const statusIsValid = gateStates.includes(rawGate.status as GateState);
      const authorityIsValid = reviewerAuthorities.includes(rawGate.reviewerAuthority as ReviewerAuthority);
      const gateDateIsValid = validateOptionalDate(rawGate.reviewedAt, `approvals:${gateName}:reviewedAt`, errors);

      if (!statusIsValid) errors.push(`approvals:${gateName}:invalid-status`);
      if (typeof rawGate.reviewer !== "string" || !rawGate.reviewer.trim()) {
        errors.push(`approvals:${gateName}:reviewer-required`);
      }
      if (!authorityIsValid) errors.push(`approvals:${gateName}:invalid-reviewer-authority`);
      if (typeof rawGate.note !== "string" || !rawGate.note.trim()) {
        errors.push(`approvals:${gateName}:note-required`);
      }

      if (statusIsValid && rawGate.status === "pending" && rawGate.reviewedAt !== null) {
        errors.push(`approvals:${gateName}:pending-date-must-be-null`);
      }
      if (statusIsValid && rawGate.status !== "pending" && (!gateDateIsValid || rawGate.reviewedAt === null)) {
        errors.push(`approvals:${gateName}:decision-date-required`);
      }
      if (statusIsValid && authorityIsValid) {
        if (rawGate.status === "not-required" && rawGate.reviewerAuthority !== "policy") {
          errors.push(`approvals:${gateName}:not-required-needs-policy-authority`);
        }
        if (rawGate.status !== "not-required" && rawGate.reviewerAuthority === "policy") {
          errors.push(`approvals:${gateName}:policy-authority-only-for-not-required`);
        }
      }

      if (
        statusIsValid &&
        authorityIsValid &&
        typeof rawGate.reviewer === "string" &&
        typeof rawGate.note === "string" &&
        gateDateIsValid
      ) {
        validatedGates.set(gateName, rawGate as unknown as ReviewGate);
      }
    }
  }

  if (
    reviewedAtIsDate &&
    typeof parsed.reviewedAt === "string" &&
    parsed.reviewedAt > currentUtcDate()
  ) {
    errors.push("reviewedAt:future-date");
  }
  if (
    reviewedAtIsDate &&
    nextReviewAtIsDate &&
    typeof parsed.reviewedAt === "string" &&
    typeof parsed.nextReviewAt === "string" &&
    parsed.nextReviewAt <= parsed.reviewedAt
  ) {
    errors.push("nextReviewAt:must-be-after-reviewedAt");
  }
  if (
    ["in-review", "approved"].includes(String(parsed.recordState)) &&
    (!reviewedAtIsDate || parsed.reviewedAt === null)
  ) {
    errors.push("reviewedAt:required-for-active-review");
  }
  if (
    ["in-review", "approved"].includes(String(parsed.recordState)) &&
    isRecord(parsed.reviewedFiles) &&
    Object.keys(parsed.reviewedFiles).length === 0
  ) {
    errors.push("reviewedFiles:active-review-needs-content-binding");
  }
  if (
    parsed.recordState === "approved" &&
    Array.isArray(parsed.blockers) &&
    parsed.blockers.length > 0
  ) {
    errors.push("blockers:approved-record-must-be-empty");
  }

  for (const [gateName, gate] of validatedGates) {
    if (gate.reviewedAt && gate.reviewedAt > currentUtcDate()) {
      errors.push(`approvals:${gateName}:future-date`);
    }
    if (
      gate.reviewedAt &&
      typeof parsed.reviewedAt === "string" &&
      isValidDate(parsed.reviewedAt) &&
      gate.reviewedAt > parsed.reviewedAt
    ) {
      errors.push(`approvals:${gateName}:later-than-record-review-date`);
    }
  }

  const sourceReview = validatedGates.get("sourceReview");
  if (parsed.sourceStatus === "verified" && sourceReview?.status !== "passed") {
    errors.push("sourceStatus:verified-requires-passed-sourceReview");
  }
  if (parsed.sourceStatus === "not-needed" && sourceReview?.status !== "not-required") {
    errors.push("sourceStatus:not-needed-requires-not-required-sourceReview");
  }

  const publication = validatedGates.get("publication");
  if (publication && publication.reviewerAuthority !== "project-owner") {
    errors.push("approvals:publication:project-owner-authority-required");
  }

  const qualifiedHuman = validatedGates.get("qualifiedHuman");
  if (parsed.qualifiedReviewRequired === true) {
    if (qualifiedHuman?.status === "not-required") {
      errors.push("approvals:qualifiedHuman:cannot-be-not-required");
    }
    if (qualifiedHuman?.reviewerAuthority !== "qualified-human") {
      errors.push("approvals:qualifiedHuman:qualified-human-authority-required");
    }
  }
  if (parsed.qualifiedReviewRequired === false) {
    if (qualifiedHuman?.status !== "not-required" || qualifiedHuman.reviewerAuthority !== "policy") {
      errors.push("approvals:qualifiedHuman:policy-not-required-decision-required");
    }
  }

  if (errors.length > 0) {
    throw new Error(`${reviewRecord}: invalid control block\n- ${errors.join("\n- ")}`);
  }

  return parsed as unknown as LessonReviewControl;
}

function readReviewControl(reviewRecord: string): LessonReviewControl {
  const markdown = reviewRecordMarkdown[`../../../${reviewRecord}`];

  if (!markdown) {
    throw new Error(`Missing review record ${reviewRecord}`);
  }

  return parseReviewControl(reviewRecord, markdown);
}

function mutateControlBlock(
  markdown: string,
  mutate: (control: Record<string, unknown>) => void,
): string {
  const match = markdown.match(/<!-- lesson-review-control\s*([\s\S]*?)\s*-->/);
  if (!match) throw new Error("Fixture is missing its lesson-review-control block");

  const control = JSON.parse(match[1]) as Record<string, unknown>;
  mutate(control);
  return markdown.replace(match[0], `<!-- lesson-review-control\n${JSON.stringify(control, null, 2)}\n-->`);
}

function normalizeLf(contents: string): string {
  return contents.replace(/\r\n?/g, "\n");
}

async function sha256NormalizedLf(contents: string): Promise<string> {
  const bytes = new TextEncoder().encode(normalizeLf(contents));
  const digest = await crypto.subtle.digest("SHA-256", bytes);

  return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, "0")).join("");
}

async function reviewedManifestFingerprint(reviewedFiles: Record<string, string>): Promise<string> {
  const canonicalManifest = Object.entries(reviewedFiles)
    .sort(([leftPath], [rightPath]) => (leftPath < rightPath ? -1 : leftPath > rightPath ? 1 : 0))
    .map(([path, hash]) => `${path}:${hash}`)
    .join("\n");

  return `sha256:${await sha256NormalizedLf(canonicalManifest)}`;
}

function sectionBody(markdown: string, heading: string): string | null {
  const normalized = normalizeLf(markdown);
  const headingLine = `## ${heading}`;
  const start = normalized.indexOf(`${headingLine}\n`);

  if (start < 0) return null;

  const bodyStart = start + headingLine.length + 1;
  const nextHeading = normalized.indexOf("\n## ", bodyStart);
  return normalized.slice(bodyStart, nextHeading < 0 ? undefined : nextHeading);
}

function validateStructuredEvidence(reviewRecord: string, markdown: string): string[] {
  const errors: string[] = [];
  const sourceSection = sectionBody(markdown, "Exact sources");
  const claimSection = sectionBody(markdown, "Claim-to-source mapping");

  if (!sourceSection) errors.push(`${reviewRecord}:sources:missing-section`);
  if (!claimSection) errors.push(`${reviewRecord}:claims:missing-section`);
  if (!sourceSection || !claimSection) return errors;

  if (!/^\|\s*ID\s*\|/m.test(sourceSection)) errors.push(`${reviewRecord}:sources:missing-ID-header`);
  if (!/^\|\s*Claim ID\s*\|/m.test(claimSection)) errors.push(`${reviewRecord}:claims:missing-Claim-ID-header`);

  const sourceRows = sourceSection
    .split("\n")
    .filter((line) => /^\|\s*S\d{2,}\s*\|/.test(line));
  const sourceIds = new Set<string>();

  if (sourceRows.length === 0) errors.push(`${reviewRecord}:sources:no-data-rows`);

  for (const row of sourceRows) {
    const cells = row.trim().replace(/^\|/, "").replace(/\|$/, "").split("|").map((cell) => cell.trim());
    const sourceId = cells[0];

    if (!/^S\d{2,}$/.test(sourceId)) {
      errors.push(`${reviewRecord}:sources:invalid-ID:${sourceId}`);
      continue;
    }
    if (sourceIds.has(sourceId)) errors.push(`${reviewRecord}:sources:duplicate-ID:${sourceId}`);
    sourceIds.add(sourceId);

    if (cells.length !== 7) errors.push(`${reviewRecord}:sources:${sourceId}:expected-7-columns`);
    if (!cells[1] || !cells[2] || !cells[5] || !cells[6]) {
      errors.push(`${reviewRecord}:sources:${sourceId}:required-cell-empty`);
    }
    if (!/^\[[^\]]+\]\(https:\/\/[^)]+\)$/.test(cells[3] ?? "")) {
      errors.push(`${reviewRecord}:sources:${sourceId}:direct-https-link-required`);
    }
    if (!isValidDate(cells[4] ?? "") || (cells[4] ?? "") > currentUtcDate()) {
      errors.push(`${reviewRecord}:sources:${sourceId}:valid-non-future-review-date-required`);
    }
  }

  const claimRows = claimSection
    .split("\n")
    .filter((line) => /^\|\s*[A-Z][A-Z0-9-]*-C\d{2,}\s*\|/.test(line));
  const claimIds = new Set<string>();

  if (claimRows.length === 0) errors.push(`${reviewRecord}:claims:no-data-rows`);

  for (const row of claimRows) {
    const claimId = row.match(/^\|\s*([A-Z][A-Z0-9-]*-C\d{2,})\s*\|/)?.[1];

    if (!claimId) {
      errors.push(`${reviewRecord}:claims:invalid-ID-row`);
      continue;
    }
    if (claimIds.has(claimId)) errors.push(`${reviewRecord}:claims:duplicate-ID:${claimId}`);
    claimIds.add(claimId);

    const supportingIds = [...new Set(row.match(/\bS\d{2,}\b/g) ?? [])];
    if (supportingIds.length === 0) errors.push(`${reviewRecord}:claims:${claimId}:source-ID-required`);

    for (const sourceId of supportingIds) {
      if (!sourceIds.has(sourceId)) errors.push(`${reviewRecord}:claims:${claimId}:unknown-source:${sourceId}`);
    }
  }

  return errors;
}

function gatePassed(control: LessonReviewControl, gateName: string): boolean {
  return control.approvals[gateName]?.status === "passed";
}

function sourceGateMatchesStatus(control: LessonReviewControl): boolean {
  if (control.sourceStatus === "verified") return gatePassed(control, "sourceReview");
  if (control.sourceStatus === "not-needed") {
    return control.approvals.sourceReview?.status === "not-required";
  }
  return true;
}

describe("lesson review records", () => {
  it("keeps registry review references inside the versioned review directory", () => {
    const invalidReferences = registryEntries
      .filter((lesson) => lesson.reviewRecord)
      .filter(
        (lesson) =>
          !/^docs\/lesson-reviews\/[a-z0-9-]+-v\d+\.\d+\.md$/.test(lesson.reviewRecord ?? "") ||
          !reviewRecordMarkdown[`../../../${lesson.reviewRecord}`],
      )
      .map((lesson) => `${lesson.slug}:${lesson.reviewRecord}`);

    expect(invalidReferences).toEqual([]);
  });

  it("parses every versioned record through the strict schema", () => {
    const errors = Object.entries(reviewRecordMarkdown)
      .filter(([path]) => !path.endsWith("/README.md"))
      .flatMap(([path, markdown]) => {
        const reviewRecord = path.slice("../../../".length);

        try {
          parseReviewControl(reviewRecord, markdown);
          return [];
        } catch (error) {
          return [error instanceof Error ? error.message : String(error)];
        }
      });

    expect(errors).toEqual([]);
  });

  it("rejects impossible dates, unknown fields, and authority substitutions", () => {
    const markdown = reviewRecordMarkdown["../../../docs/lesson-reviews/voltage-v0.1.md"];
    expect(markdown).toBeTruthy();

    const invalidRecords = [
      mutateControlBlock(markdown, (control) => {
        control.reviewedAt = "2026-02-30";
      }),
      mutateControlBlock(markdown, (control) => {
        control.undocumentedOverride = true;
      }),
      mutateControlBlock(markdown, (control) => {
        const approvals = control.approvals as Record<string, Record<string, unknown>>;
        approvals.publication.reviewerAuthority = "maintainer";
      }),
      mutateControlBlock(markdown, (control) => {
        control.qualifiedReviewRequired = true;
      }),
    ];

    for (const [index, invalidRecord] of invalidRecords.entries()) {
      expect(() => parseReviewControl(`invalid-fixture-${index}.md`, invalidRecord)).toThrow();
    }
  });

  it("does not leave versioned review evidence orphaned from the registry", () => {
    const referencedRecords = new Set(registryEntries.flatMap((lesson) => lesson.reviewRecord ?? []));
    const orphanRecords = Object.keys(reviewRecordMarkdown)
      .filter((path) => !path.endsWith("/README.md"))
      .map((path) => path.slice("../../../".length))
      .filter((path) => !referencedRecords.has(path));

    expect(orphanRecords).toEqual([]);
  });

  it("matches review identity, source state, language authority, and risk ownership to the registry", () => {
    const mismatches = registryEntries.flatMap((lesson) => {
      if (!lesson.reviewRecord) return [];

      const control = readReviewControl(lesson.reviewRecord);
      const errors: string[] = [];

      if (control.lessonId !== lesson.lessonId) errors.push("lessonId");
      if (control.sourceStatus !== lesson.sourceStatus) errors.push("sourceStatus");
      if (lesson.hasPage.th) {
        if (control.approvals.thaiLanguage.reviewerAuthority !== "project-owner") {
          errors.push("thaiLanguage:project-owner-authority");
        }
      } else if (
        control.approvals.thaiLanguage.status !== "not-required" ||
        control.approvals.thaiLanguage.reviewerAuthority !== "policy"
      ) {
        errors.push("thaiLanguage:policy-not-required");
      }
      if (["moderate", "high"].includes(lesson.safetyLevel) && !control.qualifiedReviewRequired) {
        errors.push("qualifiedReviewRequired:safety-level");
      }
      if (lesson.requiresThailandContext && control.sourceStatus === "verified" && !control.nextReviewAt) {
        errors.push("nextReviewAt:verified-thailand-context");
      }

      return errors.map((error) => `${lesson.slug}:${error}`);
    });

    expect(mismatches).toEqual([]);
  });

  it("requires complete preparation gates before review-ready", () => {
    const errors = registryEntries.flatMap((lesson) => {
      if (lesson.status !== "review-ready") return [];
      if (!lesson.reviewRecord) return [`${lesson.slug}:reviewRecord`];

      const control = readReviewControl(lesson.reviewRecord);
      const lessonErrors: string[] = [];

      if (!["in-review", "approved"].includes(control.recordState)) lessonErrors.push("recordState");
      if (["needed", "needs-update"].includes(control.sourceStatus)) lessonErrors.push("sourceStatus");
      if (!sourceGateMatchesStatus(control)) lessonErrors.push("sourceReview");
      if (Object.values(control.approvals).some((gate) => gate.status === "failed")) {
        lessonErrors.push("failedGate");
      }
      for (const gateName of reviewReadyPassedGates) {
        if (!gatePassed(control, gateName)) lessonErrors.push(`approval:${gateName}`);
      }

      return lessonErrors.map((error) => `${lesson.slug}:${error}`);
    });

    expect(errors).toEqual([]);
  });

  it("does not claim verified sources without current, content-bound source-review evidence", () => {
    const errors = registryEntries.flatMap((lesson) => {
      if (lesson.sourceStatus !== "verified") return [];
      if (!lesson.reviewRecord) return [`${lesson.slug}:reviewRecord`];

      const control = readReviewControl(lesson.reviewRecord);
      const lessonErrors: string[] = [];

      if (control.sourceStatus !== "verified") lessonErrors.push("sourceStatus");
      if (!gatePassed(control, "sourceReview")) lessonErrors.push("sourceReview");
      if (!control.reviewedAt) lessonErrors.push("reviewedAt");
      if (Object.keys(control.reviewedFiles).length === 0) lessonErrors.push("reviewedFiles");
      if (control.nextReviewAt && control.nextReviewAt <= currentUtcDate()) {
        lessonErrors.push(`expired:${control.nextReviewAt}`);
      }

      const markdown = reviewRecordMarkdown[`../../../${lesson.reviewRecord}`];
      if (markdown) lessonErrors.push(...validateStructuredEvidence(lesson.reviewRecord, markdown));

      return lessonErrors.map((error) => `${lesson.slug}:${error}`);
    });

    expect(errors).toEqual([]);
  });

  it("binds each reviewed file to its normalized-LF SHA-256 digest", async () => {
    const errors: string[] = [];

    for (const lesson of registryEntries) {
      if (!lesson.reviewRecord) continue;

      const control = readReviewControl(lesson.reviewRecord);

      for (const [path, expectedHash] of Object.entries(control.reviewedFiles)) {
        let contents: string;

        try {
          contents = await readFile(new URL(`../../../${path}`, import.meta.url), "utf8");
        } catch {
          errors.push(`${lesson.slug}:${path}:missing-or-unreadable`);
          continue;
        }

        const actualHash = await sha256NormalizedLf(contents);
        if (actualHash !== expectedHash) {
          errors.push(`${lesson.slug}:${path}:expected-${expectedHash}:actual-${actualHash}`);
        }
      }

      const expectedRevision = await reviewedManifestFingerprint(control.reviewedFiles);
      if (control.reviewedRevision !== expectedRevision) {
        errors.push(
          `${lesson.slug}:reviewedRevision:expected-${expectedRevision}:actual-${control.reviewedRevision}`,
        );
      }
    }

    expect(errors).toEqual([]);
  });

  it("requires an approved, blocker-free, fully authorized record for publication", () => {
    const errors = registryEntries.flatMap((lesson) => {
      if (lesson.status !== "published") return [];
      if (!lesson.reviewRecord) return [`${lesson.slug}:reviewRecord`];

      const control = readReviewControl(lesson.reviewRecord);
      const lessonErrors: string[] = [];

      if (control.recordState !== "approved") lessonErrors.push("recordState");
      if (!["verified", "not-needed"].includes(control.sourceStatus)) lessonErrors.push("sourceStatus");
      if (!sourceGateMatchesStatus(control)) lessonErrors.push("sourceReview");
      if (control.blockers.length > 0) lessonErrors.push("blockers");
      if (Object.keys(control.reviewedFiles).length === 0) lessonErrors.push("reviewedFiles");

      for (const gateName of publicationPassedGates) {
        if (!gatePassed(control, gateName)) lessonErrors.push(`approval:${gateName}`);
      }
      if (control.approvals.publication.reviewerAuthority !== "project-owner") {
        lessonErrors.push("approval:publication:authority");
      }
      if (lesson.hasPage.th) {
        if (!gatePassed(control, "thaiLanguage")) lessonErrors.push("approval:thaiLanguage");
        if (control.approvals.thaiLanguage.reviewerAuthority !== "project-owner") {
          lessonErrors.push("approval:thaiLanguage:authority");
        }
      }
      if (control.qualifiedReviewRequired) {
        if (!gatePassed(control, "qualifiedHuman")) lessonErrors.push("approval:qualifiedHuman");
        if (control.approvals.qualifiedHuman.reviewerAuthority !== "qualified-human") {
          lessonErrors.push("approval:qualifiedHuman:authority");
        }
      } else if (control.approvals.qualifiedHuman.status !== "not-required") {
        lessonErrors.push("approval:qualifiedHuman:not-required");
      }
      if (control.nextReviewAt && control.nextReviewAt <= currentUtcDate()) {
        lessonErrors.push(`expired:${control.nextReviewAt}`);
      }

      return lessonErrors.map((error) => `${lesson.slug}:${error}`);
    });

    expect(errors).toEqual([]);
  });

  it("does not leave stale source evidence attached to a published lesson", () => {
    const invalidLessons = registryEntries
      .filter((lesson) => lesson.sourceStatus === "needs-update" && lesson.status === "published")
      .map((lesson) => lesson.slug);

    expect(invalidLessons).toEqual([]);
  });
});
