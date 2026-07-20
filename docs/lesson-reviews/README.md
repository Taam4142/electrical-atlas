# Lesson review records

This directory contains reproducible evidence for lesson review and publication decisions.

A review record is evidence, not automatic approval. A lesson may have complete source and implementation checks while its final publication decision is still pending.

Approval roles and risk boundaries are defined in [Publication governance](../publication-governance.md). General content gates are defined in [Lesson quality and source-review checklist](../lesson-quality-checklist.md).

## File and identity rules

Use one versioned file per reviewed lesson revision:

```text
<slug>-v<major>.<minor>.md
```

The registry points to the record with `reviewRecord`. Keep detailed reviewers, sources, claims, limitations, and decisions in the record rather than duplicating them in registry data.

Each record starts with a JSON control block inside an HTML comment:

```md
<!-- lesson-review-control
{
  "schemaVersion": 2,
  "lessonId": "ea.lesson.example.v0.1",
  "recordState": "draft",
  "sourceStatus": "draft",
  "reviewedRevision": "sha256:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
  "reviewedAt": "YYYY-MM-DD",
  "nextReviewAt": null,
  "qualifiedReviewRequired": false,
  "qualifiedReviewReason": "Low-risk conceptual scope with no practical or regulated instruction.",
  "blockers": ["owner-publication-approval"],
  "reviewedFiles": {},
  "approvals": {
    "sourceReview": {
      "status": "pending",
      "reviewer": "Maintainer source review",
      "reviewerAuthority": "maintainer",
      "reviewedAt": null,
      "note": "Exact claim mapping is not complete."
    }
  }
}
-->
```

The block above is an abbreviated draft example; every real record must include all standard gates listed below, even while they are pending or marked `not-required`.

Do not place another JSON object between those markers. Tests parse this block directly.

## Control fields

| Field | Meaning |
| --- | --- |
| `schemaVersion` | Review-record schema version. Current value: `2`. Unknown or missing control fields fail validation. |
| `lessonId` | Exact stable lesson ID from the registry. |
| `recordState` | `draft`, `in-review`, `approved`, or `superseded`. |
| `sourceStatus` | Must match the lesson registry: `not-needed`, `needed`, `draft`, `verified`, or `needs-update`. |
| `reviewedRevision` | Immutable `sha256:<digest>` fingerprint of the canonical `reviewedFiles` manifest. It binds every gate in this control record to one exact candidate. |
| `reviewedAt` | Most recent evidence-review date, or `null` for a skeleton record. |
| `nextReviewAt` | Planned currency check when one is needed, otherwise `null`. A real calendar date on or before the current UTC date expires `verified` evidence until the source state is changed or the review is renewed. |
| `qualifiedReviewRequired` | Risk decision for this exact lesson scope. `true` assigns the `qualifiedHuman` gate to a qualified human; `false` requires a dated policy decision marking that gate `not-required`. |
| `qualifiedReviewReason` | Non-empty explanation of the risk decision. Moderate/high-safety lessons and safety-critical or regulated instructions cannot opt out. |
| `blockers` | Explicit unresolved gate IDs. Must be empty for `approved`/`published`. |
| `reviewedFiles` | Repository-relative file paths mapped to lowercase SHA-256 digests after CRLF/CR is normalized to LF. Active reviews and verified source claims require a non-empty manifest. |
| `approvals` | Named, dated gate decisions. |

Every control block requires these standard approval keys; the lifecycle rules below decide which must pass before `review-ready` or `published`:

- `sourceReview`;
- `technicalAccuracy`;
- `englishContent`;
- `thaiLanguage` when a Thai page is available;
- `qualifiedHuman` (passed when required, otherwise a dated `not-required` policy decision);
- `implementationVerification`;
- `visualAccessibility`;
- `previewDeployment`;
- `publication`.

Each gate uses:

```json
{
  "status": "pending",
  "reviewer": "Named person or disclosed reviewer role",
  "reviewerAuthority": "maintainer",
  "reviewedAt": null,
  "note": "Short boundary or result"
}
```

Allowed gate states are `pending`, `passed`, `failed`, and `not-required`. Allowed reviewer authorities are `maintainer`, `project-owner`, `qualified-human`, and `policy`.

- Every gate needs a non-empty reviewer/assigned role and note.
- `pending` must have `reviewedAt: null`.
- `passed`, `failed`, and `not-required` require a real, non-future `YYYY-MM-DD` decision date.
- `not-required` is allowed only with `reviewerAuthority: policy`; policy authority cannot pass or fail a review.
- `publication`, and `thaiLanguage` when a Thai page exists, belong to `project-owner` authority. A named assistant or maintainer cannot substitute for that authority.
- When `qualifiedReviewRequired` is true, `qualifiedHuman` belongs to `qualified-human` authority and must pass before publication.

Extra project-specific gates are allowed if they use a lower-camel-case ID and the same strict gate schema. They do not replace any standard gate.

## Immutable reviewed-file binding

