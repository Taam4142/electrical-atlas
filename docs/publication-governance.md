# Publication governance

This document defines who may approve Electrical Atlas content and what evidence is required before a lesson changes from `review-ready` to `published`.

The purpose is not to add ceremony to ordinary writing. It is to stop a public status label from implying a level of technical, Thai-language, safety, or standards review that did not actually happen.

## Approved ownership

Decision recorded: 2026-07-14.

| Responsibility | Owner | Boundary |
| --- | --- | --- |
| Final publication decision | Project owner | Gives explicit lesson-level approval after reviewing the evidence and remaining limitations. |
| Thai-language approval | Project owner | Confirms that the Thai page is natural, understandable, and suitable for Thai learners. |
| Research, drafting, source mapping, implementation, and test preparation | Project maintainers and coding assistants | May prepare a lesson for review, but may not grant final approval on the project owner's behalf. |
| Low-risk conceptual technical review | Maintainer review against recorded authoritative sources, followed by the project owner's decision | Suitable for foundational explanations such as the Voltage pilot when the page does not provide installation instructions or an exact local rule. |
| Safety-critical, installation, legal/regulatory, or standards-sensitive technical review | Appropriately qualified human reviewer plus the project owner | Required when incorrect advice could reasonably cause injury, equipment damage, noncompliant work, or a misleading claim about Thai requirements. |

The project owner's acceptance of these roles does **not** pre-approve any lesson. Each lesson still needs its own explicit publication decision.

## What coding assistants may and may not do

Coding assistants may:

- identify and rewrite inaccurate or ambiguous explanations;
- locate primary or otherwise authoritative sources;
- create a claim-to-source record;
- check equations, units, links, metadata, accessibility, tests, builds, and deployed pages;
- move a lesson to `review-ready` when the documented review-preparation gates are complete.

Coding assistants may not:

- record the project owner's final Thai approval without an explicit lesson-level decision;
- act as the independent qualified human reviewer for safety-critical or regulated practice;
- turn a candidate source into a verified local rule without checking its jurisdiction, edition, date, and scope;
- mark a lesson `published` merely because automated checks pass.

Every recorded decision carries both a display name/role and a machine-checked `reviewerAuthority`. The allowed authorities are `maintainer`, `project-owner`, `qualified-human`, and `policy`. A familiar-looking reviewer name cannot bypass the authority check: Thai-language and final-publication gates for a Thai lesson require `project-owner`, while a required qualified review requires `qualified-human`.

## Risk-based approval matrix

| Content type | Minimum evidence | Human approval required before `published` |
| --- | --- | --- |
| Low-risk conceptual physics or circuit theory | Recognized textbook, university material, or official units/vocabulary source; exact claims mapped in a review record | Project owner, including Thai-language approval |
| Component characteristics or operating limits | Current manufacturer datasheet/application note or equivalent engineering source | Project owner; qualified reviewer when misuse could create a material hazard |
| General safety warning | Current official safety guidance or applicable safety-source family | Project owner; qualified reviewer if the lesson moves beyond general warnings into practice |
| Thai descriptive context with no instruction or legal claim | Current official Thai primary source with jurisdiction and scope recorded | Project owner |
| Thai standard, utility rule, installation method, protection requirement, legal/regulatory claim, or hazardous practical instruction | Current official source, exact document/edition or issue date, URL, access date, scope/jurisdiction, claim mapping, and limitations | Appropriately qualified human reviewer and project owner |

When a lesson mixes claim types, the strictest applicable row controls only the affected claims and instructions. It does not automatically make every conceptual sentence high risk.

## Required review record

Every lesson entering `review-ready` must have a versioned record under `docs/lesson-reviews/`. The record must include:

- lesson ID, slug, revision, languages, registry status, source status, and safety level;
- reviewer roles and decision state;
- a claim-to-source table with direct links, source dates or editions where available, access date, and scope limitations;
- corrections made during review;
- Thai terminology and localization notes;
- safety and Thailand-context findings;
- automated, browser, accessibility-oriented, and deployment checks;
- known limitations and future-review triggers;
- the final publication decision, recorded separately from review preparation.

The record should summarize evidence in original words. It must not reproduce paid standards, textbooks, or large copyrighted passages.

