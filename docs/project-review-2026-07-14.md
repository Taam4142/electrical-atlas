# Project review and next-phase plan — 2026-07-14

Status: recommended planning checkpoint; implementation is pending user confirmation.

This document preserves the project retrospective performed on 2026-07-14. It records the current evidence, the main risks, and the recommended sequence of work so future sessions do not have to reconstruct the reasoning from chat history.

The broad Electrical Atlas direction remains valid. The recommendation is not to restart the project. The immediate sequence should change from adding another unreviewed lesson prototype to a short truth, integrity, and publication-quality phase.

## 1. Current baseline

| Area | Verified state on 2026-07-14 |
| --- | --- |
| Atlas corpus | 13 inventory files and 1,607 mapped topics |
| Lesson registry | 10 bilingual prototypes and 2 planned lessons |
| Publication maturity | 0 lessons at `published`; 0 lessons with verified sources |
| Source maturity | 9 implemented lessons at `needed`; Switches and Contacts at `draft` |
| Explicit relationship seed | 177 relationship records mentioning 52 distinct topic nodes and 10 lesson nodes |
| Static output | 3,245 pages and approximately 28.4 MB |
| Topic-search data | approximately 785 KB before transfer compression |
| Automated checks | Astro Check processed 80 project files with no diagnostics; 50 tests passing |
| Internal links | 3,246 unique root-relative targets checked; no missing targets found |
| Repository state | clean `main` branch, synchronized with `origin/main` before this documentation checkpoint |

Local verification completed during the review:

```powershell
npm.cmd run check
npm.cmd test
npm.cmd run build
```

The full command took about two minutes locally. Astro reported 3,245 generated pages, with route generation itself taking approximately 1 minute 27 seconds.

## 2. What should remain

The following foundations are sound and should be extended rather than replaced:

- the separation between the atlas corpus, mapped topic records, and full lessons;
- stable canonical topic IDs;
- the bilingual English/Thai product direction;
- the central lesson registry with safety, source, status, and Thailand-context fields;
- relationship-first suggestions with metadata fallback;
- static Astro deployment while the current scale remains practical;
- explicit distinction between mapped knowledge and reviewed lesson content;
- original visuals, physical intuition first, and a separate technical track;
- cautious handling of Thai standards, regulations, utilities, and professional practice.

## 3. Highest-priority findings

### P0 — Public status language is not always truthful

All ten available lessons are registry `prototype` entries, but some topic records and the lesson browser use the word “published” merely because a public route exists.

Important locations:

- `electrical-atlas-site/src/lib/lessonRegistry.ts`
- `electrical-atlas-site/src/components/TopicRecord.astro`
- `electrical-atlas-site/src/components/LessonBrowser.astro`
- `electrical-atlas-site/src/tests/lessonRegistry.test.ts`

Availability and maturity are different facts:

- `hasPage` means a route is available;
- `status` means the lesson's editorial maturity;
- only `status: published` may be described as published.

This is the first trust issue to correct. Topic records should display the actual lesson status, such as “prototype lesson available.”

### P0 — Public preview IDs have diverged from canonical IDs

Five of the six IDs in `electrical-atlas-site/src/lib/navigation.ts` do not currently resolve to atlas topics. Charge, electric field, voltage, and current already have different canonical IDs. The incandescent-lamp ID has no exact node yet.

Stable-looking but invalid IDs should never be displayed publicly. Fix the four existing mappings. Remove the invalid incandescent-lamp ID from public display or temporarily point the preview to an existing broader node; deciding whether Incandescent Lamp deserves its own component node remains a separate taxonomy decision.

### P0 — The project has not completed one publication lifecycle

The project can produce attractive bilingual prototypes, but no lesson has passed through exact-source recording, technical review, bilingual review, browser/accessibility review, and final publication.

Adding many more prototypes now would increase source and review debt. One low-risk lesson should prove the complete workflow before the queue grows.

### P1 — The inventory parser is permissive and the schema has drifted

`electrical-atlas-site/scripts/generate-topic-index.mjs` silently skips lines that resemble topic records but do not match its regular expression. It validates duplicate IDs but not the complete taxonomy contract.

Observed schema drift:

- 17 records use `model`, although `model` is not currently listed as a canonical node kind;
- 2 records use `enabling` as a node kind even though `enabling` is a scope role;
- maturity, scope role, aliases, parent relationships, and locale labels are not represented in generated topic data;
- exact-name candidates such as the two Aliasing nodes and two Statistical Process Control nodes require merge-or-distinguish review.

The appropriate response is strict validation and incremental enrichment, not a one-time manual rewrite of all 1,607 topics.

### P1 — The taxonomy relation model and recommendation graph answer different questions

The durable taxonomy uses canonical predicates such as `prerequisite-of`, `part-of`, `made-of`, `explains`, `measured-by`, `fails-by`, and `used-in`.

The website graph also uses pedagogical labels such as `paired-foundation`, `physical-mechanism`, `energy-link`, and `material-view`. Those labels are useful for recommendations, but they should not silently become the canonical knowledge ontology.

