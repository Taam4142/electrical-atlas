# Engineering Notebook theme

Status: v0.1 proposal and implementation direction  
Date: 2026-07-02

## Why change the theme

The first website theme made Electrical Atlas feel energetic and technical, but it leaned too far toward a neon sci-fi dashboard. That is good for a demo impression, but not ideal for long study sessions.

Electrical Atlas should feel like a place where someone can read for an hour, compare concepts, follow a learning path, and come back later without visual fatigue. The theme should support focus before spectacle.

The new direction is **Engineering Notebook**:

- calm enough for long learning sessions;
- clear enough for beginners;
- technical enough to feel trustworthy;
- visual enough to keep the circuit explanations alive;
- conservative enough for safety and standards content.

## Design principles

### 1. Learning first

The page should read like a high-quality engineering reference, not a product landing page. Typography, spacing, contrast, and hierarchy matter more than glow effects.

### 2. Diagrams stay expressive, UI becomes quieter

The interactive diagrams can still use color to show fields, current, heat, risk, or state. Surrounding UI should be calmer so the diagram remains the focus.

### 3. Light default, optional dark later

The default theme should be light: warm paper background, dark readable text, restrained borders, and subtle shadows. A dark mode can come later as a deliberate second theme, not as the only identity.

### 4. Color means something

Use color intentionally:

- blue: electricity, links, primary actions;
- green: successful flow or normal state;
- amber/copper: energy, notes, practical emphasis;
- red: danger, heat, arc, safety risk;
- neutral ink: most reading text and UI.

### 5. Thailand and safety content must feel serious

Warnings, standards notes, and Thailand-specific source-review language should look sober and credible. Avoid making safety content look like decorative flair.

## v0.1 tokens

| Token | Role | Direction |
| --- | --- | --- |
| `--bg` | page background | warm off-white paper |
| `--bg-soft` | subtle section background | pale blue-gray |
| `--panel` | cards and content surfaces | near-white paper |
| `--panel-solid` | stronger cards | white |
| `--line` | borders and dividers | low-contrast slate |
| `--text` | primary reading text | dark navy ink |
| `--muted` | secondary text | slate gray |
| `--cyan` | primary electrical blue | calm technical blue |
| `--green` | normal/flow/success | muted engineering green |
| `--yellow` | energy/note/copper | warm amber |
| `--danger` | heat/safety/risk | restrained red |
| `--shadow` | elevation | small soft paper shadow |

## Implementation approach

Do not rewrite every component at once.

1. Change the base tokens from dark neon to light notebook.
2. Simplify the body background and grid.
3. Add a late CSS override block for repeated component surfaces, links, controls, cards, diagrams, and meters.
4. Keep existing lesson logic, routing, registry, and content untouched.
5. Verify with tests/build.
6. Later, inspect pages visually and tune individual diagrams where color is still too intense.

## What remains intentionally unresolved

- Exact typography scale may need tuning after browser review.
- Some SVG demos still use bright internal gradients because they communicate invisible motion; these should be softened lesson by lesson.
- A true dark mode is not included in this step.
- Print-friendly lesson pages are a future improvement.
- Accessibility contrast should be audited after the first visual review, especially for Thai text and muted labels.

## Acceptance checks for this theme direction

- The page no longer feels like a neon dashboard.
- Long text sections are easier to read.
- Cards and controls look like learning tools, not glowing panels.
- Safety notes feel serious.
- Interactive diagrams still have enough color to explain state changes.
- The change can be reverted or iterated without touching lesson content.
