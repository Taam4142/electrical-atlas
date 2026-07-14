# Build and release integrity

Status: implemented in Phase A2 on 2026-07-14.

This document is the durable operating guide for dependency installation, topic-data generation, validation, CI, and deployment. Its purpose is to ensure that the commit being reviewed is the same source state that is tested, built, and deployed.

## One supported project root

Run all npm commands from the repository root. The root `package.json` owns the npm workspace and forwards website tasks into `electrical-atlas-site/`. The root `package-lock.json` is the only lockfile.

Required toolchain:

- Node.js `>=22.12.0 <23`, matching the minimum required by the pinned Astro packages while keeping CI and deployment on the Node 22 release line;
- npm `10.x` as the supported package-manager range; `10.9.3` authored the current lockfile and is declared in `packageManager` for Corepack-aware environments;
- exact direct dependency versions in `electrical-atlas-site/package.json`.

Why: two lockfiles had already resolved different Astro versions, while `latest` declarations made the next lock update unpredictable. A single root lockfile gives local work, CI, and Vercel one dependency graph.

Canonical clean-clone workflow on Windows:

```powershell
npm.cmd ci
npm.cmd run generate:topics
npm.cmd run check
npm.cmd test
npm.cmd run build
```

Use `npm` instead of `npm.cmd` on macOS, Linux, and GitHub Actions.

For the complete deployment gate, run:

```powershell
npm.cmd run build:production
```

That command first verifies the three tracked topic outputs without rewriting them. It then runs the standalone Node fixture tests, the website Vitest suite, Astro/TypeScript checks, the static build, and a built-output validator. If inventory or generator work intentionally changes the expected output, run `npm.cmd run generate:topics` and review those artifacts before rerunning the production gate.

## Dependency update policy

Exact pins reduce accidental change; they also mean upgrades must be deliberate. When updating dependencies:

1. choose and record the intended versions;
2. update the site package from the repository root;
3. regenerate the root lockfile only;
4. run `npm.cmd run build:production`;
5. review framework release notes and visible behavior when Astro or React changes;
6. commit the package declaration and root lockfile together.

Never add a second lockfile under `electrical-atlas-site/`. Do not change a dependency back to `latest`. Automated dependency-update tooling may be added later, but its pull requests must pass the same gate.

## Inventory-to-topic contract

Numbered Markdown files in `electrical-atlas/inventory/` are executable source data. Every bullet in those files must be a compact topic record:

```text
- `canonical.id` **Canonical name** — summary. [kind; optional scope role; optional maturity; depth; optional safety]
```

The parser rejects before writing output when it finds:

- a malformed bullet or a record-shaped line missing its required bullet marker;
- an invalid canonical ID or generated route slug;
- an unknown node kind, scope role, or maturity tag;
- fields in the wrong order, more than two maturity values, a missing/descending depth, or invalid safety;
- a record outside an H2 section;
- common encoding-corruption markers;
- duplicate IDs or route-slug collisions;
- an unexpected inventory Markdown filename, a case-variant extension such as `.MD`, an unmapped domain file, or an empty domain file.

`model` is an intentional node kind. `enabling` is a scope role, never a node kind. Canonical topic IDs may appear in ordinary prose so prerequisites and cross-links can be documented before structured relationships are added. Explicit scope and maturity are copied to generated data; inherited fields remain absent, meaning that the prose section/file default still applies and the generator must not guess. Omitting those fields also avoids bloating the client search payload with repeated null values.

The parser resolves paths from its own script location, so it behaves consistently when invoked through npm. Its fixture tests use Node's built-in test runner and execute before Vitest.

## Generated-file integrity

Topic generation writes three tracked artifacts:

```text
electrical-atlas-site/src/lib/generated/atlasTopics.ts
electrical-atlas-site/src/lib/generated/atlasTopicMeta.ts
electrical-atlas-site/public/data/atlas-topics.json
```

`npm run check:generated` computes all three expected artifacts in memory and compares them with the files on disk without creating directories or writing files. Missing or stale output fails with the exact paths to regenerate. Line-ending style is ignored so an otherwise identical Windows checkout does not produce a false failure.

CI first uses `git ls-files --error-unmatch` to prove all three artifacts are tracked, then runs the non-mutating check. The production/Vercel prebuild runs the same check before tests or build output, so a stale commit cannot pass deployment merely because a later build regenerated it.

After changing inventory or generator code, run generation and commit the source plus all changed generated artifacts together.

## Relationship integrity

The website recommendation graph is validated separately from the durable taxonomy ontology. Tests enforce real endpoints, unique ordered destinations, no self-links, bounded integer weights, no topic-to-lesson records, acyclic prerequisite/successor subgraphs, curriculum-order direction, and no reversed asymmetric duplicates. Relationship directionality is declared beside the relationship vocabulary rather than copied into tests. Suggestions also cannot repeat a URL, point back to the current lesson, or repeat a concept as both an available lesson and its covered topic; the lesson view wins when both depths are present.

Intentional inverse views remain valid: an earlier lesson may point to a successor while that successor points back to its prerequisite. Roles marked symmetric in `relationshipDirectionality`, such as `energy-link` and `combines-with`, may appear in both directions.

## CI and Vercel release path

GitHub Actions runs, in order:

1. `npm ci` from the repository root;
2. proof that all three generated artifacts are tracked and current;
3. `npm run check`;
4. standalone Node fixture tests and Vitest through `npm test`;
5. the static build.

The root `vercel.json` independently uses `npm run build:production`. This matters because a GitHub workflow existing in the repository does not prove that Vercel waits for it. The Vercel command checks generated drift before any rewrite, runs the executable test/check gate, builds, and then validates representative EN/TH pages, the narrow topic-only `noindex,follow` policy, and every root-relative `href` or `src` target found in built HTML.

Vercel settings must remain:

| Setting | Required value |
| --- | --- |
| Root Directory | blank / repository root |
| Install Command | `npm ci` |
| Build Command | `npm run build:production` |
| Output Directory | `electrical-atlas-site/dist` |
| Production branch | `main` |

Root Directory and production-branch selection live in Vercel's dashboard and cannot be guaranteed by Git. Confirm them after project migration or deployment troubleshooting. Vercel documents that install paths follow the configured root and that `vercel.json` can override install/build/output commands: [Configure a Build](https://vercel.com/docs/builds/configure-a-build) and [vercel.json configuration](https://vercel.com/docs/project-configuration/vercel-json).

For stronger repository governance, configure GitHub to require the `Website checks` job before merging to `main`. That is an external repository setting, so it must be verified in GitHub rather than claimed by source code.

## Failure interpretation

- `npm ci` reports no lockfile: the command is running from the wrong directory or the root lockfile is missing.
- generator reports a file and line: repair the inventory source; do not weaken validation or hand-edit generated output.
- generated drift fails: run generation and review/commit all three outputs before retrying the production build.
- built-site validation fails: repair the missing representative route, locale, robots policy, or internal target reported after Astro build.
- relationship test fails: correct the edge meaning or curriculum direction; do not broadly ban valid reverse pairs.
- Vercel cannot access `../electrical-atlas`: its Root Directory is incorrectly set to `electrical-atlas-site`.
- local build passes but production build fails: tests uncovered a release blocker that ordinary `build` intentionally does not run.

The gate establishes reproducible executable integrity. It does not prove technical content accuracy, source quality, Thai standards currency, visual accessibility, or editorial publication readiness; those remain separate review responsibilities.
