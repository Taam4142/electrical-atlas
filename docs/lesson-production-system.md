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

Use this as the normal authoring pipeline. A lesson can pause at any stage, but its registry status must honestly reflect where it is.

| Stage | Registry status | Main artifact | Exit gate |
| --- | --- | --- | --- |
| 0. Intake | `candidate` | candidate note or roadmap row | Topic has a reason to exist and a likely primary atlas node. |
| 1. Scope | `planned` | registry entry | Slug, lesson ID, primary topic, prerequisites, safety level, source status, and language routes are known. |
| 2. Outline | `outlined` | `docs/lesson-outlines/<slug>.md` | Section plan, visual plan, source plan, safety boundaries, Thai notes, and next-topic links are drafted. |
| 3. Draft | `outlined` or `prototype` | English MDX draft | Physical intuition, core explanation, equations, mistakes, failure modes, and source notes are written. |
| 4. Localize | `prototype` | Thai MDX draft | Thai wording is natural, not a stiff line-by-line translation, and Thai-context notes are explicit. |
| 5. Implement | `prototype` | route wrappers, visuals, relationships | Public routes exist only for languages that have real content. Suggestions come from relationships/registry, not manual lists. |
| 6. Review prep | `review-ready` | completed checklist and versioned lesson-review record | Technical, visual, safety, source, Thai, and accessibility evidence is complete enough for the named approvers. |
| 7. Publish | `published` | deployed lesson | Review is complete, source-sensitive claims are verified, tests/build pass, and the live page was checked. |
| 8. Maintain | `revision-needed` or `needs-update` source status | issue/revision note | Corrections or source refreshes are tracked before republishing. |

Detailed workflow:

1. Choose the lesson from the roadmap or taxonomy.
2. Assign the primary atlas node and secondary cross-links.
3. Define the learner level, prerequisites, non-goals, and publication boundary.
4. Create the outline using [lesson-template.mdx](lesson-template.mdx), saved under `docs/lesson-outlines/` until it becomes real site content.
5. Draft the physical intuition first.
6. Add structure, operating modes, equations, limitations, practical examples, common mistakes, and failure modes.
7. Add visual requirements: diagram, interactive, animation, photo, table, or none.
8. Add safety notes and standards/source notes where relevant.
9. Implement the English MDX lesson.
10. Implement the Thai MDX lesson or keep the Thai page unpublic until it is ready.
11. Add or update the lesson registry entry, route wrappers, relationship records, and any visual/test files.
12. Run tests and build.
13. Review in browser, including mobile width and language switch.
14. Deploy the review-ready revision, inspect the English and Thai pages, and record the result.
15. Obtain the project owner's lesson-level and Thai-language decisions, then mark `published` only if every required gate passes.
16. Commit and push the completed decision record through GitHub/Vercel.

Do not create an empty public route only because a lesson is planned or outlined. The registry can show roadmap intent without implying publication readiness.

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

Versioned claim evidence and approval decisions live outside the registry:

```text
docs/lesson-reviews/<slug>-v<major>.<minor>.md
```

The registry stores only the optional `reviewRecord` pointer. The record schema and lifecycle invariants are documented in [lesson-reviews/README.md](lesson-reviews/README.md).

The registry plan is documented in [lesson-registry-plan.md](lesson-registry-plan.md). It explains why lesson titles, routes, primary topic IDs, safety status, language availability, and topic coverage should be declared once and reused by navigation, suggestions, topic records, and tests.

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

Active implementation rule:

- lesson metadata lives in `electrical-atlas-site/src/lib/lessonRegistry.ts`;
- lesson-to-topic and lesson-to-lesson relationships live in `electrical-atlas-site/src/lib/relationships.ts`;
- the deprecated manual suggestion list is historical only and must not be used for new suggestions.

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

Source-review details live in [lesson-quality-checklist.md](lesson-quality-checklist.md). A source family note is not the same as a verified claim. Before a lesson becomes `review-ready` or `published`, every safety, standard, legal/regulatory, installation, grid, medical, RF, or high-energy claim must be traced to an authoritative current source.

Approval ownership, qualified-review boundaries, and the distinction between review preparation and final publication are defined in [publication-governance.md](publication-governance.md). Preserve exact claim evidence and lesson-level decisions under [lesson-reviews/](lesson-reviews/README.md). Automated checks and assistant review may prepare a lesson for approval, but they do not grant the project owner's final approval.

## Definition of done for a lesson

A lesson is done enough for an available prototype page when:

- English MDX exists.
- Thai MDX exists or Thai is explicitly marked pending.
- A page wrapper exists for each language marked available.
- Primary atlas node is known.
- At least 3 suggested next topics are meaningful.
- Safety relevance has been considered.
- `npm test` passes.
- `npm run build:production` passes from the repository root.
- The live page is checked after deployment.

Use [lesson-quality-checklist.md](lesson-quality-checklist.md) before publishing.

## Outline artifact requirements

Every planned lesson should get an outline before implementation. The outline is allowed to be rough, but it must answer:

- What is the learner supposed to understand after this lesson?
- What is explicitly out of scope?
- Which atlas topic is primary, and which topics are covered?
- Which previous lessons are prerequisites?
- Which visual explanation would make the concept easier?
- What can be safely demonstrated as a conceptual low-voltage model?
- What would become unsafe, standards-sensitive, or Thailand-context-sensitive?
- Which source families should be checked before review?
- Which next lessons or topic records should the suggestion system connect to?
