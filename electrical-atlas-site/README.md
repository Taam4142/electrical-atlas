# Electrical Atlas site prototype

This is the first working website prototype for **Electrical Atlas**.

It turns the planning corpus in `../electrical-atlas/` into a small Astro app with:

- bilingual English/Thai routes;
- a bilingual guide page for using the prototype;
- a foundation lesson: **Voltage / แรงดันไฟฟ้า**;
- a foundation lesson: **Electric Current / กระแสไฟฟ้า**;
- a foundation lesson: **Resistance and Conductance / ความต้านทานและความนำไฟฟ้า**;
- a first lesson: **What Is Electricity? / ไฟฟ้าคืออะไร?**;
- a first full component lesson: **MOSFET / MOSFET คืออะไร?**;
- a guided/technical mode toggle;
- one React interactive visual for a battery-switch-lamp circuit;
- one React interactive visual for voltage as energy per charge;
- one React interactive visual for current as charge flow;
- one React interactive visual for resistance/conductance as current limiting and heat;
- one React interactive visual for MOSFET channel formation;
- pure TypeScript physics helpers with tests.
- a searchable topic browser generated from the Markdown inventory.
- generated topic record pages for every mapped topic.
- suggested next lessons/topics at the end of lesson and topic pages.

## Local commands

On this Windows machine, use `npm.cmd` instead of `npm` because PowerShell script execution blocks `npm.ps1`.

```powershell
npm.cmd install
npm.cmd run generate:topics
npm.cmd run dev
npm.cmd run build
npm.cmd test
```

## Routes

- `/en/lessons/voltage/` — English Voltage foundation lesson
- `/th/lessons/voltage/` — Thai Voltage foundation lesson
- `/en/lessons/current/` — English Electric Current foundation lesson
- `/th/lessons/current/` — Thai Electric Current foundation lesson
- `/en/lessons/resistance/` — English Resistance and Conductance foundation lesson
- `/th/lessons/resistance/` — Thai Resistance and Conductance foundation lesson

- `/` — language gateway and project overview
- `/en/` — English landing page
- `/th/` — Thai landing page
- `/en/guide/` — English guide for using the prototype
- `/th/guide/` — Thai guide for using the prototype
- `/en/map/` — English atlas map and searchable topic index
- `/th/map/` — Thai atlas map and searchable topic index
- `/en/topics/[slug]/` — English mapped topic record pages
- `/th/topics/[slug]/` — Thai mapped topic record pages
- `/en/lessons/what-is-electricity/` — first English lesson
- `/th/lessons/what-is-electricity/` — first Thai lesson
- `/en/lessons/mosfet/` — English MOSFET component lesson
- `/th/lessons/mosfet/` — Thai MOSFET component lesson

## Generated topic index

`npm.cmd run generate:topics` reads `../electrical-atlas/inventory/*.md` and generates:

- `src/lib/generated/atlasTopics.ts` — TypeScript topic data for tests and build-time checks
- `src/lib/generated/atlasTopicMeta.ts` — compact metadata used by the UI
- `public/data/atlas-topics.json` — client-loaded searchable topic payload

The build and test scripts run this generator automatically.

## Design intent

The visual language is a clean technical-studio style inspired by good engineering explainer channels, but all layout, wording, visuals, and branding are original.

## Current limitations

- This is a prototype, not a complete content platform.
- Topic record pages are mapped reference stubs, not finished lessons.
- Thai standard numbers/editions are not hard-coded yet; they should be verified against official Thai sources before any legal/safety publication claim.
- The interactive circuit is simplified and marked as conceptual. It teaches causality, not exact electromagnetic-field simulation.
