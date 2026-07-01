# Electrical Atlas agent notes

This file gives project-local guidance for coding agents and collaborators.

## Project shape

Electrical Atlas has two main layers:

- `electrical-atlas/` — Markdown planning corpus, taxonomy model, subject map, and inventory files.
- `electrical-atlas-site/` — Astro website prototype that renders lessons, topic records, visuals, and suggestions.

The site is bilingual English/Thai. English is currently the canonical authoring language, but Thai support is part of the product.

## Suggestion system

The active suggestion system is relationship-first:

- `electrical-atlas-site/src/lib/relationships.ts` contains explicit atlas relationship records.
- `electrical-atlas-site/src/lib/suggestions.ts` converts those relationships into visible suggestion cards.
- Topic pages use explicit relationships first, then metadata similarity fallback.

Do not add new lesson suggestions by rebuilding the old manual list. Add relationship records instead.

Useful documentation:

- `docs/suggestion-relationship-system.md`
- `docs/deprecated-manual-lesson-suggestions.md`

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
npm.cmd test
npm.cmd run build
```

From the repository root, these commands forward into `electrical-atlas-site/`.

On Windows PowerShell, use `npm.cmd` rather than `npm`.
