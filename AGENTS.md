# AGENTS.md

> Monorepo（npm workspaces）：`packages/material-web-snippets`（`@material/web` 的 `md-*` Tag 補全與 `tag:attr` Snippets，有程式碼）＋ `packages/material-design-css-snippets`（設計 token Snippets：color、palette、typescale、shape、motion、space，無程式碼）＋ `packages/material-snippets-tools`（共用產生器邏輯，private、build-time only，不發佈、不進 vsix）。兩擴展包獨立發佈、獨立版本；根目錄只做編排、不放源碼。各包自帶 `schema/`＋`scripts/`＋`tsconfig.tools.json`：web 包 `schema/components/`（各 family 一檔）＋ CSS 包 `schema/tokens/`（各 token 群組一檔，經 `tokens/index.ts` 導出）。

## 三種補全機制（改各包 `schema/` 後跑 `generate` 同步產出；根目錄一次全跑，`-w` 單跑一包）

- `packages/material-web-snippets/snippets/snippets.code-snippets`：HTML 系 Snippet 本體，`package.json` 同時掛給 `html`、`javascriptreact`、`typescriptreact`（同一檔案，不另建檔），`md-button` → `<md-button></md-button>` 即在此定義。
- `packages/material-design-css-snippets/snippets/css.code-snippets`：`language: css` 的設計 token 補全（由本包 `schema/tokens/` 產出；每群組一檔，color 與 palette 的 fallback 取自本包 `color-mcu-mapping.css` 的 MCU 選取值；每 token 各有原始＋`var(--token, fallback)`＋只取值三條）。
- `packages/material-web-snippets/custom-data/html.html-data.json`：Tag + attributes 定義，提供 tag 提示與 attr 提示（該包 `package.json` → `contributes.html.customData`）。
- `packages/material-web-snippets/src/SnippetsTree.ts`：ActivityBar「Material Web Components」TreeView 的插入清單，`src/extension.ts` 只負責註冊與插入文字。

接線真相以 `package.json` → `contributes` 為準；`README.md` 的支援狀況表只是狀態記錄，改 web 包 `schema/` 增減 family 時記得同步更新（只列實際有的 family）。

## 指令（皆在根目錄跑；各包內亦可單跑自家 `generate`／`verify`）
- `npm run build`：一條龍——`generate` → `verify` → `compile` 全跑。
- `npm run package:all`：`build` ＋兩包 `vsce package --no-dependencies`。
- `npm run compile`：轉發到 web 包 `tsc -p ./`，`src/` → `out/`（該包 `vscode:prepublish` 會自動跑）。該包 `tsconfig.json` 的 `exclude` 含 `schema`、`scripts`、`tools-dist`（工具鏈不進擴展構建）；各包 `tsconfig.tools.json` 只管自家 `schema`＋`scripts`（`tools-dist/`）。
- `npm run generate`：各包從自家 `schema/` 寫出 `snippets/*.code-snippets` 與 `custom-data/html.html-data.json`（web 包另有全元件 `md-components` 索引）；新 family 在該包 `schema/` 加檔註冊後跑它即可（根一次全跑，`npm run generate -w <pkg>` 單跑一包；先編 `material-snippets-tools`）。
- `npm run generate:check`：比對產出與檔案是否一致（有漂移就 exit 1）；`npm run generate:stdout` 可印 JSON 審閱不寫檔。
- `npm run verify`：各包驗自家落地檔案（根一次全驗）——shape、`$` placeholder 語法、tabstop 展開（如 `:for` → `for="controlId"`）、開閉標籤配對、schema 覆蓋率。
- `npm run watch`：開發時監看編譯（轉發到 snippets 包）。
- F5（`.vscode/launch.json` 內有兩組 Extension Host 配置，各包一個）：UI 層手動驗證；邏輯層用 `verify` 自動測。
- 打包／發佈必須帶 `--no-dependencies`（各包 `npm run package` 已內含）：npm workspaces 下 `vsce` 的 `npm list` 會回傳 repo 根，導致整個 repo（含 `.git`、隔壁包）被掃進 vsix；兩包都沒有 runtime dependencies，加此旗無副作用。發佈前用 `vsce ls --no-dependencies` 核對清單。兩包的 `.vscodeignore` 須排除 `schema/`、`scripts/`、`tools-dist/`（＋ `tsconfig.tools.json`；CSS 包另加 `color-mcu-mapping.css`），否則工具鏈會被掃進 vsix。

## 約定與坑

