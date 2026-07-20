# Electrical Atlas agent notes

This file gives project-local guidance for coding agents and collaborators.

## Project shape

Electrical Atlas has two main layers:

- `electrical-atlas/` — Markdown planning corpus, taxonomy model, subject map, and inventory files.
- `electrical-atlas-site/` — Astro website prototype that renders lessons, topic records, visuals, and suggestions.

The site is bilingual English/Thai. English is currently the canonical authoring language, but Thai support is part of the product.

## Durable project memory

Do not rely on chat history for information that will be useful in later work.

When a task produces a reusable plan, decision, rationale, risk, warning, workflow, source rule, architecture choice, acceptance criterion, unresolved question, or operating detail, update an appropriate Markdown file in the same work checkpoint. Create a new document when adding the material to an existing file would make that file difficult to scan.

Important rules:

- link new planning or process documents from `README.md` or another clear index;
- distinguish verified current state, proposed work, approved decisions, and completed implementation;
- use a dated review when metrics and findings are a historical snapshot;
- keep one detailed source of truth and link to it instead of copying changing phase plans into several files;
- update or retire stale guidance when implementation changes the project state.

The latest dated review is:

```text
docs/project-review-2026-07-14.md
```

Phase A1 and Phase A2 were implemented on 2026-07-14. Phase B established the review-preparation and revision-binding workflow with Voltage and What Is Electricity and then applied it to Electric Charge and Capacitance and Capacitors; exact commit `182a8b0` passed deployment verification for all four current fingerprints. The full publication lifecycle remains unproved until a lesson genuinely reaches `published`. Diode is the active next lesson. The capacitor lesson deliberately covers `ea.component.capacitor`, `ea.em.capacitance`, and `ea.circuit.element.capacitor-ideal`; its moderate safety scope requires a qualified-human gate before publication, in addition to project-owner Thai-language and publication decisions. Later phases remain recommendations pending separate approval; browser evidence must continue to name any platform or emulation limits rather than imply unsupported coverage.

Build, generator, CI, and deployment decisions live in:

```text
docs/build-release-integrity.md
```

Publication approval roles and lesson evidence live in:

```text
docs/publication-governance.md
docs/lesson-reviews/
```

## Suggestion system

The active suggestion system is relationship-first:

- `electrical-atlas-site/src/lib/relationships.ts` contains explicit atlas relationship records.
- `electrical-atlas-site/src/lib/suggestions.ts` converts those relationships into visible suggestion cards.
- Topic pages use explicit relationships first, then metadata similarity fallback.

Do not add new lesson suggestions by rebuilding the old manual list. Add relationship records instead.

Useful documentation:

- `docs/suggestion-relationship-system.md`
- `docs/deprecated-manual-lesson-suggestions.md`

## Improvement and risk-reduction direction

Before adding many more lessons, preserve the project structure described in:

- `docs/project-review-2026-07-14.md`
- `docs/project-improvements-risk-reduction.md`
- `docs/build-release-integrity.md`
- `docs/lesson-production-system.md`
- `docs/lesson-quality-checklist.md`
- `docs/lesson-registry-plan.md`
- `docs/lesson-template.mdx`

Phase A1 completed the public-truth, canonical-preview-ID, stale-guidance, minimal-root-gateway, and mapped-topic indexing work. Phase A2 completed dependency/runtime pinning, the single root lockfile path, strict inventory and relationship validation, generated-output drift checks, and a test-gated deployment build. The most important remaining near-term risk reductions are:

- keep lesson metadata centralized in `electrical-atlas-site/src/lib/lessonRegistry.ts`;
- keep safety/source status explicit;
- avoid unverified Thailand-specific standards claims;
- keep Thai terminology and UTF-8 rendering consistent;
- keep future dependency upgrades deliberate and commit the root lockfile with exact package changes;
- apply the revision-bound source, implementation, browser, deployment, qualified-human, Thai-language, and publication workflow to each lesson; Diode is next, and neither qualified-human nor project-owner decisions may be inferred from maintainer preparation.

## Lesson authoring workflow

Do not jump directly from an idea to a public route.

Normal lesson flow:

1. Add or update the lesson registry entry.
2. Create an outline under `docs/lesson-outlines/` using `docs/lesson-template.mdx`.
3. Keep the registry status honest: `planned` for scoped ideas, `outlined` for drafted outlines, `prototype` only after public content exists.
4. Keep planned/outlined lessons out of public routes.
5. Before `review-ready` or `published`, use `docs/lesson-quality-checklist.md`, apply `docs/publication-governance.md`, and preserve a versioned record under `docs/lesson-reviews/`.
6. Never treat assistant review or passing automation as the project owner's final Thai-language or publication approval.

Current content candidates and unresolved sequence decisions live in:

```text
docs/first-20-lessons.md
docs/project-review-2026-07-14.md
```

`docs/lesson-outlines/switches-contacts.md` is production history for an implemented prototype, not the current next outline.

## Deprecated manual suggestion list

The old hand-curated lesson suggestion list is archived in:

```text
docs/deprecated-manual-lesson-suggestions.md
```

That file is historical reference only. It is useful for comparison and migration checks, but it is not the active source of truth.

If the current relationship graph disagrees with the archive, prefer the relationship graph unless the user explicitly asks to restore old behavior.

## Verification expectation

For website changes, run:

```powershell
npm.cmd run generate:topics
npm.cmd run check
npm.cmd test
npm.cmd run build
```

For a release or deployment-sensitive change, run `npm.cmd run build:production`. Run every command from the repository root; it owns the only lockfile and forwards tasks into `electrical-atlas-site/`.

On Windows PowerShell, use `npm.cmd` rather than `npm`.
