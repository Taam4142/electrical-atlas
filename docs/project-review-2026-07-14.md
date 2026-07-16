# Project review and next-phase plan — 2026-07-14

Status: Phase A1 and Phase A2 were implemented on 2026-07-14. Phase B was approved on 2026-07-14; Voltage is `review-ready`, and the proven workflow was applied to What Is Electricity on 2026-07-16. Later phases remain recommendations pending separate approval. Project-owner Thai-language and final-publication decisions remain lesson-specific and pending.

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

Phase A1 and Phase A2 of this reconfiguration were approved on 2026-07-14. Later phases remain recommendations until separately approved.

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

#### Phase A1 implementation record — 2026-07-14

Completed work:

- separated route availability from editorial maturity with explicit registry helpers;
- changed topic records, lesson discovery, and the status board to show availability and the actual maturity badge separately;
- reserved `published` / `เผยแพร่แล้ว` for registry `status: published`;
- corrected the Charge, Electric Field, Voltage, and Electric Current preview IDs;
- removed the unresolved Incandescent Lamp preview rather than assigning it a misleading broader canonical ID;
- added regression tests for preview ID, canonical-name, and node-type integrity;
- replaced the stale root lesson catalog with a minimal equal English/Thai language gateway;
- replaced obsolete development-roadmap copy in the public guide with current learner guidance;
- improved current-state Thai interface labels and added centralized Thai topic type/status formatting;
- added `noindex,follow` to mapped topic records without applying it to lessons, guide, map, status, or root pages;
- reconciled the registry plan and nearby production documentation with the availability-versus-maturity model.

Verification evidence:

| Check | Result |
| --- | --- |
| `npm.cmd run check` | 83 files; 0 errors, warnings, or hints |
| `npm.cmd test` | 9 test files; 55 tests passed |
| `npm.cmd run build` | 3,245 static pages built |
| Internal root-relative links | 3,246 unique targets checked; 0 missing |
| Topic robots metadata | exactly one `noindex,follow` tag in sampled EN/TH Voltage and Capacitor topic output |
| Non-topic robots metadata | no `noindex` tag in sampled lesson, guide, map, status, or root output |
| Stale public identifiers/copy scan | no matches for the removed invalid IDs or obsolete published/next-build phrases |

Remaining acceptance check:

- rerun the desktop/mobile browser matrix when the in-app browser automation connection is healthy. The 2026-07-14 attempt failed during browser-runtime initialization before page interaction, so no visual-layout claim is recorded from that attempt.

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

#### Phase A2 implementation record — 2026-07-14

Completed work:

- replaced every `latest` direct dependency with the exact version already selected by the authoritative root dependency graph;
- declared Node.js `>=22.12.0 <23` and npm `10.x` support, with npm `10.9.3` recorded as the lockfile-authoring version;
- removed the site lockfile and documented the repository root as the only supported install/build/Vercel root;
- added a Vercel production build that rejects stale generated topics without rewriting, runs parser tests, Vitest and Astro/TypeScript checks, builds, and validates representative bilingual output, robots policy, and internal links;
- added an explicit Astro check stage plus tracked-and-current generated-output failure to GitHub Actions;
- replaced the permissive topic parser with a location-aware validator for every numbered-inventory bullet, canonical ID, node kind, scope role, maturity, field order, depth, safety, route slug, H2 context, encoding, domain file, duplicate ID, and slug collision;
- formally added `model` as a canonical node kind, corrected two `enabling` kind/scope collisions, and normalized one maturity-order record;
- preserved explicit scope role and maturity in generated data while leaving inherited fields absent rather than guessing or bloating the client payload;
- corrected the taxonomy model's normative example IDs and made those references executable tests;
- added relationship tests for endpoints, self-links, duplicate destinations, weights, direction, curriculum order, cycles, reversed asymmetric edges, duplicate suggestion URLs, and self-recommendations;
- corrected six recommendation edges whose prerequisite/successor labels contradicted curriculum direction;
- updated deployment, maintenance, inventory grammar, relationship, and risk documentation; the durable contract is [Build and release integrity](build-release-integrity.md).

Verification evidence:

| Check | Result |
| --- | --- |
| Root `npm ci` with the final lockfile | 463 packages installed; audit reported 0 vulnerabilities |
| Standalone Node fixtures | 9 inventory/parser tests and 3 built-site validator tests passed |
| Vitest within the production gate | 10 files; 62 tests passed |
| Astro check within the production gate | 88 files; 0 errors, warnings, or hints |
| `npm.cmd run build:production` | 3,245 static pages built; 3,214 topic robots policies and 3,246 unique root-relative references validated |
| Direct dependency intent | exact versions; no `latest` declarations |
| Lockfile ownership | one tracked root `package-lock.json` |
| Production dependency audit | 0 production vulnerabilities; compatible transitive language-server update removed the initial development-only advisories |