- Prefix 命名：`md-<component>` 為本體，`md-<component>:<attr>` 為屬性變體（如 `md-button:disabled`、`md-text-field:type`）；新增時沿用，不自創新格式。
- Snippet 只收元件自身的 attr，不收跨元素/跨元件搭配（如 focus-ring 包 input/button、button 嵌 icon）：雙向搭配會讓同一用法散在多份模板裡互相影響，組合由使用者手寫。
- `out/` 已被 commit，不要手改，只改 `src/` 後跑 `compile`（路徑：`packages/material-web-snippets/out/`；CSS 包無程式碼、無 `out/`）。
- `snippets/*.code-snippets`、`html.html-data.json` 是產生器寫出的（檔頭有 GENERATED 標記）：不要手改，改各包 `schema/` 後跑 `generate`；`--check` 會擋漂移。
- 絕對不要加回 `contributes.css`：該命名空間已被上游 proposed-API 的 CSS extension point 佔用，一加就會跳 `The 'css' contribution point is proposed API` 告警（microsoft/vscode#287871）。CSS token 走 `language: css` 的 snippets。
- 資料來源以 `node_modules/@material/web`（已安裝版）為準，npm 發佈版比 Github main 舊，不要拿 main 的新 attr（如 `rel`）往回填。但上游 `custom-elements.json` 的 `attributes` 是空的，真正的 prop 定義在各元件 `internal/*.d.ts` 的 JSDoc；`schema/` 是手寫精選，`.d.ts` 只當撰寫參考。attr 名以編譯後 `.js` 的 `attribute:` 宣告為準（如 dialog 的 `returnValue` 是 `attribute: false` 就不能收；小心 JSDoc 示例代碼裡的假 `@property`）。只收使用者會手寫的 attr：readonly 自標識（如 `md-tab`、`isListItem`、`isMenuItem`）與 `@deprecated`（如 tab 的 `selected`，用 `active`）不收。
- 每個組件 schema 檔頭註釋用 `{@link <github tree url>}` 標上游地址（如 focus-ring → `material-components/material-web/tree/main/focus`）。
- 多 tag 共用 attr 用 `tagTemplate: 'md-{variant}-x'` + `variants` 群組展開（button、icon-button、text-field、select）；attr 各異的 tag 各寫一條 entry（如 chips、menu、tabs），不要硬湊共用。
- `baseBody` 只放元件自身結構（自身 slot、inner tabstop）；override 亦同，不放其他 md 家族。
- 工具鏈 TS（各包 `schema/`、`scripts/`＋`material-snippets-tools/src/`）風格：4 spaces、LF、行末無分號。
- `snippets.code-snippets` 是 JSONC（檔頭有 `//` 註釋），改動後跑 `npm run verify`，不要指望 `JSON.parse` 整檔通過。
- `test.html` 為未追蹤的隨手測試檔，可用於 Extension Host 內驗證補全，不要 commit 雜物進去。

## package.json 與 README 約定

- 身份：Marketplace publisher 是 `sandlada`，GitHub 為 `sandlada/material-vscode-extensions`。`package.json` 的 `publisher` 用 `sandlada`、`author` 與 `LICENSE` 用 `Kai Orion & Sandlada`；`repository`、`homepage`、`bugs` 用 `sandlada` 地址。README 的圖片（`raw.githubusercontent.com/...`）、repo / issue / CHANGELOG / LICENSE 連結用 `sandlada`；Marketplace badge 與市集連結的 `itemName` 用 `sandlada.*`。README 授權行只留 `[MIT](./LICENSE)`，不加 `©` 後綴（署名以 `LICENSE` 為準）。
- 兩包身份：web 包 `name: material-web-snippets`（新短 ID，已斷開舊 `material-web-vscode-snippets` 的老用戶更新，需重裝）；CSS 包 `name: material-design-css-snippets`。兩包版本各自獨立（皆從 `1.0.0` 起）；根 `package.json` 是 `private`＋`workspaces: [packages/*]`，不發佈。
- `package.json` 必備欄位：英文一句話 `description`、擴充 `keywords`（material-design、web-components、html、css 等）、`galleryBanner`（M3 主色 `#6750A4`、`dark`）。
- Snippet 語言掛載：`snippets.code-snippets` 同時掛 `html`、`javascriptreact`、`typescriptreact`；`css.code-snippets` 只掛 `css`。HTML custom data 只在 HTML 檔生效是上游限制（JSX/TSX 只有 snippets、沒有 attr 建議），README 的 Note 要保留這句。
- README 中英雙語（英文為主、中文緊隨）；支援狀況表只列 web 包 `schema/` 實際有的 family，不列上游沒有的元件（如 Snackbar、Tooltip）。
- README 的數量口徑（HTML 條數、attr 變體數、CSS token 條數、tags / attrs 數）以落地檔案實測為準，改各包 `schema/` 後重算，不要沿用舊數字。

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
