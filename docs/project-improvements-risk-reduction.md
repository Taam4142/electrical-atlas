# Project improvements and risk-reduction plan

This document records the main improvement ideas, risks, warning spots, and practical reduction steps for Electrical Atlas.

It is intentionally broader than a feature roadmap. A feature roadmap says what we want to build. This document says what can go wrong as the project grows, why it matters, and how to reduce the risk before it becomes expensive.

Electrical Atlas has an unusually large ambition: explain electrical and electronic knowledge across fundamentals, components, circuits, power, embedded systems, standards, safety, manufacturing, applications, history, and future research. The goal is possible only if the project stays organized. The main danger is not one big failure. The main danger is many small inconsistencies accumulating until the site becomes hard to trust or hard to maintain.

## How to use this document

Use this document when deciding what to improve before adding more lessons.

The recommended rhythm is:

1. Keep the site working.
2. Add lessons steadily.
3. Reduce one structural risk every few lessons.
4. Never let safety, standards, or source claims outrun verification.

This is not a demand to fix everything immediately. It is a map of pressure points.

## Priority labels

| Priority | Meaning |
| --- | --- |
| P0 | Fix or manage before scaling much further. |
| P1 | Important soon; should be addressed during the next foundation lessons. |
| P2 | Important later; track now so the project does not paint itself into a corner. |
| P3 | Useful polish or maturity work after the core system is stable. |

## Current project shape

Electrical Atlas currently has three working layers:

1. **Atlas corpus**: Markdown taxonomy, subject map, audit, and inventory files in `electrical-atlas/`.
2. **Generated topic records**: 1,607 mapped topic pages generated from the inventory.
3. **Hand-built lessons**: bilingual visual lessons with MDX content, Astro route wrappers, React demos, suggestions, and tests.

The site also now has a dedicated public lesson browser at `/en/lessons/` and `/th/lessons/`. This keeps the header and homepage from turning into a long manual list as more lessons are added.

This is a good shape. The key architectural principle should remain:

**Mapped knowledge is not the same as published lesson content.**

The taxonomy can be broad. Published lessons must stay reviewed, honest, and appropriately scoped.

## Risk register

### 1. Scope explosion

**Priority:** P0

**Warning spot:** "All electrical and electronic knowledge" is too large to treat as a normal list of pages. If everything is treated as equally ready, the site can become confusing or misleading.

**Why it matters:** A learner may assume that a mapped page is a finished explanation. A maintainer may feel pressure to fill thousands of topics without review. This can harm trust.

**Risk reduction:**

- Keep topic records clearly labeled as mapped records, not full lessons.
- Keep content status separate from taxonomy presence.
- Use status tags such as `mapped`, `planned`, `prototype`, `review-ready`, and `published`.
- Do not create empty public lesson pages just because a topic exists.
- Prefer a small number of high-quality lessons over many shallow pages.

**Acceptance checks:**

- Topic pages still state that they are not complete explainer lessons.
- Search results and topic records show status clearly.
- Planned lessons can exist in data without creating fake pages.

### 2. Lesson metadata duplication

**Priority:** P0

**Warning spot:** Lesson slugs, titles, summaries, routes, status, and primary topic links are currently repeated across route wrappers, suggestions, navigation, homepage cards, topic records, and tests.

**Why it matters:** At 9 lessons this is manageable. At 20+ lessons, one forgotten edit can break a route, a language counterpart, a suggestion, or a published-topic link.

**Risk reduction:**

- Implement a central lesson registry.
- Store each lesson's slug, stable ID, primary topic, covered topics, language routes, status, safety level, source status, title, summary, and ordering in one place.
- Use that registry for navigation, suggestions, topic-record published links, and tests.

**Deep-dive plan:** See [lesson-registry-plan.md](lesson-registry-plan.md).

**Acceptance checks:**

- A lesson is declared once in the registry.
- Suggestions read lesson labels from the registry.
- Topic records derive "published lesson available" from registry coverage.
- Tests fail when a registry page claims a route exists but the route wrapper is missing.

### 3. Technical accuracy and source review

**Priority:** P0

**Warning spot:** Electrical and electronic topics quickly become precise. A beginner-friendly simplification can become wrong if it is not clearly bounded.

