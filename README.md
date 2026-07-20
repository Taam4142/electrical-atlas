# Electrical Atlas

Electrical Atlas is an early bilingual knowledge-map and lesson website for electrical and electronic engineering.

The long-term goal is ambitious: every important electrical/electronic topic should have a clear home, useful relationships, and eventually a visual explanation that can be browsed by subject, component, system, application, or prerequisite path.

Live prototype:

https://electrical-atlas-r3zv.vercel.app/

The project currently has two layers:

- `electrical-atlas/` — the Markdown planning corpus, taxonomy model, master subject map, and inventory files.
- `electrical-atlas-site/` — the Astro website prototype that turns the atlas into browsable English and Thai pages.

## Current status

This is a v0.1 prototype, not a finished public reference yet.

Already included:

- English and Thai routes.
- A guide page for using the site.
- A subject map and searchable topic browser.
- 1,607 generated topic record pages from the Markdown inventory.
- Eleven starter lessons:
  - What Is Electricity?
  - Electric Charge
  - Voltage
  - Electric Current
  - Resistance and Conductance
  - Ohm's Law
  - Series and Parallel Circuits
  - Switches and Contacts
  - Electrical Power and Energy
  - Battery
  - MOSFET
- Interactive visuals for the first electricity lesson, Electric Charge, Voltage, Electric Current, Resistance and Conductance, Ohm's Law, Series and Parallel Circuits, Switches and Contacts, Electrical Power and Energy, Battery, and MOSFET switching lessons.
- Suggested next lessons/topics at the end of lesson and topic pages, now backed by an explicit relationship seed graph plus metadata fallback.
- A lesson registry v0.1 that centralizes lesson metadata, topic coverage, language routes, status, safety level, and source-review state.
- Tests for physics helpers, interactions, generated topic data, suggestions, and text-encoding guardrails.

## Repository layout

```text
.
├── electrical-atlas/
│   ├── README.md
│   ├── 00-project-plan.md
│   ├── 01-taxonomy-model.md
│   ├── 02-master-subject-map.md
│   ├── 03-learning-and-exploration-paths.md
│   ├── 04-coverage-audit.md
│   └── inventory/
└── electrical-atlas-site/
    ├── src/
    ├── public/
    ├── scripts/
    ├── package.json
    └── README.md
```

## Run locally

Use Node.js 22.12 or newer within the Node 22 release line and npm 10.x. Version 10.9.3 authored the current lockfile and is declared in `packageManager`; other npm 10 releases are supported by the engine contract. The repository root is the only supported install and build root; its workspace lockfile is authoritative.

```powershell
npm.cmd ci
npm.cmd run dev
```

On macOS/Linux or GitHub Actions, use `npm` instead of `npm.cmd`.

Useful commands:

```powershell
npm.cmd run generate:topics
npm.cmd run check
npm.cmd test
npm.cmd run build
npm.cmd run build:production
```

`build:production` is the deployment gate: it rejects stale generated topic files without rewriting them, runs standalone parser/build-validator tests and Vitest, checks Astro/TypeScript, builds the static site, and validates representative bilingual output, robots policy, and root-relative links. Ordinary local `build` remains a quicker check-and-build command.

The topic generator reads:

```text
../electrical-atlas/inventory/*.md
```

and writes generated website data into:

```text
electrical-atlas-site/src/lib/generated/
electrical-atlas-site/public/data/atlas-topics.json
```

## Quality checks

GitHub Actions runs the website checks on push and pull request:

1. install dependencies with `npm ci`;
2. generate the topic index;
3. fail if generated files differ from the commit;
4. run Astro/TypeScript checks;
5. run parser and website tests;
6. build the static Astro site.

## Deployment direction

Recommended first deployment: Vercel.

The site currently uses normal root-relative routes such as `/en/` and `/th/`, so it fits a root domain or Vercel preview URL well. GitHub Pages is still possible, but a project-page URL such as `/electrical-atlas/` may require extra base-path work.

See [docs/deployment.md](docs/deployment.md).

## Production docs

- [Latest project review and next-phase plan (2026-07-14)](docs/project-review-2026-07-14.md)
- [Build and release integrity](docs/build-release-integrity.md)
- [Lesson production system](docs/lesson-production-system.md)
- [Project improvements and risk-reduction plan](docs/project-improvements-risk-reduction.md)
- [Lesson registry plan](docs/lesson-registry-plan.md)
- [Lesson template](docs/lesson-template.mdx)
- [Lesson outlines](docs/lesson-outlines/README.md)
- [First 20 lesson roadmap](docs/first-20-lessons.md)
- [Lesson quality checklist](docs/lesson-quality-checklist.md)
- [Publication governance](docs/publication-governance.md)
- [Lesson review records](docs/lesson-reviews/README.md)
- [Thai terminology glossary](docs/thai-terminology-glossary.md)
- [Engineering Notebook theme](docs/theme-engineering-notebook.md)
- [Suggestion and relationship system](docs/suggestion-relationship-system.md)
- [Deprecated manual lesson suggestions](docs/deprecated-manual-lesson-suggestions.md)
- [Agent notes](CLAUDE.md)

## Content principles

- English is the canonical authoring language for now.
- Thai content is part of the product, not an afterthought.
- Thai standards and regulations should be referenced when safety, installation, energy systems, buildings, or Thailand-specific practice is involved.
- Taxonomy presence does not mean a finished lesson exists.
- Safety-related content should be clearly marked and verified before publication.
- Visual explanation should favor physical intuition first, then mathematical detail.

## Near roadmap

The [project review and next-phase plan dated 2026-07-14](docs/project-review-2026-07-14.md) contains the evidence-backed phase sequence and implementation record. Phase A1 and Phase A2 were implemented on 2026-07-14. Phase B established the revision-bound lesson workflow, which now continues as a standing per-lesson process; later phases remain recommendations pending separate approval.

Phase A1 corrected public status truth, invalid preview IDs, stale guidance, the root gateway, and unfinished-topic indexing behavior. Phase A2 established one reproducible root install path, strict inventory and relationship validation, generated-data drift checks, and a test-gated Vercel build. Phase B used Voltage and What Is Electricity to prove the revision-bound workflow, then applied it to Electric Charge. Charge is now `review-ready` with verified sources but remains below `published`; Thai-language and final publication decisions still belong to the project owner. Capacitor is the next content milestone.

## License

No license has been selected yet. Until a license is added, treat this as a private/all-rights-reserved project.
