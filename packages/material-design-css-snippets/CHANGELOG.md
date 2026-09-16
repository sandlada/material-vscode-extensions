# Change Log

All notable changes to the "material-design-css-snippets" extension will be documented in this file.

## [0.0.2]

- Round-1 data audit passed: every schema token name + fallback mechanically cross-checked against its source (mapping file both blocks in order; material-design-css `variables.css` both directions; 6 palette families × tones 0–100 validated; no duplicates; all 2685 generated entries verified form by form).
- New palette group: 606 `--md-ref-palette-*` ramp tokens from `color-mcu-mapping.css`, same three snippet forms (`var(--token)`, `var(--token, fallback)`, value only).
- Color fallbacks re-synced to the updated `color-mcu-mapping.css` (53 values refreshed; 6 fixed key-colors replaced by 6 `*-palette-key-color` tokens).

- Schema split: `schema/components/` (per-family component schemas) + `schema/tokens/` (per-group token files exported via `index.ts`).
- 289 design tokens → 867 snippets, generated from `schema/tokens/`: each token in three forms — `var(--token)`, `var(--token, fallback)`, value only. Colors (59 `--md-sys-color-*`) take MCU-selected fallbacks from `color-mcu-mapping.css` (fixed hex key colors, `light-dark()` rest); typescale / typeface (156), shape (10), motion (46), space (18) as before. Sources: `@sandlada/material-design-css` (`variables.css` + tailwind v4 `tw.css`), cross-checked against `@sandlada/mdk`; palette excluded.

## [0.0.1]

- First release as a standalone extension, split out of `material-web-vscode-snippets` (monorepo: `packages/material-design-css-snippets`, independent versioning).
- 59 `--md-sys-color-*` token snippets generated from `schema/css-tokens.ts`, in sync with the installed `@material/web` version.
