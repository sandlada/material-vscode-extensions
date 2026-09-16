<div align="center">

![Material Web Components Snippets](https://raw.githubusercontent.com/sandlada/material-vscode-extensions/main/packages/material-web-snippets/src/images/icon/extension-icon-128.png)

# Material Web Snippets

![Visual Studio Marketplace Last Updated](https://img.shields.io/visual-studio-marketplace/last-updated/sandlada.material-web-snippets)
![Visual Studio Marketplace Release Date](https://img.shields.io/visual-studio-marketplace/release-date/sandlada.material-web-snippets)
![Visual Studio Marketplace Installs](https://img.shields.io/visual-studio-marketplace/i/sandlada.material-web-snippets)
![Visual Studio Marketplace Version (including pre-releases)](https://img.shields.io/visual-studio-marketplace/v/sandlada.material-web-snippets)

</div>

Snippets for [Material Design 3 (`@material/web`)](https://github.com/material-components/material-web) Web Components in Visual Studio Code.

為 [Material Design 3（`@material/web`）](https://github.com/material-components/material-web) Web Components 提供的 Visual Studio Code Snippets 擴展。

## Features 功能

- **HTML snippets (368):** type `md-` to insert a component, e.g. `md-filled-button` → `<md-filled-button></md-filled-button>`.
  輸入 `md-` 即可插入元件，例如 `md-filled-button`。
- **Attribute variants (309):** `md-<component>:<attr>` inserts the component with that attribute, e.g. `md-button:disabled`. Variant families (button, icon-button, text-field, select) let you pick `elevated / filled / outlined / …` with Tab.
  `md-<component>:<attr>` 會帶上該屬性插入元件（例如 `md-button:disabled`）；同 family 的變體可用 Tab 切換（如 elevated / filled / outlined）。
- **Full index:** `md-components` lists every available component.
  `md-components` 可列出所有可用元件。
- **Tag + attribute IntelliSense:** 54 tags / 405 attributes via HTML custom data (tag hover docs and attribute suggestions in HTML files).
  透過 HTML custom data 提供 54 個標籤 / 405 個屬性的標籤提示與屬性建議（HTML 檔）。
- **Sidebar panel:** the *Material Web Components* activity-bar view inserts any component with one click.
  側邊欄 *Material Web Components* 檢視可一點即插入任一元件。

| Properties 常用屬性                                                                                                                                         | Pick a variant 選擇變體                                                                                                                                      | Full components 完整元件                                                                                                                                     |
| :---------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![properties](https://raw.githubusercontent.com/sandlada/material-vscode-extensions/main/packages/material-web-snippets/src/images/resources/intro-fab.png) | ![variants](https://raw.githubusercontent.com/sandlada/material-vscode-extensions/main/packages/material-web-snippets/src/images/resources/intro-button.png) | ![components](https://raw.githubusercontent.com/sandlada/material-vscode-extensions/main/packages/material-web-snippets/src/images/resources/intro-code.png) |

## Usage 用法

| Prefix 前綴          | Expands to 展開結果                                             |
| :------------------- | :-------------------------------------------------------------- |
| `md-filled-button`   | `<md-filled-button></md-filled-button>`                         |
| `md-button:disabled` | variant picker + `disabled` attribute 變體選擇＋`disabled` 屬性 |
| `md-text-field:type` | text-field with `type="…"` 帶 `type` 的 text-field              |
| `md-components`      | index of all components 所有元件索引                            |

Supported languages 支援的語言：`html`, `javascriptreact` (JSX), `typescriptreact` (TSX).

> Note 注意：tag / attribute IntelliSense (custom data) only works in HTML files; in JSX/TSX the `md-*` snippets still work, but attribute suggestions do not.
> 標籤／屬性 IntelliSense（custom data）僅在 HTML 檔生效；JSX/TSX 中 `md-*` snippets 照常用，唯獨沒有屬性建議。

## Support status 支援狀況

Coverage follows the installed `@material/web` version; only attributes users actually write are included (readonly markers and `@deprecated` aliases are excluded).
覆蓋範圍以已安裝的 `@material/web` 版本為準；只收使用者會手寫的屬性（readonly 標識與 `@deprecated` 別名不收）。

- ✅ Supported 已支援

| Family            | Example tags                                         | Snippet | Custom data |
| :---------------- | :--------------------------------------------------- | :------ | :---------- |
| Badge             | `md-badge`                                           | ✅       | ✅           |
| Button            | `md-filled-button`, `md-outlined-button`, …          | ✅       | ✅           |
| Card              | `md-elevated-card`, `md-filled-card`, …              | ✅       | ✅           |
| Checkbox          | `md-checkbox`                                        | ✅       | ✅           |
| Chips             | `md-chip-set`, `md-assist-chip`, …                   | ✅       | ✅           |
| Dialog            | `md-dialog`                                          | ✅       | ✅           |
| Divider           | `md-divider`                                         | ✅       | ✅           |
| Elevation         | `md-elevation`                                       | ✅       | ✅           |
| Fab               | `md-fab`, `md-branded-fab`                           | ✅       | ✅           |
| Field             | `md-filled-field`, `md-outlined-field`               | ✅       | ✅           |
| Focus Ring        | `md-focus-ring`                                      | ✅       | ✅           |
| Icon              | `md-icon`                                            | ✅       | ✅           |
| Icon Button       | `md-icon-button`, `md-filled-icon-button`, …         | ✅       | ✅           |
| Item              | `md-item`                                            | ✅       | ✅           |
| List              | `md-list`, `md-list-item`                            | ✅       | ✅           |
| Menu              | `md-menu`, `md-menu-item`, `md-sub-menu`             | ✅       | ✅           |
| Navigation Bar    | `md-navigation-bar`                                  | ✅       | ✅           |
| Navigation Drawer | `md-navigation-drawer`, `md-navigation-drawer-modal` | ✅       | ✅           |
| Navigation Tab    | `md-navigation-tab`                                  | ✅       | ✅           |
| Progress          | `md-circular-progress`, `md-linear-progress`         | ✅       | ✅           |
| Radio             | `md-radio`                                           | ✅       | ✅           |
| Ripple            | `md-ripple`                                          | ✅       | ✅           |
| Segmented Button  | `md-outlined-segmented-button`, `…-set`              | ✅       | ✅           |
| Select            | `md-filled-select`, `md-select-option`, …            | ✅       | ✅           |
| Slider            | `md-slider`                                          | ✅       | ✅           |
| Switch            | `md-switch`                                          | ✅       | ✅           |
| Tabs              | `md-tabs`, `md-primary-tab`, `md-secondary-tab`      | ✅       | ✅           |
| Text Field        | `md-filled-text-field`, `md-outlined-text-field`     | ✅       | ✅           |

## Requirements 需求

- VS Code `^1.82.0`
- To render the components, install [`@material/web`](https://www.npmjs.com/package/@material/web) in your own project; this extension only provides snippets.
  要實際渲染元件，請在自己的專案安裝 [`@material/web`](https://www.npmjs.com/package/@material/web)；本擴展只提供 snippets。

## Contributing 參與貢獻

Snippets are generated from `schema/` in this package — never edit the generated files by hand. Snippets 由本包的 `schema/` 產生，請勿手改產出檔。

```sh
npm run generate        # regenerate snippets + custom data 重新產生 snippets 與 custom data
npm run generate:check  # fail on drift 有漂移即報錯
npm run verify          # validate generated files 驗證產出檔
npm run compile         # build the extension 構建擴展
```

## Release Notes / License

See [CHANGELOG.md](./CHANGELOG.md). 詳見 [CHANGELOG.md](./CHANGELOG.md)。

[MIT](./LICENSE)
