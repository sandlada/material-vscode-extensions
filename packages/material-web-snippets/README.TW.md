<div align="center">

![Material Web Components Snippets](https://raw.githubusercontent.com/sandlada/material-vscode-extensions/main/packages/material-web-snippets/images/icon/extension-icon-128.png)

# Material Web Snippets

![Visual Studio Marketplace Last Updated](https://img.shields.io/visual-studio-marketplace/last-updated/sandlada.material-web-snippets)
![Visual Studio Marketplace Release Date](https://img.shields.io/visual-studio-marketplace/release-date/sandlada.material-web-snippets)
![Visual Studio Marketplace Installs](https://img.shields.io/visual-studio-marketplace/i/sandlada.material-web-snippets)
![Visual Studio Marketplace Version (including pre-releases)](https://img.shields.io/visual-studio-marketplace/v/sandlada.material-web-snippets)

[English](./README.md)

</div>

為 [Material Design 3（`@material/web`）](https://github.com/material-components/material-web) Web Components 提供的 Visual Studio Code Snippets 擴展。

## 功能

- **HTML snippets（361 條）：**輸入 `md-` 即可插入元件，例如 `md-filled-button` → `<md-filled-button></md-filled-button>`。
- **屬性變體（302 條）：**`md-<component>:<attr>` 會帶上該屬性插入元件（例如 `md-button:disabled`）；同 family 的變體可用 Tab 切換（如 elevated / filled / outlined）。
- **完整索引：**`md-components` 可列出所有可用元件。
- **標籤＋屬性 IntelliSense：**透過 HTML custom data 提供 54 個標籤 / 405 個屬性的標籤提示與屬性建議（HTML 檔）。
- **補全說明：**每條 snippet 在補全列表都有 description 說明；`:full-properties` 可一次插入該元件的全部屬性。

| 常用屬性                                                                                                                                                      | 選擇變體                                                                                                                                                       | 完整元件                                                                                                                                                       |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![properties](https://raw.githubusercontent.com/sandlada/material-vscode-extensions/main/packages/material-web-snippets/images/resources/intro-fab.png) | ![variants](https://raw.githubusercontent.com/sandlada/material-vscode-extensions/main/packages/material-web-snippets/images/resources/intro-button.png) | ![components](https://raw.githubusercontent.com/sandlada/material-vscode-extensions/main/packages/material-web-snippets/images/resources/intro-code.png) |

## 用法

| 前綴                 | 展開結果                              |
| :------------------- | :------------------------------------ |
| `md-filled-button`   | `<md-filled-button></md-filled-button>` |
| `md-button:disabled` | 變體選擇＋`disabled` 屬性             |
| `md-text-field:type` | 帶 `type` 的 text-field               |
| `md-components`      | 所有元件索引                          |

支援的語言：`html`、`javascriptreact`（JSX）、`typescriptreact`（TSX）。

> 注意：標籤／屬性 IntelliSense（custom data）僅在 HTML 檔生效；JSX/TSX 中 `md-*` snippets 照常用，唯獨沒有屬性建議。

## 支援狀況

覆蓋範圍以已安裝的 `@material/web` 版本為準；只收使用者會手寫的屬性（readonly 標識與 `@deprecated` 別名不收）。

- ✅ 已支援

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

## 需求

- VS Code `^1.82.0`
- 要實際渲染元件，請在自己的專案安裝 [`@material/web`](https://www.npmjs.com/package/@material/web)；本擴展只提供 snippets。

## 參與貢獻

Snippets 由本包的 `schema/` 產生，請勿手改產出檔。

```sh
npm run generate        # 重新產生 snippets 與 custom data
npm run generate:check  # 有漂移即報錯
npm run verify          # 驗證產出檔
```

## 更新日誌／授權

詳見 [CHANGELOG.md](./CHANGELOG.md)。

[MIT](./LICENSE)
