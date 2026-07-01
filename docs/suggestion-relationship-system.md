# Suggestion and relationship system

Electrical Atlas suggestions use two layers:

1. Explicit relationship records.
2. Metadata similarity fallback.

Explicit records live in:

```text
electrical-atlas-site/src/lib/relationships.ts
```

The suggestion engine lives in:

```text
electrical-atlas-site/src/lib/suggestions.ts
```

## Why this exists

The atlas should not only say that two topics are "related." It should say how they are related:

- one topic is a prerequisite for another;
- one topic is the next learning step;
- one topic is a physical mechanism behind another;
- one topic is an application, measurement method, safety link, or failure mode;
- one topic is part of the same component/system family.

This keeps the website useful as it grows from a few lessons into hundreds or thousands of topics.

## Current node references

Each relationship connects a source node to a target node:

```ts
{
  source: { kind: "lesson", id: "resistance" },
  target: { kind: "topic", id: "ea.circuit.law.ohm" },
  type: "mathematical-law",
  weight: 90,
  label: { en: "next practical law" }
}
```

Node kinds:

- `lesson` — a published or planned lesson page, such as `voltage` or `mosfet`.
- `topic` — a canonical atlas topic ID, such as `ea.circuit.law.ohm`.

## Current relationship types

The first supported relation types are:

- `prerequisite`
- `successor`
- `paired-foundation`
- `technical-definition`
- `physical-mechanism`
- `mathematical-law`
- `reciprocal`
- `component`
- `application`
- `measurement`
- `safety`
- `failure-mode`
- `implementation-detail`
- `energy-source`
- `energy-link`
- `material-view`
- `combines-with`
- `layout-practice`

Each type has English and Thai display labels. A relationship can also provide a more specific display label for a particular link.

## How suggestions are chosen

Lesson pages use explicit relationships only.

Topic record pages use:

1. explicit topic-to-topic relationships first;
2. metadata similarity only to fill remaining suggestion slots.

Metadata similarity currently considers:

- same subsection;
- same section;
- same source inventory file;
- same domain;
- same node type;
- shared canonical ID prefix;
- shared words in the topic name and summary.

## Topic traits already available

Generated topic records currently include:

- canonical ID;
- English name;
- summary;
- node type;
- expected depth;
- safety tag;
- domain;
- source inventory file;
- section;
- subsection;
- slug;
- content status.

These are enough for first-pass browsing, but not enough for a full learning graph.

## Next upgrades

Likely next upgrades:

1. Move relationships into a data file that can be generated/exported separately from TypeScript.
2. Add prerequisite and successor fields to the Markdown inventory format.
3. Add relationship validation for duplicate edges and missing lesson IDs.
4. Add visible relation filters, such as "show prerequisites," "show applications," or "show safety links."
5. Add Thai topic labels when each topic enters the publishing pipeline.
