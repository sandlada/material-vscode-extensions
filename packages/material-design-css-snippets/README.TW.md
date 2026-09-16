<div align="center">

![Material Design CSS Snippets](https://raw.githubusercontent.com/sandlada/material-vscode-extensions/main/packages/material-design-css-snippets/images/icon/extension-icon-128.png)

# Material Design CSS Snippets

![Visual Studio Marketplace Last Updated](https://img.shields.io/visual-studio-marketplace/last-updated/sandlada.material-design-css-snippets)
![Visual Studio Marketplace Release Date](https://img.shields.io/visual-studio-marketplace/release-date/sandlada.material-design-css-snippets)
![Visual Studio Marketplace Installs](https://img.shields.io/visual-studio-marketplace/i/sandlada.material-design-css-snippets)
![Visual Studio Marketplace Version (including pre-releases)](https://img.shields.io/visual-studio-marketplace/v/sandlada.material-design-css-snippets)

[English](./README.md)

</div>

Visual Studio Code 適用的 Material Design 3 CSS 設計 token snippets：system color、palette 階梯，外加 typescale／typography、shape、motion（easing＋duration）與 space，來源為 [`@material/web`](https://github.com/material-components/material-web)、[`@sandlada/material-design-css`](https://github.com/sandlada/material-design-css) 與 [`@sandlada/mdk`](https://github.com/sandlada/mdk)。

> 搭配 [Material Web Snippets](https://marketplace.visualstudio.com/items?itemName=sandlada.material-web-snippets) 可在 HTML / JSX / TSX 中使用 `md-*` 元件 snippets。

## 功能

- **6 大類共 895 個設計 token（2685 條 snippets）：**在 CSS 檔輸入 `--md-` 即可補全 59 個 system color（`--md-sys-color-*`，例如 `--md-sys-color-primary`、`--md-sys-color-surface-container-highest`）、606 個 palette 階梯（`--md-ref-palette-*`：primary、secondary、tertiary、error、neutral、neutral-variant × 0–100 階）、156 個 typescale／typeface（`--md-sys-typescale-*`、`--md-ref-typeface-*`）、10 個 shape 圓角（`--md-sys-shape-corner-value-*`）、46 個 motion（18 easing `--md-sys-motion-easing-*`＋28 duration `--md-sys-motion-duration-*`）與 18 個 space（`--md-sys-measurement-space*`）。每個 token 皆有三種形式：`var(--token)`、`var(--token, fallback)`、只取值。
- **零程式碼：**純 snippets 擴展，無啟動成本。

## 用法

```css
.my-button {
  background-color: var(--md-sys-color-primary);
  color: var(--md-sys-color-on-primary);
  font-size: var(--md-sys-typescale-headline-small-size, 24px);
}
```

輸入 `--md-` 再從補全清單挑選；color 與 palette 以本包 `color-mcu-mapping.css` 的 MCU 選取值為準，typescale／shape／motion／space 以 `@sandlada/material-design-css` 為準（`variables.css`＋tailwind v4 `tw.css`，另以 `@sandlada/mdk` 交叉核對）。

支援的語言：`css`。

## 參與貢獻

Snippets 由本包的 `schema/tokens/` 產生，請勿手改產出檔。

```sh
npm run generate        # 重新產生
npm run generate:check  # 有漂移即報錯
npm run verify          # 驗證產出檔
```

## 更新日誌／授權

詳見 [CHANGELOG.md](./CHANGELOG.md)。

[MIT](./LICENSE)