**Why it matters:** The site wants to teach. Teaching requires trust. Incorrect physical explanations, component limits, formulas, or safety advice can mislead learners.

**Risk reduction:**

- For every lesson, explicitly state when a model is simplified.
- Add source notes before marking a lesson `review-ready` or `published`.
- Keep "prototype" visible until review is complete.
- Use authoritative sources for technical claims: textbooks, standards, manufacturer datasheets, application notes, university materials, IEEE/IEC/ISO where relevant, and verified Thai institutions for Thailand-specific practice.
- Separate conceptual explanation from practical design instruction.

**Acceptance checks:**

- Each lesson has a visible status.
- Lessons define variables and units in equations.
- Safety-critical or standards-related claims have source notes.
- Prototype lessons do not pretend to be final references.

### 4. Electrical safety and standards risk

**Priority:** P0

**Warning spot:** The project will eventually touch mains electricity, batteries, high current, high voltage, transformers, motors, vehicles, buildings, grid systems, RF, and medical equipment.

**Why it matters:** These topics can cause injury, fire, equipment damage, legal issues, or unsafe DIY behavior if presented casually.

**Risk reduction:**

- Give every lesson a safety level: `none`, `low`, `moderate`, or `high`.
- Add stronger warnings before practical examples in moderate/high safety lessons.
- Avoid giving installation instructions until standards and local regulations are verified.
- Use wording like "conceptual demo" when graphics are simplified.
- Clearly say "do not try this on mains power" where needed.
- For Thailand, verify current Thai standards and authority guidance before making legal or installation claims.

**Acceptance checks:**

- Every lesson has a recorded safety level.
- Moderate/high safety lessons cannot be marked `published` without source review.
- Thailand-specific standards claims are not hard-coded unless verified.

### 5. Thailand-specific standards and local context

**Priority:** P0/P1

**Warning spot:** The project is bilingual and Thailand-aware. This is a strength, but it also means Thailand-specific claims must be handled carefully.

**Why it matters:** Electrical rules, product standards, utility requirements, metrology references, spectrum regulations, and installation practice can vary by country and date.

**Risk reduction:**

- Keep Thai context in the product, but separate it from unverified legal claims.
- Maintain a source-family list for Thai references.
- Record whether a lesson requires Thailand context.
- Do not hard-code a Thai standard number, edition, legal requirement, or utility rule without checking current sources.
- When uncertain, say that current Thai standards must be verified.

**Useful Thai source families:**

- Thai Industrial Standards Institute (TISI/TIS);
- Engineering Institute of Thailand (EIT);
- Metropolitan Electricity Authority (MEA);
- Provincial Electricity Authority (PEA);
- Energy Regulatory Commission (ERC);
- National Broadcasting and Telecommunications Commission (NBTC);
- National Institute of Metrology Thailand (NIMT);
- relevant IEC, IEEE, ISO, and manufacturer standards where adopted or referenced.

**Acceptance checks:**

- Thailand-related lessons distinguish concept, common practice, and verified rule.
- Standards references include a review date once verified.
- Thai safety wording is clear and more careful than casual forum language.

### 6. Dependency reproducibility

**Priority:** P1

**Warning spot:** The site currently uses `latest` package versions for Astro, React, TypeScript, and Vitest.

**Why it matters:** The lockfile protects CI and Vercel for now, but future installs or lockfile updates can unexpectedly change major dependencies. That can break builds at the worst possible time.

**Risk reduction:**

- Pin exact dependency versions, or use intentional version ranges.
- Add Dependabot or Renovate for controlled upgrade PRs.
- Keep `npm ci` in CI.
- Run tests and build after dependency updates.

**Acceptance checks:**

- No production dependency uses unconstrained `latest`.
- Dependency upgrades happen in visible commits.
- CI remains green after upgrades.

### 7. Relationship graph growth

**Priority:** P1

**Warning spot:** The relationship system is currently a TypeScript seed graph. That is fine for the prototype, but the graph will grow quickly.

**Why it matters:** Relationships are the backbone of suggestions and learning paths. If they become inconsistent, suggestions become noisy or misleading.

**Risk reduction:**

