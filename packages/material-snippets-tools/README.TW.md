# material-snippets-tools

[English](./README.md)

本 monorepo 共用的 snippet 產生器邏輯。僅 build-time 使用：不發佈，也不會包進 vsix。

## 內容

- `src/types.ts` — 共用結構型別（`ComponentSchema`、`CssToken`、`SnippetDef`）。各擴展包的 schema 保留各自相同的宣告以維持零依賴；這裡的型別給 builders 穩定的輸入形狀。
- `src/html.ts` — HTML 側 builders：`buildSnippets`、`buildHtmlTags`、`buildMegaSnippet`、`buildTreeItems`。
- `src/css.ts` — CSS 側 builder：`buildCssSnippets`（每 token 三種形式：`var(--token)`、`var(--token, fallback)`、只取值）。
- `src/verify-utils.ts` — 共用驗證 helpers：`parseJsonc`、`checkPlaceholders`、`expand`、`checkTagPair`。以 throw（而非 exit）回報錯誤，各包 `verify` 自行決定 CLI 失敗格式。

## 用法

```sh
npm run build    # 編譯 src/ -> dist/
```

由各擴展包 `scripts/generate.ts`、`scripts/verify.ts` 經 workspace 依賴 `material-snippets-tools` 取用（以 `tsconfig.tools.json` 編譯、從 `tools-dist/` 執行）。根目錄 `npm run build:tools` 會在任何包級 `generate`／`verify` 之前先編好本包。

工具鏈風格：4 spaces、LF、行末無分號。詳見 [AGENTS.md](../../AGENTS.md)。

## 授權

[MIT](../material-web-snippets/LICENSE)