A future relationship record should distinguish:

- canonical predicate and direction;
- inverse relation where applicable;
- pedagogical or recommendation role;
- editorial explanation shown to learners;
- recommendation weight.

### P1 — Project documentation has multiple competing “next steps”

Examples found during the review:

- the public guide still recommends implementing relationships that already exist;
- the registry plan describes navigation and status work as future even though it is implemented;
- the public lesson browser implies its registry is the full roadmap, while the registry has 12 entries and the strategic roadmap has 20;
- the root language gateway manually lists lessons and already omits Switches and Contacts;
- the first-20 roadmap previously recommended Capacitor before the still-missing Electric Charge lesson.

Document ownership is defined in Section 5 below to prevent this drift.

### P1 — Dependency and deployment reproducibility are split

The site package declares dependencies as `latest`. The root and site lockfiles are both tracked and already disagree, including Astro 7.0.4 in the root lockfile and Astro 7.0.3 in the site lockfile.

CI uses Node 22, but the packages do not declare a Node engine or package-manager version. Vercel builds the site but does not itself run Vitest; repository settings do not prove that production deployment waits for a green GitHub check.

The project should have one authoritative root install path, one lockfile, pinned dependency intent, declared runtime versions, and a clear deployment gate.

### P1 — Search indexing is not intentional yet

The static build exposes more than 3,200 mapped topic pages. Most are intentionally short atlas records, and Thai records still use English canonical names and summaries.

Until these records have localized labels and richer content, they should normally use `noindex,follow`. Canonical URLs, English/Thai alternate links, Open Graph metadata, robots policy, and sitemap inclusion should be designed before allowing broad indexing.

### P1/P2 — Build and client-search scaling need budgets

Every locale generates every topic page. Topic suggestion ranking scans and sorts the topic collection while each page is generated, so cost grows much faster than the topic count itself.

The current build is acceptable, but this should be addressed before a large inventory expansion:

- precompute relationship and metadata-fallback suggestion IDs during generation;
- index relationships in maps rather than repeatedly filtering the full edge list;
- track build time, page count, output bytes, and search-payload size;
- add pagination or a more compact search index when Thai aliases expand the payload.

### P1/P2 — Thai support is editorially strong but structurally incomplete

The Thai terminology glossary is valuable, but generated topics do not yet carry Thai labels or aliases, so Thai topic search mainly searches English metadata. Several shared interface eyebrow labels also remain English on Thai pages.

Thailand-specific source work needs a structured ledger containing:

- authority or institution;
- exact document title and identifier;
- edition or effective date;
- legal or advisory status;
- geographic or utility territory;
- claims supported;
- official URL;
- last verification date and next review date.

This ledger should begin with the first Thailand-sensitive lesson rather than attempting to catalog every Thai standard immediately.

## 4. Proposed reconfigured phase plan

### Phase A — Truth and integrity stabilization

This is the recommended next implementation phase if the user confirms this reconfiguration.

#### Phase A1: public truth and current-state cleanup

1. Show the actual registry maturity wherever a lesson is linked.
2. Reserve “published” for `status: published`.
3. Fix invalid subject-preview IDs and stop displaying the unresolved incandescent-lamp ID as canonical.
4. Remove stale future-tense and obsolete next-step language from public pages.
5. Make the root language gateway and public lesson discovery registry-driven or deliberately minimal.
6. Reconcile the guide, registry plan, first-20 roadmap, and status page.
7. Apply `noindex,follow` to unfinished mapped topic records.

Exit criteria:

- every public status label describes current truth;
- every displayed canonical ID exists or is explicitly marked provisional;
- no public guide recommends already-completed development work;
- mapped records cannot be mistaken for reviewed lessons or indexed as finished reference pages.

#### Phase A2: reproducibility and executable integrity

1. Pin dependency versions or use intentional constrained ranges.
2. Keep one authoritative root lockfile and root Vercel workflow.
3. Declare Node 22 and the intended npm version.
4. Add `npm run check` to CI.
5. Make CI fail when topic generation changes tracked generated files.
6. Make the generator fail on malformed candidate records.
7. Validate node kinds, scope roles, maturity, depth, safety tags, route slugs, and manually referenced topic IDs.
8. Validate duplicate/self/conflicting relationship records and relationship direction.
9. Confirm that production deployment is gated by tests or run tests in the deployment build command.

Exit criteria:

- a clean clone has one unambiguous install/build path;
- malformed inventory data cannot silently disappear;
- stale generated files and invalid cross-references fail CI;
- the deployed commit cannot bypass the agreed tests unnoticed.

### Phase B — Prove the publication workflow

Use **Voltage** as the first publication pilot after Phase A and confirmation of publication ownership.

Why Voltage:

- it is narrow enough to review completely;
- its safety level is low;
- it tests equations, units, physical intuition, an interactive demo, and bilingual terminology;
- it does not require changing Thai installation or utility rules.

Required work:

