# Lesson registry plan

This document describes the central lesson registry for Electrical Atlas and preserves the reasoning behind it.

Status: v0.1 is implemented in `electrical-atlas-site/src/lib/lessonRegistry.ts`. It drives lesson suggestions, topic-record availability links, home-page lesson actions, lesson browsing, the status board, lesson maturity/safety/source UI, and validation tests.

The short version: as the site grows, every lesson should be described once in a structured registry, then reused by navigation, suggestions, topic records, tests, status labels, and future tooling.

The registry is not a replacement for lesson content. The lesson body still lives in MDX. The registry is the control table that tells the website what lessons exist, where they are, what atlas topic they teach, what status they have, and what safety/source review state they are in.

## Why this is needed

Electrical Atlas has moved past the "one or two demo pages" stage. It now has:

- bilingual English and Thai lesson routes;
- generated topic records;
- a relationship-based suggestion system;
- topic pages that can point to available lesson pages while showing their actual maturity;
- navigation links;
- tests that verify lesson suggestions and topic IDs;
- safety and Thailand-context notes.

That is healthy, but it creates a maintenance problem. Lesson metadata is currently repeated in multiple places:

- lesson route wrappers under `electrical-atlas-site/src/pages/en/lessons/` and `electrical-atlas-site/src/pages/th/lessons/`;
- lesson labels and summaries in suggestions;
- lesson discovery and homepage actions;
- topic-to-lesson availability links in `electrical-atlas-site/src/components/TopicRecord.astro`;
- expected lesson IDs inside tests;
- roadmap/status notes in Markdown docs.

This duplication is acceptable for a small prototype, but it becomes risky as soon as the project reaches 20, 50, or 100 lessons.

The likely failure modes are:

- adding a lesson in English but forgetting the Thai route;
- updating a title in one place but not another;
- publishing a lesson without connecting its primary atlas topic;
- missing a safety warning or source-review status;
- creating suggestions to a lesson that does not actually have a page;
- confusing route availability with the separate `published` maturity status;
- making future refactors slow because every lesson is wired by hand.

The registry reduces those risks by making each lesson a single structured object.

## What the registry should own

The registry should own stable lesson metadata, not the lesson body.

It should answer questions like:

- What lessons exist?
- Which lessons are planned, prototypes, review-ready, or published?
- What is the canonical lesson slug?
- What is the stable lesson ID?
- What is the primary atlas topic?
- Which English and Thai pages exist?
- What is the natural title and summary in each language?
- What safety level does the lesson have?
- Does it need Thailand-specific standards verification?
- Which visual/demo component is associated with it?
- Which topics are covered by an available lesson page?

It should not contain long lesson text, equations, diagrams, or interactive demo implementation. Those stay in MDX and component files.

## Proposed location

Current location:

```text
electrical-atlas-site/src/lib/lessonRegistry.ts
```

Later, if the data grows too large for TypeScript, it can move to JSON, YAML, or generated data. For the next stage, TypeScript is fine because it gives immediate type checking and easy imports from Astro components and tests.

## Proposed data model

The exact names can change during implementation, but the registry should contain fields like this:

```ts
export type Locale = "en" | "th";

export type LessonStatus =
  | "candidate"
  | "planned"
  | "outlined"
  | "prototype"
  | "review-ready"
  | "published"
  | "revision-needed";

export type SafetyLevel = "none" | "low" | "moderate" | "high";

export type SourceStatus =
  | "not-needed"
  | "needed"
  | "draft"
  | "verified"
  | "needs-update";

export interface LessonRegistryEntry {
  slug: string;
  lessonId: string;
  primaryTopicId: string;
  coveredTopicIds: string[];
  status: LessonStatus;
  safetyLevel: SafetyLevel;
  sourceStatus: SourceStatus;
  requiresThailandContext: boolean;
  order: number;
  navGroup: "foundation" | "component" | "circuit" | "power" | "safety" | "application";
  titles: Record<Locale, string>;
  summaries: Record<Locale, string>;
  paths: Record<Locale, string>;
  hasPage: Record<Locale, boolean>;
  reviewRecord?: string;
  demoComponent?: string;
}
```

Example entry:

```ts
{
  slug: "battery",
  lessonId: "ea.lesson.battery.v0.1",
  primaryTopicId: "ea.storage.electrochemistry",
  coveredTopicIds: [
    "ea.storage.electrochemistry",
    "ea.storage.cell.metric"
  ],
  status: "prototype",
  safetyLevel: "moderate",
  sourceStatus: "needed",
  requiresThailandContext: true,
  order: 9,
  navGroup: "power",
  titles: {
    en: "Battery",
    th: "แบตเตอรี่"
  },
  summaries: {
    en: "Chemical energy storage, terminal voltage, capacity, watt-hours, internal resistance, C-rate, and safety.",
    th: "การเก็บพลังงานเคมี แรงดันปลายขั้ว ความจุ watt-hour ความต้านทานภายใน C-rate และความปลอดภัย"
  },
  paths: {
    en: "/en/lessons/battery/",
    th: "/th/lessons/battery/"
  },
  hasPage: {
    en: true,
    th: true
  },
  demoComponent: "BatteryDemo"
}
```