- Keep the current relationship-first approach.
- Add validation for duplicate edges, self-links, missing node IDs, invalid lesson IDs, invalid relation types, and orphan relationship records.
- Eventually move relationship data to JSON/YAML or generated data if TypeScript becomes too bulky.
- Distinguish prerequisite relationships from ordinary related-topic links.
- Keep relationship labels short and human-readable.

**Acceptance checks:**

- Tests fail when a relationship points to a missing lesson or topic.
- Relationship records have valid relation types.
- Topic suggestions use explicit relationships before metadata fallback.

### 8. Thai terminology consistency

**Priority:** P1

**Warning spot:** Thai engineering language often mixes Thai terms and English technical terms. Without a glossary, pages may drift.

**Why it matters:** Inconsistent wording makes learning harder. It also makes future translation/review harder.

**Risk reduction:**

- Add a Thai terminology glossary.
- Track English canonical term, preferred Thai term, useful alternatives, and notes about when to keep English.
- Include special notes for words like ground, earth, neutral, voltage, potential, charge, current, power, energy, conductor, insulation, breaker, and protection.
- Let Thai pages be natural Thai, not word-for-word translation.

**Acceptance checks:**

- New Thai lessons consult the glossary.
- Thai titles are natural and consistent.
- English terms are kept where Thai learners commonly expect them.

### 9. Text encoding and Thai rendering

**Priority:** P1

**Warning spot:** Some terminal output can display Thai text as mojibake depending on PowerShell encoding. The site may still render correctly, but this deserves a guardrail.

**Why it matters:** Broken Thai text can slip into source files, generated data, or docs and damage the bilingual experience.

**Risk reduction:**

- Keep all source files UTF-8.
- Add a small encoding sanity test that searches Thai-facing files for common mojibake sequences.
- Review Thai pages in browser after deployment.
- Avoid tools that silently rewrite UTF-8 text with another encoding.

**Acceptance checks:**

- CI fails on obvious mojibake patterns in Thai content.
- Thai browser pages render correctly.
- Generated topic JSON preserves valid UTF-8.

### 10. Validation gaps

**Priority:** P1

**Warning spot:** Current tests are useful, but as the project grows they need to validate more project structure, not only formulas and existing suggestions.

**Why it matters:** The site has many generated and hand-wired connections. Broken internal links or mismatched language routes can appear without TypeScript noticing.

**Risk reduction:**

- Add tests for lesson registry completeness.
- Add tests for broken internal links in generated routes.
- Add tests for EN/TH counterpart paths.
- Add tests for topic ID existence in lesson registry and relationship graph.
- Add tests for generated topic slugs and duplicate paths.
- Add tests that high-risk published lessons have safety/source metadata.

**Acceptance checks:**

- `npm test` catches missing route wrappers.
- `npm test` catches relationship targets that do not exist.
- `npm test` catches published lessons without required review metadata.

### 11. Visual system consistency

**Priority:** P1/P2

**Warning spot:** The visual style is inspired by strong explainer channels, but the project must remain original and consistent.

**Why it matters:** Visuals are the heart of the learning experience. If every demo uses different color meanings, controls, and layout patterns, learners need to relearn the interface each time.

**Risk reduction:**

- Define visual design tokens for voltage, current, field, heat, signal, ground/reference, danger, stored energy, and disabled/off state.
- Reuse common UI components for sliders, metric cards, warnings, transcripts, and demo legends.
- Keep diagrams original; do not copy RealPars, The Engineering Mindset, textbook artwork, manufacturer figures, or YouTube visuals.
- Prefer simple cause-and-effect graphics over decorative complexity.

**Acceptance checks:**

- Similar quantities use the same colors across lessons.
- Interactive demos have accessible labels and keyboard behavior.
- Each visual teaches a specific mechanism or relationship.

### 12. Accessibility

**Priority:** P1/P2

**Warning spot:** Interactive graphics can become inaccessible if they rely only on color, motion, or mouse input.

**Why it matters:** The site should work for learners using keyboard navigation, screen readers, small screens, or reduced-motion preferences.

**Risk reduction:**