1. Define and record who may approve technical accuracy, Thai-language quality, and standards-sensitive publication.
2. Create an exact source and claim-review record.
3. Verify the physical explanation, equations, units, simplifications, and misconceptions.
4. Review the English lesson for teaching clarity.
5. Review the Thai lesson for natural language and glossary consistency.
6. Complete desktop, mobile, keyboard, reduced-motion, and screen-reader-oriented checks.
7. Check the deployed English and Thai pages.
8. Record reviewer, review date, source status, limitations, and revision.
9. Mark the lesson `published` only after every required gate passes.

After the pilot, apply the proven workflow to What Is Electricity and Electric Current.

Exit criteria:

- publication-approval ownership is explicitly recorded;
- at least one lesson is genuinely `published` with `sourceStatus: verified`;
- another maintainer can reproduce the review from recorded evidence;
- publication is a practical workflow rather than only a checklist.

### Phase C — Taxonomy and learning system v0.2

Create an enrichment layer for the first 20 lesson topics and Thai authority nodes. Do not block progress on migrating all 1,607 seed records.

The v0.2 record should separate:

- stable identity from content revision;
- node content status from lesson release status;
- English canonical name from localized labels and aliases;
- primary hierarchy from typed graph relationships;
- canonical relationship predicate from pedagogical recommendation reason;
- global technical review from per-locale translation review;
- source families from exact reviewed sources.

Also convert the first foundation learning path into canonical IDs, support inverse traversal where appropriate, and precompute suggestions during generation.

Exit criteria:

- the first 20 topics have machine-valid prerequisites, successors, aliases, and canonical relationships;
- Thai search can find the first-20 topics using common Thai terminology;
- the website and taxonomy use compatible relationship semantics;
- adding a lesson does not require interpreting several conflicting metadata sources.

### Phase D — Resume content growth

Before Phase D starts, confirm when the standalone Electric Charge lesson belongs in the sequence:

1. **Preferred option:** publish a standalone Electric Charge lesson before Capacitor, then continue with Diode and Inductor or Relay.
2. **Compact option:** put a clearly scoped charge-and-field prerequisite unit inside the Capacitor lesson, then schedule the standalone Electric Charge lesson separately.

The preferred option gives capacitance an explicit foundation in separated charge, fields, voltage, and stored energy. This remains a recommendation, not an approved lesson-order decision.

After content resumes, reduce at least one structural risk after every two substantial lesson additions.

## 5. Source-of-truth ownership

| Artifact | Responsibility |
| --- | --- |
| `electrical-atlas/01-taxonomy-model.md` | Canonical topic schema and relationship vocabulary |
| `electrical-atlas/inventory/` | Broad seed coverage and canonical topic placement |
| `electrical-atlas-site/src/lib/lessonRegistry.ts` | Operational lesson availability, status, safety, source state, and active queue |
| `docs/first-20-lessons.md` | Strategic beginner curriculum and intended teaching order |
| `docs/project-improvements-risk-reduction.md` | Long-lived risk register and mitigation principles |
| This dated review | Evidence and phase recommendation at the 2026-07-14 checkpoint |
| Public guide | Current learner instructions only; no internal development roadmap |
| Status page | Current operational state derived from the registry |
| Future source records | Exact claims, sources, dates, reviewers, and jurisdiction notes |

The registry should not claim to be the full strategic roadmap unless every strategic candidate is intentionally added to it. Undated current-state documentation should not manually repeat live counts or implementation status when those values can be generated. Dated reviews such as this document may preserve measured snapshot counts as historical evidence.

## 6. Risk-reduction rhythm

Use this rhythm after Phase A:

1. Keep checks, tests, build, and deployment green.
2. Complete source planning before expanding technical or safety claims.
3. Add lessons in small prerequisite-aware groups.
4. Reduce one structural risk after every two substantial lessons.
5. Review Thai terminology whenever a new technical family enters the site.
6. Verify current Thai official sources close to publication for standards, regulation, utility, installation, safety, RF, metrology, building, vehicle, grid, or energy claims.
7. Re-run semantic duplicate and orphan audits domain by domain instead of attempting a risky all-at-once cleanup.
8. Update a dated project review when the phase, architecture, or risk priority materially changes.

## 7. Decisions intentionally left open

These decisions matter but do not block Phase A:

- license choice for code, written content, and original visuals;
- stable custom domain and final canonical URL;
- whether outside contributions will be accepted;
- who can approve technical, Thai-language, and standards-sensitive publication; this must be resolved before Phase B can mark a lesson `published`;
- whether the long-term topic platform remains fully static or moves to server/on-demand generation;
- whether Incandescent Lamp becomes its own canonical component node;
- whether the standalone Electric Charge lesson comes before Capacitor or later after Capacitor introduces a prerequisite charge-and-field capsule.

Do not silently decide these during unrelated implementation work.

## 8. Immediate next checkpoint

If the user confirms this reconfiguration, start with **Phase A1: public truth and current-state cleanup**. It is small enough to complete and verify as one commit, reduces the most visible trust risks, and prepares the repository for the stricter Phase A2 toolchain work.

The proposed sequence is A1, A2, the Voltage publication pilot, and then the curriculum decision that controls Electric Charge and Capacitor ordering.
