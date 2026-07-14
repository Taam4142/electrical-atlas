# Deployment guide

Electrical Atlas is currently a static Astro site inside `electrical-atlas-site/`.

## Recommended first option: Vercel

Vercel is the easiest first deployment target because the site currently assumes root-relative routes such as `/en/`, `/th/`, `/en/map/`, and `/en/topics/...`.

Suggested Vercel settings:

| Setting | Value |
| --- | --- |
| Framework preset | Astro |
| Root directory | repository root (leave the Vercel Root Directory setting blank) |
| Install command | `npm ci` |
| Build command | `npm run build:production` |
| Output directory | `electrical-atlas-site/dist` |

No environment variables are required for the current prototype.

The repository includes one authoritative root `package-lock.json` and a root `vercel.json`. Do not configure Vercel to use `electrical-atlas-site` as its Root Directory: that folder intentionally has no lockfile and cannot read the sibling Markdown inventory when isolated. The production build rejects missing or stale tracked topic outputs before any rewrite, runs parser tests, Vitest and Astro/TypeScript checks, builds the static site, then validates representative EN/TH pages, robots policy, and root-relative internal targets.

The dashboard Root Directory and production-branch settings are external state that the repository cannot enforce. Keep Root Directory blank/repository root and production deployments limited to `main`.

## Alternative: GitHub Pages

GitHub Pages can work, but be careful with project-page URLs.

If the site is served at:

```text
https://taam4142.github.io/electrical-atlas/
```

then links like `/en/` point to:

```text
https://taam4142.github.io/en/
```

instead of:

```text
https://taam4142.github.io/electrical-atlas/en/
```

So before enabling GitHub Pages on the default project URL, update the Astro base-path strategy and test every generated route. A custom domain avoids most of that friction.

## Pre-deployment checklist

- Run `npm.cmd ci` from the repository root on a clean checkout.
- After intentional inventory or generator changes, run `npm.cmd run generate:topics` and review all three generated artifacts.
- Run `npm.cmd run build:production` from the repository root.
- Confirm the production gate reports current generated files, representative bilingual output, topic robots policy, and no missing root-relative targets.
- Visually check at least one English lesson, one Thai lesson, one English topic page, and one Thai topic page.
- Make sure safety or standards claims are not presented as final unless verified against authoritative sources.
