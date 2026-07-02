# Lesson production system

This document defines how Electrical Atlas lessons should be planned, written, reviewed, and published.

The goal is not to make every page identical. The goal is to make every lesson feel like it belongs to the same learning universe: clear physical intuition, honest technical depth, visual explanation, bilingual structure, and useful next steps.

## Lesson lifecycle

Use these statuses consistently:

| Status | Meaning |
| --- | --- |
| `candidate` | Topic is worth a lesson, but not scheduled yet. |
| `planned` | Lesson has a target scope, prerequisites, and primary atlas topic. |
| `outlined` | Lesson sections and visual ideas are drafted. |
| `prototype` | Lesson is implemented in the site, but still needs review. |
| `review-ready` | Content, visuals, links, and safety notes are complete enough for review. |
| `published` | Public-facing version is approved. |
| `revision-needed` | Published or prototype content needs correction, expansion, or rework. |

## Production workflow

1. Choose the lesson from the roadmap or taxonomy.
2. Assign the primary atlas node and secondary cross-links.
3. Define the learner level and prerequisites.
4. Create the English lesson outline.
5. Draft the physical intuition first.
6. Add structure, operating modes, equations, limitations, and practical examples.
7. Add visual requirements: diagram, interactive, animation, photo, table, or none.
8. Add safety notes and standards/source notes where relevant.
9. Implement the English MDX lesson.
10. Implement the Thai MDX lesson or mark Thai as pending.
11. Add or update the lesson registry entry, route wrappers, suggestions, and navigation links.
12. Run tests and build.
13. Review in browser.
14. Publish through GitHub/Vercel.

## Standard lesson shape

Most lessons should contain these blocks, in this order unless the topic has a good reason to differ:

1. Hook: what this thing is in one sentence.
2. Why it matters.
3. Where you see it in real life.
4. What it is made of, or what quantities/objects are involved.
5. Physical intuition: what is happening in the real world.
6. Step-by-step operation.
7. Symbols and equations.
8. Practical design/use notes.
9. Common mistakes and misconceptions.
10. Failure modes or limitations.
11. Safety notes.
12. Standards/source notes.
13. Connections to other topics.
14. Suggested next lessons/topics.

Not every lesson needs heavy math. But every lesson should clearly state when it is simplifying.

## Lesson source model

For a normal lesson, expect these files:

```text
electrical-atlas-site/src/content/lessons/en/<slug>.mdx
electrical-atlas-site/src/content/lessons/th/<slug>.mdx
electrical-atlas-site/src/pages/en/lessons/<slug>.astro
electrical-atlas-site/src/pages/th/lessons/<slug>.astro
```

If the lesson needs an interactive visual, add a component such as:

```text
electrical-atlas-site/src/components/<TopicName>Demo.tsx
```

If the lesson needs formulas, calculations, or reusable logic, add a small library module and tests:

```text
electrical-atlas-site/src/lib/<topic>.ts
electrical-atlas-site/src/tests/<topic>.test.ts
```

Stable lesson metadata is centralized in the active lesson registry:

```text
electrical-atlas-site/src/lib/lessonRegistry.ts
```

The registry plan is documented in [lesson-registry-plan.md](lesson-registry-plan.md). It explains why lesson titles, routes, primary topic IDs, safety status, language availability, and published-topic coverage should be declared once and reused by navigation, suggestions, topic records, and tests.

## English and Thai language workflow

English is the canonical drafting language for now because it keeps research, terminology, code, and source alignment simpler.

Thai is still a first-class publishing language. Thai pages should not merely be machine translations. They should:

- use natural Thai explanations;
- keep English technical terms where Thai learners commonly expect them;
- add Thai terminology where useful;
- avoid awkward literal translation of engineering phrases;
- flag Thailand-specific safety, installation, grid, building, or regulatory context.

For Thailand-related standards and practice, verify current sources before making authoritative claims. Useful source families include Thai Industrial Standards Institute (TISI), Engineering Institute of Thailand (EIT), Metropolitan Electricity Authority (MEA), Provincial Electricity Authority (PEA), Energy Regulatory Commission (ERC), and relevant IEC/IEEE/ISO families when adopted or referenced locally.

Do not hard-code a Thai standard number, edition, or legal requirement unless it has been checked against an authoritative current source.

## Visual explanation rules

Visuals should teach, not decorate.

Preferred visual types:

- simple field/flow diagrams;
- layered structure diagrams;
- cause-and-effect animations;
- interactive sliders for one or two variables;
- side-by-side "mental model vs real model" comparisons;
- practical circuit diagrams with current paths and voltage references.

Style direction:

- clean engineering-studio look;
- original diagrams and wording;
- inspired by strong explainer channels, but not copied from them;
- use consistent colors for voltage, current, field, heat, signal, danger, and reference/ground.

## Relationship rules

Every lesson should declare or imply:

- primary atlas node;
- prerequisite lessons;
- successor lessons;
- similar lessons;
- components/systems where it is used;
- related safety topics if relevant.

The website can then suggest better next lessons over time.

## Safety and standards rules

Safety notes are required when a lesson touches:

- mains electricity;
- batteries and energy storage;
- high voltage;
- high current;
- rotating machines;
- heat/fire;
- charged capacitors;
- RF exposure;
- medical equipment;
- vehicles, buildings, industrial controls, or grid systems.

Use clear wording:

- "Conceptual demo" for simplified visuals.
- "Do not try this on mains power" where needed.
- "Check local regulations and qualified professionals" for installation topics.
- "Thailand context requires current Thai standard verification" when relevant.

## Definition of done for a lesson

A lesson is done enough for prototype publication when:

- English MDX exists.
- Thai MDX exists or Thai is explicitly marked pending.
- Page wrapper exists for each published language.
- Primary atlas node is known.
- At least 3 suggested next topics are meaningful.
- Safety relevance has been considered.
- `npm test` passes.
- `npm run build` passes.
- The live page is checked after deployment.

Use [lesson-quality-checklist.md](lesson-quality-checklist.md) before publishing.
