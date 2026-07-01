# Deployment guide

Electrical Atlas is currently a static Astro site inside `electrical-atlas-site/`.

## Recommended first option: Vercel

Vercel is the easiest first deployment target because the site currently assumes root-relative routes such as `/en/`, `/th/`, `/en/map/`, and `/en/topics/...`.

Suggested Vercel settings:

| Setting | Value |
| --- | --- |
| Framework preset | Astro |
| Root directory | `electrical-atlas-site` |
| Install command | `npm ci` |
| Build command | `npm run build` |
| Output directory | `dist` |

No environment variables are required for the current prototype.

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

- Run `npm.cmd test` locally from `electrical-atlas-site/`.
- Run `npm.cmd run build` locally from `electrical-atlas-site/`.
- Confirm generated topic pages build successfully.
- Check at least one English lesson, one Thai lesson, one English topic page, and one Thai topic page.
- Make sure safety or standards claims are not presented as final unless verified against authoritative sources.
