# AGENTS.md

> VSCode Extension：為類 HTML（HTML / JSX / TSX）提供 `@material/web`（`md-*`）的 Tag 補全與 `tag:attr` Snippets。

## 三種補全機制（改 `schema/` 後跑 `generate` 同步產出）

- `snippets/snippets.code-snippets`：`language: html` 的 Snippet 本體，`md-button` → `<md-button></md-button>` 即在此定義。
- `snippets/css.code-snippets`：`language: css` 的 `--md-sys-color-*` token 補全（由 `schema/css-tokens.ts` 產出，一 token 一條，body 即 token 本體）。
- `custom-data/html.html-data.json`：Tag + attributes 定義，提供 tag 提示與 attr 提示（`package.json` → `contributes.html.customData`）。
- `src/SnippetsTree.ts`：ActivityBar「Material Web Components」TreeView 的插入清單，`src/extension.ts` 只負責註冊與插入文字。

接線真相以 `package.json` → `contributes` 為準；`README.md` 的 Roadmap 表格只是狀態記錄，改完記得同步勾選。

## 指令

- `npm run compile`：`tsc -p ./`，`src/` → `out/`（`vscode:prepublish` 會自動跑）。根 `tsconfig.json` 的 `exclude` 已含 `schema`、`scripts`、`tools-dist`，工具鏈不會污染擴展構建。
- `npm run generate`：從 `schema/` 寫出 `snippets/*.code-snippets` 與 `custom-data/html.html-data.json`（另有全元件 `md-components` 索引）；新 family 在 `schema/` 加檔註冊後跑它即可。
- `npm run generate:check`：比對產出與檔案是否一致（有漂移就 exit 1）；`--stdout` 可印 JSON 審閱不寫檔。
- `npm run verify`：測落地檔案——shape、`$` placeholder 語法、tabstop 展開（如 `:for` → `for="controlId"`）、開閉標籤配對、schema 覆蓋率。
- `npm run watch`：開發時監看編譯。
- F5（`.vscode/launch.json` → Extension Host）：UI 層手動驗證；邏輯層用 `verify` 自動測。

## 約定與坑

- Prefix 命名：`md-<component>` 為本體，`md-<component>:<attr>` 為屬性變體（如 `md-button:disabled`、`md-text-field:type`）；新增時沿用，不自創新格式。
- Snippet 只收元件自身的 attr，不收跨元素/跨元件搭配（如 focus-ring 包 input/button、button 嵌 icon）：雙向搭配會讓同一用法散在多份模板裡互相影響，組合由使用者手寫。
- `out/` 已被 commit，不要手改，只改 `src/` 後跑 `compile`。
- `snippets.code-snippets`、`html.html-data.json` 是產生器寫出的（檔頭有 GENERATED 標記）：不要手改，改 `schema/` 後跑 `generate`；`--check` 會擋漂移。
- 絕對不要加回 `contributes.css`：該命名空間已被上游 proposed-API 的 CSS extension point 佔用，一加就會跳 `The 'css' contribution point is proposed API` 告警（microsoft/vscode#287871）。CSS token 走 `language: css` 的 snippets。
- 資料來源：`@material/web` 在 `devDependencies`，`node_modules/@material/web` 可用。但上游 `custom-elements.json` 的 `attributes` 是空的，真正的 prop 定義在各元件 `internal/*.d.ts` 的 JSDoc；`schema/` 是手寫精選，`.d.ts` 只當撰寫參考。attr 名以編譯後 `.js` 的 `attribute:` 宣告為準（如 dialog 的 `returnValue` 是 `attribute: false` 就不能收；小心 JSDoc 示例代碼裡的假 `@property`）。只收使用者會手寫的 attr：readonly 自標識（如 `md-tab`、`isListItem`、`isMenuItem`）與 `@deprecated`（如 tab 的 `selected`，用 `active`）不收。
- 每個組件 schema 檔頭註釋用 `{@link <github tree url>}` 標上游地址（如 focus-ring → `material-components/material-web/tree/main/focus`）。
- 多 tag 共用 attr 用 `tagTemplate: 'md-{variant}-x'` + `variants` 群組展開（button、icon-button、text-field、select）；attr 各異的 tag 各寫一條 entry（如 chips、menu、tabs），不要硬湊共用。
- `baseBody` 只放元件自身結構（自身 slot、inner tabstop）；override 亦同，不放其他 md 家族。
- 工具鏈 TS（`schema/`、`scripts/`）風格：4 spaces、LF、行末無分號。
- `snippets.code-snippets` 是 JSONC（檔頭有 `//` 註釋），改動後跑 `npm run verify`，不要指望 `JSON.parse` 整檔通過。
- `test.html` 為未追蹤的隨手測試檔，可用於 Extension Host 內驗證補全，不要 commit 雜物進去。

## 上游地址一覽（各 schema 檔頭 `{@link}` 的完整清單）

核心元件（`tree/main/<dir>`）：

- button → https://github.com/material-components/material-web/tree/main/button
- checkbox → https://github.com/material-components/material-web/tree/main/checkbox
- chips → https://github.com/material-components/material-web/tree/main/chips
- dialog → https://github.com/material-components/material-web/tree/main/dialog
- divider → https://github.com/material-components/material-web/tree/main/divider
- elevation → https://github.com/material-components/material-web/tree/main/elevation
- fab → https://github.com/material-components/material-web/tree/main/fab
- field → https://github.com/material-components/material-web/tree/main/field
- focus-ring → https://github.com/material-components/material-web/tree/main/focus
- icon → https://github.com/material-components/material-web/tree/main/icon
- icon-button → https://github.com/material-components/material-web/tree/main/iconbutton
- list → https://github.com/material-components/material-web/tree/main/list
- menu → https://github.com/material-components/material-web/tree/main/menu
- progress → https://github.com/material-components/material-web/tree/main/progress
- radio → https://github.com/material-components/material-web/tree/main/radio
- ripple → https://github.com/material-components/material-web/tree/main/ripple
- select → https://github.com/material-components/material-web/tree/main/select
- slider → https://github.com/material-components/material-web/tree/main/slider
- switch → https://github.com/material-components/material-web/tree/main/switch
- tabs → https://github.com/material-components/material-web/tree/main/tabs
- textfield → https://github.com/material-components/material-web/tree/main/textfield

labs 元件（`tree/main/labs/<dir>`）：

- badge → https://github.com/material-components/material-web/tree/main/labs/badge
- card → https://github.com/material-components/material-web/tree/main/labs/card
- item → https://github.com/material-components/material-web/tree/main/labs/item
- navigation-bar → https://github.com/material-components/material-web/tree/main/labs/navigationbar
- navigation-drawer → https://github.com/material-components/material-web/tree/main/labs/navigationdrawer
- navigation-tab → https://github.com/material-components/material-web/tree/main/labs/navigationtab
- segmented-button → https://github.com/material-components/material-web/tree/main/labs/segmentedbutton
- segmented-button-set → https://github.com/material-components/material-web/tree/main/labs/segmentedbuttonset

design token：

- css-tokens → https://github.com/material-components/material-web/tree/main/tokens
