# Lesson outlines

This folder holds lesson plans before they become public website pages.

An outline means:

- the lesson has a proposed scope;
- the primary atlas topic and prerequisites are known;
- safety and source-review needs have been identified;
- visual ideas and Thai-context notes have been drafted.

An outline does **not** mean the lesson is published, reviewed, or safe to use as practical instruction.

When an outline becomes a real lesson, keep the outline as historical planning context unless it becomes misleading. The public lesson content should live in:

```text
electrical-atlas-site/src/content/lessons/en/<slug>.mdx
electrical-atlas-site/src/content/lessons/th/<slug>.mdx
```

The registry entry in `electrical-atlas-site/src/lib/lessonRegistry.ts` should show the current truth: `planned`, `outlined`, `prototype`, `review-ready`, `published`, or `revision-needed`.

## Current records

- [Capacitance and Capacitors](capacitor.md) — implemented bilingual `review-ready` scope record; exact deployment passed, while qualified-human, Thai-language, and publication decisions remain separate.
- [Switches and Contacts](switches-contacts.md) — retained production history for the implemented prototype.
