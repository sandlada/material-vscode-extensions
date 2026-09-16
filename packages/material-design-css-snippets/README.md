<div align="center">

![Material Design CSS Snippets](https://raw.githubusercontent.com/sandlada/material-vscode-extensions/main/packages/material-design-css-snippets/images/icon/extension-icon-128.png)

# Material Design CSS Snippets

![Visual Studio Marketplace Last Updated](https://img.shields.io/visual-studio-marketplace/last-updated/sandlada.material-design-css-snippets)
![Visual Studio Marketplace Release Date](https://img.shields.io/visual-studio-marketplace/release-date/sandlada.material-design-css-snippets)
![Visual Studio Marketplace Installs](https://img.shields.io/visual-studio-marketplace/i/sandlada.material-design-css-snippets)
![Visual Studio Marketplace Version (including pre-releases)](https://img.shields.io/visual-studio-marketplace/v/sandlada.material-design-css-snippets)

[Traditional Chinese](./README.TW.md)

</div>

Material Design 3 CSS design token snippets for Visual Studio Code: system colors, palette ramps, plus typescale / typography, shape, motion (easing + duration) and space, sourced from [`@material/web`](https://github.com/material-components/material-web), [`@sandlada/material-design-css`](https://github.com/sandlada/material-design-css) and [`@sandlada/mdk`](https://github.com/sandlada/mdk).

> Pair it with [Material Web Snippets](https://marketplace.visualstudio.com/items?itemName=sandlada.material-web-snippets) for `md-*` component snippets in HTML / JSX / TSX.

## Features

- **895 design tokens, 2685 snippets in 6 groups:** type `--md-` in a CSS file to complete 59 system colors (`--md-sys-color-*`, e.g. `--md-sys-color-primary`, `--md-sys-color-surface-container-highest`), 606 palette ramps (`--md-ref-palette-*`: primary, secondary, tertiary, error, neutral, neutral-variant × tones 0–100), 156 typescale / typeface tokens (`--md-sys-typescale-*`, `--md-ref-typeface-*`), 10 shape corners (`--md-sys-shape-corner-value-*`), 46 motion tokens (18 easing `--md-sys-motion-easing-*` + 28 durations `--md-sys-motion-duration-*`), and 18 space measurements (`--md-sys-measurement-space*`). Each token completes in three forms: `var()` (`var(--md-sys-shape-corner-value-none)`), `var()` with fallback (`var(--md-sys-shape-corner-value-none, 0px)`), and value only (`0px`).
- **Zero code:** snippets-only extension, no activation cost.

## Usage

```css
.my-button {
  background-color: var(--md-sys-color-primary);
  color: var(--md-sys-color-on-primary);
  font-size: var(--md-sys-typescale-headline-small-size, 24px);
}
```

Type `--md-` and pick from the completion list. Colors and palette follow this package's `color-mcu-mapping.css` MCU selection; typescale / shape / motion / space follow `@sandlada/material-design-css` (`variables.css` + tailwind v4 `tw.css`), cross-checked against `@sandlada/mdk`.

Supported languages: `css`.

## Contributing

Snippets are generated from `schema/tokens/` in this package — never edit the generated file by hand.

```sh
npm run generate        # regenerate from schema
npm run generate:check  # fail on drift
npm run verify          # validate generated files
```

## Release Notes / License

See [CHANGELOG.md](./CHANGELOG.md).

[MIT](./LICENSE)