## How the site should use it

### Navigation

`BaseLayout.astro` should read lesson entries from the registry instead of hard-coding every lesson path.

The registry can expose helpers such as:

```ts
getNavigationLessons(locale)
getFirstLessonPath(locale)
getLessonPath(slug, locale)
```

This keeps the header from growing into a long list of manual constants.

### Homepage cards

The English and Thai homepages should use registry entries for lesson cards. A new lesson can then appear on the homepage by changing one registry field rather than editing two homepages by hand.

Useful registry fields:

- `order`
- `navGroup`
- `titles`
- `summaries`
- `paths`
- `status`

### Suggestions

The suggestion engine should still use `relationships.ts` to decide what is related to what.

However, when a relationship points to a lesson, the display label, summary, and route should come from the registry instead of a separate `lessonLabels` object.

This gives us one source of truth:

- relationships decide the connection;
- registry decides the lesson metadata.

### Topic records

`TopicRecord.astro` derives topic-to-lesson links from registry coverage rather than a manual path map.

The registry can expose:

```ts
getAvailableLessonForCoveredTopic(topicId, locale)
getLessonsCoveringTopic(topicId)
```

This matters because some lessons cover more than one atlas topic. For example:

- "Resistance and Conductance" covers both resistance and conductance;
- "Electrical Power and Energy" covers power and energy;
- "Battery" covers electrochemistry and cell metrics.

The registry should make that coverage explicit.

### Status labels and safety warnings

Lesson pages should be able to show status and safety information from the registry.

Examples:

- `prototype`: show that the lesson is usable but not formally reviewed yet;
- `review-ready`: ready for technical review;
- `published`: reviewed public-facing version;
- `moderate` or `high` safety level: show stronger safety notes before practical examples;
- `sourceStatus: "needed"`: avoid presenting standards/regulatory details as final.

This is especially important for Thailand-relevant topics. A lesson can say it requires Thailand context without pretending that Thai standards have already been verified.

### Tests

The registry should make tests more useful. Instead of manually repeating lesson IDs in tests, tests can check the registry directly.

Suggested tests:

- every registry slug has a unique value;
- every `lessonId` is unique;
- every `primaryTopicId` exists in the generated atlas topics;
- every `coveredTopicIds` entry exists in the generated atlas topics;
- every lesson with `hasPage.en === true` has an English route wrapper;
- every lesson with `hasPage.th === true` has a Thai route wrapper;
- every lesson with `status === "published"` has `sourceStatus === "verified"` or `sourceStatus === "not-needed"`;
- every `moderate` or `high` safety lesson has visible safety notes;
- every relationship pointing to a lesson points to a real registry slug;
- every available topic-to-lesson link is derived from registry coverage;
- route availability does not imply `status: published`.

## Implementation path

The safest path is to migrate gradually. Do not rewrite everything at once.

### Phase 1: Create the registry

The original Phase 1 implementation added `lessonRegistry.ts` for these ten prototype lessons:

1. What Is Electricity?
2. Voltage
3. Electric Current
4. Resistance and Conductance
5. Ohm's Law
6. Series and Parallel Circuits
7. Electrical Power and Energy
8. Battery
9. MOSFET
10. Switches and Contacts

Add roadmap entries for the immediate next lessons if useful:

- Capacitor — `planned`
- Diode — `planned`

Planned and outlined lessons should have `hasPage.en: false` and `hasPage.th: false` until real content and route wrappers exist. Switches and Contacts is now a bilingual `prototype` with real routes, content, an interactive demo, and draft source status.

Current status: the registry now represents eleven available lessons—three `review-ready` and eight `prototype`—plus planned Capacitor and Diode entries. Electric Charge was inserted after the gateway and promoted to `review-ready` on 2026-07-20. The Switches and Contacts planning outline remains in `docs/lesson-outlines/switches-contacts.md` as production history.

### Phase 2: Replace lesson labels in suggestions

Remove the duplicated `lessonLabels` object from `suggestions.ts`.

When `getLessonSuggestions()` sees a relationship target like:

```ts
{ kind: "lesson", id: "battery" }
```

it should look up `battery` in the registry and build the suggestion card from the registry entry.

Current status: completed. `suggestions.ts` now reads lesson target title, summary, and route metadata from the registry.

### Phase 3: Replace manual topic-to-lesson mapping

Replace the manual lesson-path object in `TopicRecord.astro`.

Use `coveredTopicIds` and locale page availability from the registry to decide whether a topic has a lesson link.

