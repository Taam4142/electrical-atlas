# Electrical Atlas

Electrical Atlas is an early bilingual knowledge-map and lesson website for electrical and electronic engineering.

The long-term goal is ambitious: every important electrical/electronic topic should have a clear home, useful relationships, and eventually a visual explanation that can be browsed by subject, component, system, application, or prerequisite path.

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
- Two starter lessons:
  - What Is Electricity?
  - MOSFET
- Interactive visuals for the first electricity lesson and MOSFET switching lesson.
- Suggested next lessons/topics at the end of lesson and topic pages.
- Tests for physics helpers, interactions, generated topic data, and suggestions.

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

From the website folder:

```powershell
cd electrical-atlas-site
npm.cmd install
npm.cmd run dev
```

On macOS/Linux or GitHub Actions, use `npm` instead of `npm.cmd`.

Useful commands:

```powershell
npm.cmd run generate:topics
npm.cmd test
npm.cmd run build
```

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
3. run tests;
4. build the static Astro site.

## Deployment direction

Recommended first deployment: Vercel.

The site currently uses normal root-relative routes such as `/en/` and `/th/`, so it fits a root domain or Vercel preview URL well. GitHub Pages is still possible, but a project-page URL such as `/electrical-atlas/` may require extra base-path work.

See [docs/deployment.md](docs/deployment.md).

## Content principles

- English is the canonical authoring language for now.
- Thai content is part of the product, not an afterthought.
- Thai standards and regulations should be referenced when safety, installation, energy systems, buildings, or Thailand-specific practice is involved.
- Taxonomy presence does not mean a finished lesson exists.
- Safety-related content should be clearly marked and verified before publication.
- Visual explanation should favor physical intuition first, then mathematical detail.

## Near roadmap

1. Stabilize repo, CI, and deployment.
2. Create a reusable lesson template.
3. Add explicit topic relationship fields: prerequisite, successor, part-of, used-in, made-of, alternative-to, and fails-by.
4. Expand Thai standard references for Thailand-relevant electrical practice.
5. Build more high-quality lessons from the taxonomy, starting with foundational components and power concepts.

## License

No license has been selected yet. Until a license is added, treat this as a private/all-rights-reserved project.