- Keep keyboard controls for interactive sliders.
- Provide text explanations and transcripts for important visuals.
- Do not rely on color alone.
- Maintain readable contrast.
- Add alt text or textual equivalents for diagrams.
- Respect reduced-motion preferences when animations become more complex.
- Later, add automated accessibility checks.

**Acceptance checks:**

- Interactive controls are usable with keyboard.
- Diagrams have text explanations.
- Mobile layout remains readable.

### 13. SEO and discoverability

**Priority:** P2

**Warning spot:** The project will eventually have thousands of pages. Search engines and users need clear signals about what is a finished lesson and what is a mapped topic record.

**Why it matters:** Poor metadata can make the site appear lower quality than it is. Search engines may index many thin mapped records before the best lessons.

**Risk reduction:**

- Add meaningful page titles and descriptions.
- Add canonical URLs.
- Add Open Graph metadata for share previews.
- Add sitemap and robots strategy.
- Consider whether mapped topic records should be indexed immediately or later.
- Prioritize polished lesson pages for public discovery.

**Acceptance checks:**

- Lesson pages have clear metadata.
- Sitemap generation is intentional.
- Search indexing strategy distinguishes lessons from mapped records.

### 14. Performance and build scaling

**Priority:** P2

**Warning spot:** The site already generates more than 1,600 topic pages. That number can grow.

**Why it matters:** Build time, search payload size, client-side performance, and deployment time can become limiting factors.

**Risk reduction:**

- Track build time after major topic growth.
- Keep generated topic data compact.
- Split search data by locale or domain if the payload becomes large.
- Avoid shipping unnecessary interactive code to pages that do not need it.
- Watch Astro build output and Vercel deployment duration.

**Acceptance checks:**

- Build time stays acceptable.
- Search remains responsive.
- Topic JSON size is monitored.

### 15. Governance, license, and contribution policy

**Priority:** P2

**Warning spot:** The README currently says no license has been selected. That is fine for private early work, but public collaboration needs a decision.

**Why it matters:** Without a license and contribution rules, it is unclear how others may use, copy, contribute, or reuse the project.

**Risk reduction:**

- Decide whether the project is private, all-rights-reserved, open source, or open content.
- Add a license before encouraging public reuse.
- Add contribution guidelines before accepting outside content.
- Add content review expectations for technical, Thai, and safety-sensitive changes.

**Acceptance checks:**

- License is explicit before public collaboration.
- Contributions require review for safety and source quality.
- Content ownership and reuse rules are clear.

### 16. Copyright and originality

**Priority:** P0/P1

**Warning spot:** The visual style can be inspired by RealPars and The Engineering Mindset, but the project must not copy their diagrams, wording, thumbnails, scripts, or animation designs.

**Why it matters:** Copying damages trust and can create legal problems. Original visuals are also better for building a distinct identity.

**Risk reduction:**

- Use inspiration only at the level of clarity, pacing, and engineering-visual feel.
- Create original diagrams and wording.
- Avoid tracing or recreating recognizable third-party visuals.
- Cite sources for facts, not as a source of copied artwork.
- Keep source notes separate from visual ownership.

**Acceptance checks:**

- Visuals are original.
- Lesson wording is original.
- External sources are used for verification, not copied presentation.

### 17. Content versioning and revision history

**Priority:** P2

**Warning spot:** Lessons will evolve. Without revision metadata, it is hard to know what changed, when it was reviewed, or whether safety/source information is stale.

**Why it matters:** Engineering content can become outdated. Standards, software tools, product families, and recommended practices change.

**Risk reduction:**

- Add revision metadata per lesson.
- Track reviewed date, source set, reviewer, and status.
- Add "needs update" state for old lessons.
- Keep changelog notes for major conceptual corrections.

**Acceptance checks:**

- Published lessons show or record review date.
- Lessons can be marked `revision-needed`.
- Source-sensitive lessons can be rechecked later.

### 18. Development workflow and deployment safety

**Priority:** P1

**Warning spot:** The project already uses GitHub Actions and Vercel. That is good, but deployment confidence depends on keeping the workflow boring and repeatable.

**Why it matters:** If a broken build reaches deployment or Vercel fails unexpectedly, the project slows down and trust drops.

**Risk reduction:**