This makes topic records more honest and easier to maintain.

Current status: completed. `TopicRecord.astro` now derives available-lesson links from registry `coveredTopicIds`, and displays registry maturity separately.

### Phase 4: Replace navigation and homepage cards

Use the registry for:

- header lesson links;
- homepage lesson buttons/cards;
- guide page examples if appropriate.

The goal is not to make the UI generic and lifeless. The goal is to avoid duplicate lesson metadata. Custom page layout can remain custom.

Current status: completed for homepage lesson actions, lesson browsing, and the status board. The root route is deliberately a minimal language gateway rather than a second lesson catalog.

### Phase 5: Add registry validation tests

Add a test file such as:

```text
electrical-atlas-site/src/tests/lessonRegistry.test.ts
```

The first version should focus on preventing broken routes, missing topic IDs, duplicate slugs, and invalid relationship targets.

Current status: first validation test file added as `electrical-atlas-site/src/tests/lessonRegistry.test.ts`.

### Phase 6: Add status and safety display

Once the registry is trusted, use it to show lesson status and safety/source-review hints in `LessonShell.astro`.

This should be gentle for foundation lessons and stronger for risky topics.

Current status: completed. Lesson pages, the lesson browser, and the status board display registry maturity, safety, source state, and Thailand-context requirements.

## Rules for adding a new lesson after the registry exists

When adding a new lesson, update the registry first.

Minimum required fields:

- `slug`
- `lessonId`
- `primaryTopicId`
- `coveredTopicIds`
- `status`
- `safetyLevel`
- `sourceStatus`
- `requiresThailandContext`
- `order`
- `navGroup`
- `titles`
- `summaries`
- `paths`
- `hasPage`
- `reviewRecord` when a versioned review record exists

Then add or update:

- English MDX;
- Thai MDX or clear Thai-pending state;
- route wrappers;
- relationships;
- demo component if needed;
- tests;
- roadmap/status docs if the lesson changes priority.

This order makes the registry the project memory for the lesson.

## Safety and Thailand-specific handling

The registry should not claim that a lesson is legally or technically approved. It should only record review state.

For Thailand-relevant topics, use fields like:

```ts
requiresThailandContext: true
sourceStatus: "needed"
```

until the current source set has been checked.

Relevant source families may include:

- TISI/TIS;
- Engineering Institute of Thailand (EIT);
- Metropolitan Electricity Authority (MEA);
- Provincial Electricity Authority (PEA);
- Energy Regulatory Commission (ERC);
- National Broadcasting and Telecommunications Commission (NBTC);
- National Institute of Metrology Thailand (NIMT);
- IEC, IEEE, ISO, and other international standards where adopted or referenced.

The registry should help prevent accidental overclaiming. A high-risk lesson with unverified sources should be visibly marked as prototype or review-needed.

## Relationship to the atlas taxonomy

The atlas taxonomy answers:

- What knowledge node exists?
- Where does it belong?
- What type of thing is it?
- What depth and safety level may it need?

The lesson registry answers:

- Which of those nodes currently has an actual lesson?
- Which lesson covers which topic IDs?
- Which language routes exist?
- What review/publishing state is the lesson in?

These are connected but not identical.

One atlas topic can have no lesson yet. One lesson can cover multiple atlas topics. One topic can later have several lessons at different depths.

## Relationship to the suggestion graph

The registry should not replace the suggestion graph.

The relationship graph answers:

- Why should this page suggest that page?
- Is the target a prerequisite, successor, application, component, safety topic, or failure mode?

The registry answers:

- What title, summary, route, status, and safety metadata should be displayed for a lesson target?

Keeping these separate avoids mixing two different kinds of knowledge.

## Acceptance criteria

The first registry implementation is successful when:

- the current eleven available lessons and two planned lessons are represented in one registry, with their distinct maturity states preserved;
- suggestion lesson cards use registry metadata;
- topic records derive lesson availability links from registry coverage and show maturity separately;
- tests fail if a relationship points to a missing lesson slug;
- tests fail if a lesson covers a missing atlas topic ID;
- tests fail if a page is marked as existing but its route wrapper is missing;
- planned lessons can exist in the registry without creating empty lesson pages;
- safety/source status is visible in lesson and registry UI.

## Long-term direction

As Electrical Atlas grows, the registry can become the bridge between Markdown, generated pages, and a future database.

Possible future upgrades:

- move registry data to JSON or YAML for easier editing;
- generate route wrappers from the registry;
- generate lesson index pages by domain, component type, safety level, and status;
- add Thai glossary links per lesson;
- keep detailed source/reviewer metadata in versioned `docs/lesson-reviews/` records and store only the optional registry pointer;
- add revision history per lesson;
- support multiple lesson depths for the same topic;
- export lesson metadata for search, sitemap, or external tools.

The important principle is simple:

Each lesson should be declared once, then reused everywhere.