The machine-readable control block also binds the evidence to the reviewed implementation. It records repository-relative files and their SHA-256 digests after line endings are normalized to LF, then stores a SHA-256 fingerprint of that sorted manifest as `reviewedRevision`. Every gate in the record therefore refers to one exact candidate. If any bound file changes, CI rejects the old evidence until the diff is reviewed, the affected gates are rerun, and both the manifest and fingerprint are deliberately refreshed. This prevents an approval from silently floating forward to different lesson bytes.

## Status transition rules

### `prototype` to `review-ready`

This transition may be made by a maintainer when:

- the implemented English and Thai content matches the intended lesson scope;
- the claims needed for that revision are mapped to suitable sources;
- `sourceStatus` truthfully reflects the result;
- technical corrections, terminology checks, safety boundaries, and accessibility checks are recorded;
- relevant tests and the production build pass;
- `technicalAccuracy`, `englishContent`, `implementationVerification`, and `visualAccessibility` are recorded as passed by permitted authorities;
- the reviewed files are bound to the review record by matching normalized-LF SHA-256 digests;
- no unresolved issue makes owner review misleading.

`review-ready` means “complete enough for the named approver to decide.” It does not mean “already approved.”

### `review-ready` to `published`

This transition requires:

1. explicit approval for this lesson and revision from the project owner;
2. explicit Thai-language approval for the Thai page;
3. qualified human technical approval when the approval matrix requires it;
4. all source-sensitive claims at `verified`, not merely `draft` or `needed`;
5. successful live-page checks after deployment;
6. successful implementation verification tied to the reviewed file manifest;
7. a completed publication-decision section in the lesson review record.

General permission to continue the project is not a substitute for lesson-level publication approval.

### After publication

Change a lesson to `revision-needed` or its source status to `needs-update` when a material error is found, a cited rule or edition changes, a source becomes unavailable without a suitable replacement, the lesson's scope expands beyond its reviewed evidence, or a recorded re-review trigger is reached.

`nextReviewAt` is an enforced UTC calendar date, not a reminder-only label. On that date (that is, when it is less than or equal to the current UTC date), a lesson cannot retain current `verified` evidence or pass publication validation until the review is renewed; the interim source state should be `needs-update`. An event-driven source with no sensible scheduled date may use `null`, but verified Thailand-context claims must set a date because their official pages, tariffs, rules, and editions can change.

## Qualified-human risk decision

Every review record makes an explicit `qualifiedReviewRequired` decision and explains it in `qualifiedReviewReason`.

- `moderate` and `high` safety-level lessons must set it to `true`.
- A `low`-risk lesson must also set it to `true` when it includes safety-critical practice, hazardous troubleshooting, exact working limits, regulated installation advice, or a standards/legal claim covered by the strict rows of the approval matrix.
- A low-risk conceptual lesson may set it to `false` only through a dated `policy` decision on the `qualifiedHuman` gate. That decision applies only to the recorded scope and must be reconsidered when the scope changes.

When qualified review is required, `review-ready` may still be used to hand the evidence package to that reviewer, but `published` is blocked until the `qualifiedHuman` gate is passed by `qualified-human` authority.

## Thai standards and authority claims

The word “official” alone is not sufficient. A source must support the exact claim within the scope in which the site uses it.

For every exact Thai standards- or authority-sensitive claim, record:

- issuing body, such as TISI, EIT, MEA, PEA, ERC, NBTC, or NIMT;
- exact document title and identifier;
- edition, issue date, or revision when available;
- direct official URL and access date;
- geographic, utility, product, installation, or regulatory scope;
- the exact lesson claim it supports;
- any conflict, ambiguity, or narrower interpretation;
- reviewer and review date;
- a re-review trigger or date when currency matters.

For example, a PEA product requirement that lists a meter operating voltage does not automatically prove one nationwide household-supply rule. The lesson must either state the narrower PEA/product context or omit the generalized number until the broader claim is supported.

## Voltage pilot decision state

Phase B was approved to begin on 2026-07-14 with **Voltage** as the first publication pilot.

Current boundary:

- the project owner and Thai-language approver roles are confirmed;
- maintainers may prepare the lesson and its evidence for `review-ready`;
- no final Thai-language or publication approval has yet been recorded for the Voltage lesson itself;
- Voltage must remain below `published` until the project owner reviews the prepared English/Thai revision and explicitly approves it.

The detailed evidence and decision state for this pilot live in [Voltage v0.1 review](lesson-reviews/voltage-v0.1.md).