- Keep `npm ci`, generated topics, tests, and build in CI.
- Keep Vercel deployment connected to `main`.
- Run local tests before pushing meaningful site changes.
- Watch dependency and lockfile changes carefully.
- Add a short deployment troubleshooting note when new failure modes appear.

**Acceptance checks:**

- CI passes before deployment is considered healthy.
- Vercel build errors have documented fixes when encountered.
- Generated topic files are deterministic.

### 19. Navigation scalability and mobile header behavior

**Priority:** P1/P2

**Warning spot:** The header should stay calm as the lesson count grows. The project has already moved individual lesson links out of the top navigation and into the public lesson browser, but the small-screen header still uses a horizontal nav strip.

**Current status, 2026-07-03:** The desktop header is now stable and no longer grows with every lesson. The homepage points to the lesson browser instead of rendering one button per lesson. Browser QA showed no page-level horizontal overflow on mobile, but the mobile nav still has a tiny internal horizontal scroll.

**Why it matters:** A learning site should feel predictable and boring in the best way. If the header grows into a crowded control surface, learners spend attention on navigation instead of the lesson. On phones, even a small clipped nav item can make the site feel less polished.

**Risk reduction:**

- Keep the header limited to stable top-level destinations such as Guide, Lessons, Subject map, Status, and language.
- Keep public lesson discovery inside the lesson browser, not in the header.
- Keep planned lessons visible as roadmap items without linking to empty pages.
- If navigation grows again, replace the mobile horizontal strip with a simple mobile menu or compact "Explore" pattern.
- Re-check mobile layout whenever top-level nav labels change, especially Thai labels.

**Acceptance checks:**

- Header link count stays small when new lessons are added.
- `/en/lessons/` and `/th/lessons/` remain the primary lesson list.
- Mobile pages have no page-level horizontal overflow.
- Planned lessons are visible without creating fake lesson pages.

## Recommended order of action

Do not try to fix every risk at once. The next practical sequence should be:

1. **Keep the lesson registry rollout enforced.**  
   Registry v0.1 now drives suggestions, visible lesson metadata, status board behavior, public lesson discovery, and route validation. Continue adding tests whenever registry behavior expands.

2. **Expand registry and relationship validation tests.**  
   The first validation tests exist. Continue expanding them for missing routes, missing topic IDs, bad relationship targets, duplicate metadata, and planned/outlined lessons that accidentally create empty public pages.

3. **Pin dependencies or set up controlled dependency updates.**  
   This reduces surprise build failures from `latest`.

4. **Use the lesson authoring workflow for all new lessons.**  
   Create an outline first, then prototype only when scope, visuals, safety boundaries, Thai context, and source-review needs are clear.

5. **Create a Thai terminology glossary and encoding sanity test.**  
   This protects the bilingual foundation before many more Thai pages are written.

6. **Keep the mobile navigation reminder visible, but do not overbuild it yet.**
   The current mobile nav is acceptable because it does not create page-level overflow. Revisit it when the top-level nav grows, Thai labels get longer, or mobile QA starts feeling cramped.

7. **Continue the next lessons.**
   Switches and Contacts is now a bilingual prototype with a draft-source safety posture. Next content step: build Capacitor and Diode, while keeping Switches out of exact standards/installation claims until a source-review pass.

## What not to do

Avoid these shortcuts:

- Do not create hundreds of empty lesson pages just to look complete.
- Do not bury safety warnings only at the bottom of risky lessons.
- Do not make Thailand-specific legal or standards claims without current verification.
- Do not copy visuals from explainer channels.
- Do not let `latest` dependencies change silently.
- Do not keep adding lesson metadata in five places forever.
- Do not let the mobile header become a second lesson index.

## Definition of reduced risk

The project is safer to scale when:

- every lesson is declared once in a registry;
- every suggestion target points to a real lesson or topic;
- every topic record clearly shows whether it is mapped or published;
- every moderate/high safety lesson has visible warnings and source status;
- Thai terms are consistent and UTF-8-safe;
- dependency upgrades are intentional;
- tests catch missing routes, duplicate IDs, and broken relationships;
- original visuals and source notes are part of the normal production workflow.

This is the project growing a spine: not glamorous, but very useful when the creature gets big.
