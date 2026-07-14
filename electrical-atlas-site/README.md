# Electrical Atlas site prototype

This is the first working website prototype for **Electrical Atlas**.

It turns the planning corpus in `../electrical-atlas/` into an Astro app with:

- bilingual English/Thai home, guide, lesson, status, map, and topic-record routes;
- a deliberately minimal root language gateway;
- an available-lesson browser and an active registry queue with maturity, safety, source, and Thailand-context status;
- guided/technical lesson modes and original interactive concept visuals;
- a searchable topic browser and generated record pages for every mapped inventory topic;
- relationship-first lesson/topic suggestions with metadata fallback;
- explicit separation between route availability and editorial maturity;
- `noindex,follow` on unfinished mapped topic records;
- TypeScript physics helpers plus registry, navigation, SEO, relationship, interaction, encoding, and generated-data tests.

The live lesson list comes from `src/lib/lessonRegistry.ts`; do not maintain another manual lesson catalog in this file.

## Local commands

On this Windows machine, use `npm.cmd` instead of `npm` because PowerShell script execution blocks `npm.ps1`.

```powershell
npm.cmd install
npm.cmd run generate:topics
npm.cmd run check
npm.cmd run dev
npm.cmd run build
npm.cmd test
```

## Route families

- `/` — bilingual language gateway
- `/en/` and `/th/` — localized landing pages
- `/{locale}/guide/` — current learner instructions
- `/{locale}/lessons/` — available lesson pages plus unlinked registry queue
- `/{locale}/registry/` — operational lesson status board
- `/{locale}/map/` — atlas map and searchable topic index
- `/{locale}/topics/[slug]/` — mapped topic records (`noindex,follow` until enriched)
- `/{locale}/lessons/[slug]/` — lesson routes declared available by the registry

## Generated topic index

`npm.cmd run generate:topics` reads `../electrical-atlas/inventory/*.md` and generates:

- `src/lib/generated/atlasTopics.ts` — TypeScript topic data for tests and build-time checks
- `src/lib/generated/atlasTopicMeta.ts` — compact metadata used by the UI
- `public/data/atlas-topics.json` — client-loaded searchable topic payload

The build and test scripts run this generator automatically.

## Design intent

The visual language is a clean technical-studio style inspired by good engineering explainer channels, but all layout, wording, visuals, and branding are original.

## Current limitations

- This is a prototype, not a complete or fully reviewed content platform.
- Topic record pages are mapped reference stubs, not finished lessons.
- An available lesson page may still have `prototype` maturity; only registry `status: published` may be called published.
- Thai standards and official-practice claims require current verification against authoritative Thai sources before use.
- The interactive circuit is simplified and marked as conceptual. It teaches causality, not exact electromagnetic-field simulation.
