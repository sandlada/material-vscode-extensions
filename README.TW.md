<div align="center">

# material-vscode-extensions (monorepo)

[English](./README.md)

</div>

[Material Design 3](https://m3.material.io) 與 [`@material/web`](https://github.com/material-components/material-web) 的 VS Code 擴展 monorepo：兩個擴展，獨立發佈、獨立版本。

| Package                                                                            | Marketplace                                                                                                               | 內容                                                                                                  |
| :--------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------ | :---------------------------------------------------------------------------------------------------- |
| [`packages/material-web-snippets`](./packages/material-web-snippets)               | [Material Web Snippets](https://marketplace.visualstudio.com/items?itemName=sandlada.material-web-snippets)               | `md-*` 元件 snippets（HTML / JSX / TSX）、tag＋attribute IntelliSense、側邊欄 tree view                |
| [`packages/material-design-css-snippets`](./packages/material-design-css-snippets) | [Material Design CSS Snippets](https://marketplace.visualstudio.com/items?itemName=sandlada.material-design-css-snippets) | `--md-*` 設計 token snippets（color、palette、typescale、shape、motion、space；CSS），純 snippets      |

## 結構

```text
packages/
  material-web-snippets/        # sandlada.material-web-snippets（有程式碼：src/ -> out/；自帶 schema/＋scripts/）
  material-design-css-snippets/ # sandlada.material-design-css-snippets（純 snippets，無程式碼；自帶 schema/＋scripts/）
  material-snippets-tools/      # 共用產生器邏輯（private，僅 build-time）
```

## 指令

在 repo 根目錄執行（各包亦可單跑自家的 `generate`／`verify`）：

```sh
npm run build           # 一條龍：generate -> verify -> compile
npm run package:all     # build＋打包兩個擴展
npm run generate        # 各包 schema/ -> 自家 snippets＋custom data
npm run generate:check  # 有漂移即報錯
npm run verify          # 驗證產出檔
npm run compile         # 建置 packages/material-web-snippets（src/ -> out/）
```

約定與坑見 [AGENTS.md](./AGENTS.md)。

## 授權

[MIT](./LICENSE)
