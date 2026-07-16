# Electrical Atlas v0.1 — What Is Electricity?

## Summary

Build a public bilingual gateway explaining electricity from atomic charge to a working circuit. The battery-and-lamp example becomes one case study rather than the entire lesson.

The page will remain approachable while offering an optional technical track reaching semiconductor concepts, Maxwell's equations, charge continuity, and electromagnetic energy transfer.

## Knowledge structure

- Organize content as a graph with five public-facing unit types: **concept, phenomenon, component, system, and application**.
- Give each unit typed relationships such as prerequisite, part-of, explains, used-in, and related-to.
- Begin with six reusable knowledge units embedded in the gateway: charge, electric field, voltage, materials, current, and electrical energy.
- Give every unit a stable ID, bilingual title, definition, physical mechanism, equations, misconceptions, visuals, prerequisites, related units, review status, and references.
- Create standalone pages only when their content is complete; never publish empty encyclopedia entries.
- Make MOSFET the first major component module after the foundational electricity cluster.

## First interactive journey

1. Define electricity as phenomena involving electric charge and electromagnetic fields—not a substance flowing through wires.
2. Introduce matter, elementary charge, charge conservation, ions, and charge carriers.
3. Visualize forces and electric fields, followed by potential energy and voltage.
4. Compare conductors, insulators, semiconductors, electrolytes, and plasmas.
5. Explain current, conventional-current direction, electron drift, mobility, resistance, and charge continuity.
6. Close a battery–switch–lamp circuit and show how the field establishes throughout the circuit, charges drift, and energy reaches the lamp.
7. Introduce static electricity, DC, AC, magnetism, induction, and the wider subject map.

Use 2D SVG for fields, equations, graphs, and circuit causality. Use one lazy-loaded 3D material-lattice viewer where spatial structure helps, explicitly marked as simplified and not to scale.

The optional technical track will introduce equations including \(q=ne\), Coulomb's law, \(\mathbf{E}=-\nabla V\), \(I=dq/dt\), \(\mathbf{J}=\sigma\mathbf{E}\), charge continuity, power, Maxwell's equations, and the Poynting vector.

## Implementation

- Use Astro, TypeScript, MDX, and React islands.
- Provide `/en/...` and `/th/...` routes with exact-page language switching and remembered preference.
- Use natural Thai prose with the English technical term on first use.
- Implement interactive physics as tested pure TypeScript functions, separate from rendering and animation.
- Provide guided and technical modes, keyboard controls, pause controls, reduced-motion support, numerical alternatives, and descriptive visual transcripts.
- Apply the modern technical-studio design language and deploy the static site through Cloudflare Pages.
- Exclude accounts, CMS, analytics, saved progress, and server APIs from v0.1.

## Acceptance tests

- A reader can distinguish charge, field, voltage, current, resistance, power, and energy.
- The circuit visualization does not imply that electrons travel from the battery to the lamp at near-light speed or that electrical energy is carried only inside the wire.
- English and Thai content have matching structure, equations, visuals, and references.
- Knowledge relationships and bilingual counterparts are validated during the build.
- Physics calculations, unit conversions, field direction, current, and power are unit-tested.
- The experience works on mobile, desktop, keyboard, screen readers, reduced-motion settings, and without the 3D viewer.
- Lighthouse performance, accessibility, SEO, and best-practice scores target at least 90.
- Claims are supported by authoritative textbooks, standards, physical-property references, or peer-reviewed sources; every simplification is disclosed.

## Assumptions

- Working title: **Electrical Atlas**.
- The gateway provides a complete conceptual answer but does not exhaust every branch on one page.
- “Research-style depth” means rigorous derivations, citations, assumptions, and model limitations—not original research.
- Visual inspiration may come from RealPars and The Engineering Mindset, but all text, graphics, models, and branding will be original.

## Implementation alignment note — 2026-07-16

The approved plan above remains the durable statement of intent. The implemented gateway now covers the planned beginner chain from charge and materials through fields, potential difference, current, resistance, power, energy, the battery–switch–lamp case, static electricity, DC, AC, magnetism, induction, and the wider atlas. The technical mode defines the main symbols, units, equation scopes, constitutive assumptions, charge continuity, Maxwell-level framing, and the Poynting vector.

Review found that the original percentage-based lamp animation mixed three different processes: mechanical contact motion, electromagnetic propagation, and steady-state current. It could therefore display values that looked like one circuit state while violating `I = V/R`. The v0.1 interaction now compares only two physically coherent endpoints—open circuit and idealized closed steady DC. It explicitly states that switching transients, propagation geometry, cold-filament inrush, and thermal warm-up are not simulated. Future visuals for those mechanisms must use separate models and time scales.

The present 2D SVG is the reviewed v0.1 visual. The proposed 3D material-lattice viewer remains deliberately deferred until it adds teaching value that cannot be delivered by a lighter diagram. The lesson works without any 3D asset, so this deferral does not create an empty public page or block the gateway.

Two earlier implementation choices have been superseded by later project decisions without changing the educational purpose:

- the site now uses the restrained long-reading theme documented in the current design system rather than the original technical-studio presentation;
- production deployment uses Vercel rather than Cloudflare Pages.

The current English and prepared Thai revisions are bound to [the versioned lesson review record](../docs/lesson-reviews/what-is-electricity-v0.1.md). Exact claims are mapped to authoritative sources there. This conceptual lesson does not assert a Thai installation code, standard number, utility rule, or legal threshold, so no Thai standards approval is required for review preparation. Project-owner Thai-language and final-publication approval remain separate and must not be inferred.
