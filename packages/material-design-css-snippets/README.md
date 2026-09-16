<div align="center">

![Material Design CSS Snippets](https://raw.githubusercontent.com/sandlada/material-vscode-extensions/main/packages/material-design-css-snippets/images/icon/extension-icon-128.png)

# Material Design CSS Snippets

![Visual Studio Marketplace Last Updated](https://img.shields.io/visual-studio-marketplace/last-updated/sandlada.material-design-css-snippets)
![Visual Studio Marketplace Release Date](https://img.shields.io/visual-studio-marketplace/release-date/sandlada.material-design-css-snippets)
![Visual Studio Marketplace Installs](https://img.shields.io/visual-studio-marketplace/i/sandlada.material-design-css-snippets)
![Visual Studio Marketplace Version (including pre-releases)](https://img.shields.io/visual-studio-marketplace/v/sandlada.material-design-css-snippets)

</div>

Material Design 3 CSS design token snippets for Visual Studio Code: system colors, palette ramps, plus typescale / typography, shape, motion (easing + duration) and space, sourced from [`@material/web`](https://github.com/material-components/material-web), [`@sandlada/material-design-css`](https://github.com/sandlada/material-design-css) and [`@sandlada/mdk`](https://github.com/sandlada/mdk).

> Pair it with [Material Web Snippets](https://marketplace.visualstudio.com/items?itemName=sandlada.material-web-snippets) for `md-*` component snippets in HTML / JSX / TSX.
> 搭配 [Material Web Snippets](https://marketplace.visualstudio.com/items?itemName=sandlada.material-web-snippets) 可在 HTML / JSX / TSX 中使用 `md-*` 元件 snippets。

## Features 功能

- **895 design tokens, 2685 snippets in 6 groups:** type `--md-` in a CSS file to complete 59 system colors (`--md-sys-color-*`, e.g. `--md-sys-color-primary`, `--md-sys-color-surface-container-highest`), 606 palette ramps (`--md-ref-palette-*`: primary, secondary, tertiary, error, neutral, neutral-variant × tones 0–100), 156 typescale / typeface tokens (`--md-sys-typescale-*`, `--md-ref-typeface-*`), 10 shape corners (`--md-sys-shape-corner-value-*`), 46 motion tokens (18 easing `--md-sys-motion-easing-*` + 28 durations `--md-sys-motion-duration-*`), and 18 space measurements (`--md-sys-measurement-space*`). Each token completes in three forms: `var()` (`var(--md-sys-shape-corner-value-none)`), `var()` with fallback (`var(--md-sys-shape-corner-value-none, 0px)`), and value only (`0px`).
  在 CSS 檔輸入 `--md-` 即可補全 6 大類共 895 個設計 token（2685 條 snippets）：59 個 system color、606 個 palette（6 家族 × 0–100 階）、156 個 typescale／typeface、10 個 shape、46 個 motion（18 easing＋28 duration）、18 個 space。每個 token 皆有三種形式：`var(--token)`、`var(--token, fallback)`、只取值。
- **Zero code:** snippets-only extension, no activation cost.
  純 snippets 擴展，無程式碼、無啟動成本。

## Usage 用法

```css
.my-button {
  background-color: var(--md-sys-color-primary);
  color: var(--md-sys-color-on-primary);
  font-size: var(--md-sys-typescale-headline-small-size, 24px);
}
```

Type `--md-` and pick from the completion list. Colors and palette follow this package's `color-mcu-mapping.css` MCU selection; typescale / shape / motion / space follow `@sandlada/material-design-css` (`variables.css` + tailwind v4 `tw.css`), cross-checked against `@sandlada/mdk`.
輸入 `--md-` 再從補全清單挑選；color 與 palette 以本包 `color-mcu-mapping.css` 的 MCU 選取值為準，typescale／shape／motion／space 以 `@sandlada/material-design-css` 為準（另以 `@sandlada/mdk` 交叉核對）。

Supported languages 支援的語言：`css`.

## Contributing 參與貢獻

Snippets are generated from `schema/tokens/` in this package — never edit the generated file by hand. Snippets 由本包的 `schema/tokens/` 產生，請勿手改產出檔。

```sh
npm run generate        # regenerate from schema 重新產生
npm run generate:check  # fail on drift 有漂移即報錯
npm run verify          # validate generated files 驗證產出檔
```

## Release Notes / License 更新日誌／授權

See [CHANGELOG.md](./CHANGELOG.md). 詳見 [CHANGELOG.md](./CHANGELOG.md)。

[MIT](./LICENSE)