`reviewedFiles` prevents a review decision from remaining attached after the reviewed lesson or implementation silently changes. Include every file whose bytes materially determine the reviewed claims, interaction, equations, or presentation. Avoid broad unrelated files when a narrower lesson-specific file exists, but include a shared file when its behavior is part of the review.

A passed `previewDeployment` gate must name or otherwise identify a deployed commit containing the exact bound revision. If the manifest is refreshed to include newer lesson or shared-runtime bytes, reset that gate to `pending` and restore the deployment blocker until the new commit is live-checked. Keep the former deployment event in decision history as historical evidence; do not present it as verification of the new fingerprint.

The digest algorithm is:

1. read the file as UTF-8 text;
2. replace CRLF and lone CR line endings with LF;
3. hash the resulting UTF-8 bytes with SHA-256;
4. store the 64-character lowercase hexadecimal digest.

Then create the revision fingerprint by sorting the manifest entries by repository path using code-point order, writing each as `path:hash`, joining those lines with LF and no trailing newline, hashing that UTF-8 text with SHA-256, and storing `sha256:<digest>` in `reviewedRevision`.

The test failure reports both the recorded and current digest. To calculate candidate digests from the repository root, pass the exact manifest paths to this command:

```powershell
node --input-type=commonjs -e "const fs=require('node:fs');const crypto=require('node:crypto');for(const p of process.argv.slice(1)){const text=fs.readFileSync(p,'utf8').replace(/\r\n?/g,'\n');console.log(p,crypto.createHash('sha256').update(text,'utf8').digest('hex'))}" electrical-atlas-site/src/content/lessons/en/example.mdx electrical-atlas-site/src/content/lessons/th/example.mdx
```

After updating the manifest, calculate its `reviewedRevision` fingerprint with:

```powershell
node --input-type=commonjs -e "const fs=require('node:fs');const crypto=require('node:crypto');const md=fs.readFileSync(process.argv[1],'utf8');const control=JSON.parse(md.match(/<!-- lesson-review-control\s*([\s\S]*?)\s*-->/)[1]);const canonical=Object.entries(control.reviewedFiles).sort(([a],[b])=>a<b?-1:a>b?1:0).map(([p,h])=>p+':'+h).join('\n');console.log('sha256:'+crypto.createHash('sha256').update(canonical,'utf8').digest('hex'))" docs/lesson-reviews/example-v0.1.md
```

Refreshing a digest is a review action, not a formatting workaround. Inspect the diff, rerun the applicable technical/language/visual checks, update `reviewedAt` and affected gate decisions, then record the new digest. Never update hashes solely to make CI green.

## Evidence tables

After the control block, preserve four human-readable evidence groups:

1. Approval ownership and current gates.
2. Exact sources: source ID, authority/author, exact title and edition/date, direct URL/locator, access date, jurisdiction or technical scope, and next-review trigger where relevant.
3. Claim mapping: stable claim ID, English/Thai/demo locator, risk class, supporting source IDs, verdict, and limitation.
4. Known limitations and decision history.

Summarize evidence in original words. Do not reproduce paid standards, textbooks, or large copyrighted passages.

For `sourceStatus: verified`, the `Exact sources` and `Claim-to-source mapping` headings and Markdown tables are machine-checked. Source rows need unique `Snn` IDs, seven populated columns, a direct HTTPS Markdown link, and a real non-future review date. Claim rows need unique stable claim IDs and at least one supporting source ID; every cited source ID must resolve to a row in the same record. A prose assertion that sources were checked cannot replace these tables.

## Honest lifecycle transitions

1. `prototype` + `needed`: no usable exact claim mapping yet.
2. `prototype` + `draft`: usable candidate sources are mapped, but source review is incomplete.
3. `review-ready` + `draft`, `verified`, or `not-needed`: the record is `in-review`/`approved`, no gate has failed, reviewed files are hash-bound, and technical accuracy, English content, implementation verification, and visual/accessibility gates have passed. Source review must match the declared source state.
4. `review-ready` + `verified`: source review passed and is not past `nextReviewAt`, but at least one later approval—often Thai, deployment, qualified review, or final publication—may still be pending.
5. `published` + `verified` or `not-needed`: the record is `approved`, all applicable gates passed with the required authority, blockers are empty, source evidence is current, and reviewed-file hashes match.
6. `revision-needed` with `draft` or `needs-update`: review failed, evidence went stale, or the content expanded beyond its evidence.

Use a public review-ready deployment or Vercel preview for the live-page check. Do not call the lesson `published` merely to create something reviewers can inspect.

## Records

- [Capacitance and Capacitors v0.1](capacitor-v0.1.md) — verified-source review-ready candidate; exact deployment passed, while qualified-human, Thai-language, and publication gates remain pending.
- [Electric Charge v0.1](charge-v0.1.md) — verified-source review-ready lesson; exact deployment passed, while final owner and Thai-language approval remain pending.
- [Voltage v0.1](voltage-v0.1.md) — Phase B publication pilot; exact deployment passed, while final owner and Thai-language approval remain pending.
- [What Is Electricity v0.1](what-is-electricity-v0.1.md) — gateway review; exact deployment passed, while final owner and Thai-language approval remain pending.
