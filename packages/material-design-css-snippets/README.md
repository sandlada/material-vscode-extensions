<div align="center">

![Material Design CSS Snippets](https://raw.githubusercontent.com/sandlada/material-vscode-extensions/main/packages/material-design-css-snippets/images/icon/extension-icon-128.png)

# Material Design CSS Snippets

![Visual Studio Marketplace Last Updated](https://img.shields.io/visual-studio-marketplace/last-updated/sandlada.material-design-css-snippets)
![Visual Studio Marketplace Release Date](https://img.shields.io/visual-studio-marketplace/release-date/sandlada.material-design-css-snippets)
![Visual Studio Marketplace Installs](https://img.shields.io/visual-studio-marketplace/i/sandlada.material-design-css-snippets)
![Visual Studio Marketplace Version (including pre-releases)](https://img.shields.io/visual-studio-marketplace/v/sandlada.material-design-css-snippets)

</div>

CSS system color token snippets for [Material Design 3](https://m3.material.io/) and [`@material/web`](https://github.com/material-components/material-web) in Visual Studio Code.

> Pair it with [Material Web Snippets](https://marketplace.visualstudio.com/items?itemName=sandlada.material-web-snippets) for `md-*` component snippets in HTML / JSX / TSX.
> 搭配 [Material Web Snippets](https://marketplace.visualstudio.com/items?itemName=sandlada.material-web-snippets) 可在 HTML / JSX / TSX 中使用 `md-*` 元件 snippets。

## Features 功能

- **59 system color tokens:** type `--md-sys-color-` in a CSS file to complete tokens such as `--md-sys-color-primary`, `--md-sys-color-surface-container-highest`, `--md-sys-color-primary-fixed-dim`.
  在 CSS 檔輸入 `--md-sys-color-` 即可補全 59 個 system color token。
- **Zero code:** snippets-only extension, no activation cost.
  純 snippets 擴展，無程式碼、無啟動成本。

## Usage 用法

```css
.my-button {
  background-color: var(--md-sys-color-primary);
  color: var(--md-sys-color-on-primary);
}
```

Type `--md-sys-color-` and pick from the completion list. Token list follows the installed `@material/web` version.
輸入 `--md-sys-color-` 再從補全清單挑選；token 清單以已安裝的 `@material/web` 版本為準。

Supported languages 支援的語言：`css`.

## Contributing 參與貢獻

Snippets are generated from `schema/css-tokens.ts` at the repo root — never edit the generated file by hand. Snippets 由 repo 根目錄的 `schema/css-tokens.ts` 產生，請勿手改產出檔。

```sh
npm run generate        # regenerate from schema 重新產生
npm run generate:check  # fail on drift 有漂移即報錯
npm run verify          # validate generated files 驗證產出檔
```

## Release Notes / License 更新日誌／授權

See [CHANGELOG.md](./CHANGELOG.md). 詳見 [CHANGELOG.md](./CHANGELOG.md)。

[MIT](./LICENSE)