Repository-enforced acceptance is complete. Two external-state checks remain operational rather than source-controlled: GitHub should require the `Website checks` job before merging, and Vercel must keep Root Directory blank/repository-root with `main` as the production branch. The Phase A1 visual browser matrix also remains open until browser automation is healthy.

### Phase B — Prove the publication workflow

Use **Voltage** as the first publication pilot after Phase A. Publication ownership was confirmed on 2026-07-14 and is recorded in [Publication governance](publication-governance.md).

Why Voltage:

- it is narrow enough to review completely;
- its safety level is low;
- it tests equations, units, physical intuition, an interactive demo, and bilingual terminology;
- it does not require changing Thai installation or utility rules.

Required work:

1. Define and record who may approve technical accuracy, Thai-language quality, and standards-sensitive publication. **Completed 2026-07-14.**
2. Create an exact source and claim-review record. **Implemented for review in `lesson-reviews/voltage-v0.1.md`.**
3. Verify the physical explanation, equations, units, simplifications, and misconceptions. **Completed for the bound candidate revision.**
4. Review the English lesson for teaching clarity. **Completed for the bound candidate revision.**
5. Review the Thai lesson for natural language and glossary consistency. **Maintainer preparation is complete; project-owner Thai approval is pending.**
6. Complete desktop, mobile, keyboard, reduced-motion, and screen-reader-oriented checks. **Completed 2026-07-16 for the maintainer-controlled gate: English/Thai desktop and 390 px layout, 44 px targets, actual slider keyboard behavior, semantic names/live output/transcript, focus-visible CSS, and reduced-motion CSS/information paths passed. Keyboard-focus modality, OS reduced-motion preference, and a named screen reader could not be emulated by the browser backend, so the evidence record states those boundaries explicitly.**
7. Check the deployed English and Thai pages. **Completed 2026-07-16 on commit `7414277`: English and Thai lesson and registry routes displayed the localized `review-ready` status, and live localized Arrow-key interaction still passed on both lesson routes at 390 px.**
8. Record reviewer, review date, source status, limitations, and revision. **Completed in the versioned review record; later decisions must be appended, not inferred.**
9. Mark the lesson `published` only after every required gate passes. **Pending; the registry is now correctly `review-ready`, while project-owner Thai-language approval and final publication approval remain required.**

After the pilot, apply the proven workflow to What Is Electricity and Electric Current. **What Is Electricity review preparation was completed on 2026-07-16; Electric Current remains the next workflow candidate after the curriculum checkpoint.**

#### Phase B continuation — What Is Electricity

The gateway review corrected a high-value teaching risk before promotion:

- the former percentage slider mixed switch travel, field propagation, current buildup, lamp power, and electron drift into one scale;
- the replacement compares only open circuit with idealized closed steady DC and discloses the unmodeled transient and filament warm-up;
- the circuit drawing now inserts a true two-terminal source, keeps a field cue in the open gap, separates conventional-current and electron-drift direction, and keeps the lamp fully dark at zero power;
- English and prepared Thai content now define charge, field, voltage, current, resistance, power, energy, equation symbols and units, and model limits;
- exact sources and claim mappings are preserved in [What Is Electricity review — v0.1](lesson-reviews/what-is-electricity-v0.1.md);
- the gateway relationship list now prioritizes charge and charge carriers and records DC/AC branches instead of jumping to lithium-ion chemistry;
- maintainer browser review covered both languages at default desktop, 390 px, and 320 px, with localized live output, native controls, visible focus, no page-level overflow, English-language marking on canonical topic cards, and no console errors.

This conceptual scope does not assert a Thai standard number, installation rule, utility requirement, or legal threshold. No standards-specific or qualified-human approval is needed for review preparation. Project-owner Thai-language and final-publication decisions remain pending and cannot be inferred from implementation approval.

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
| `docs/build-release-integrity.md` | Authoritative install, generator, CI, and deployment contract |
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
- whether the long-term topic platform remains fully static or moves to server/on-demand generation;
- whether Incandescent Lamp becomes its own canonical component node;
- whether the standalone Electric Charge lesson comes before Capacitor or later after Capacitor introduces a prerequisite charge-and-field capsule.

Do not silently decide these during unrelated implementation work.

## 8. Immediate next checkpoint

Phase A1 and Phase A2 are implemented. Phase B has produced a `review-ready` Voltage lesson and a review-prepared What Is Electricity gateway. The immediate content checkpoint is the curriculum decision that controls Electric Charge and Capacitor ordering; project-owner Thai-language and final-publication decisions for the two review-ready lessons may happen independently and do not block that planning work.

The remaining proposed sequence is the standalone Electric Charge decision, then the approved content choice, while applying the same review workflow to Electric Current when it becomes the active lesson candidate.
