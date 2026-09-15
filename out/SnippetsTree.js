"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.SnippetsItem = exports.SnippetsTree = void 0;
const vscode = __importStar(require("vscode"));
class SnippetsTree {
    _onDidChangeTreeData = new vscode.EventEmitter();
    onDidChangeTreeData = this._onDidChangeTreeData.event;
    elements = [
        // Button
        new SnippetsItem('Filled Button', '<md-filled-button></md-filled-button>', 0),
        new SnippetsItem('Filled Tonal Button', '<md-filled-tonal-button></md-filled-tonal-button>', 0),
        new SnippetsItem('Outlined Button', '<md-outlined-button></md-outlined-button>', 0),
        new SnippetsItem('Elevated Button', '<md-elevated-button></md-elevated-button>', 0),
        new SnippetsItem('Text Button', '<md-text-button></md-text-button>', 0),
        // Fab
        new SnippetsItem('Fab', '<md-fab></md-fab>', 0),
        new SnippetsItem('Branded Fab', '<md-branded-fab></md-branded-fab>', 0),
        // IconButton
        new SnippetsItem('Icon', '<md-icon></md-icon>', 0),
        new SnippetsItem('Icon Button', '<md-icon-button></md-icon-button>', 0),
        new SnippetsItem('Filled Icon Button', '<md-filled-icon-button></md-filled-icon-button>', 0),
        new SnippetsItem('Filled Tonal Icon Button', '<md-filled-tonal-icon-button></md-filled-tonal-icon-button>', 0),
        new SnippetsItem('Outlined Icon Button', '<md-outlined-icon-button></md-outlined-icon-button>', 0),
        // Checkbox
        new SnippetsItem('Checkbox', '<md-checkbox></md-checkbox>', 0),
        // Chips
        new SnippetsItem('Chip Set', '<md-chip-set></md-chip-set>', 0),
        new SnippetsItem('Assist Chip', '<md-assist-chip></md-assist-chip>', 0),
        new SnippetsItem('Filter Chip', '<md-filter-chip></md-filter-chip>', 0),
        new SnippetsItem('Suggestion Chip', '<md-suggestion-chip></md-suggestion-chip>', 0),
        new SnippetsItem('Input Chip', '<md-input-chip></md-input-chip>', 0),
        // Dialog
        new SnippetsItem('Dialog', '<md-dialog></md-dialog>', 0),
        // Divider
        new SnippetsItem('Divider', '<md-divider></md-divider>', 0),
        // Elevation
        new SnippetsItem('Elevation', '<md-elevation></md-elevation>', 0),
        // Focus Ring
        new SnippetsItem('Focus Ring', '<md-focus-ring></md-focus-ring>', 0),
        // List
        new SnippetsItem('List', '<md-list></md-list>', 0),
        new SnippetsItem('List Item', '<md-list-item></md-list-item>', 0),
        // Menu
        new SnippetsItem('Menu', '<md-menu></md-menu>', 0),
        new SnippetsItem('Menu Item', '<md-menu-item></md-menu-item>', 0),
        new SnippetsItem('Sub Menu', '<md-sub-menu></md-sub-menu>', 0),
        // Progress Indicators
        new SnippetsItem('Circular Progress', '<md-circular-progress></md-circular-progress>', 0),
        new SnippetsItem('Linear Progress', '<md-linear-progress></md-linear-progress>', 0),
        // Radio
        new SnippetsItem('Radio', '<md-radio></md-radio>', 0),
        // Ripple
        new SnippetsItem('Ripple', '<md-ripple></md-ripple>', 0),
        // Select
        new SnippetsItem('Filled Select', '<md-filled-select></md-filled-select>', 0),
        new SnippetsItem('Outlined Select', '<md-outlined-select></md-outlined-select>', 0),
        new SnippetsItem('Select Option', '<md-select-option></md-select-option>', 0),
        // Slider
        new SnippetsItem('Slider', '<md-slider></md-slider>', 0),
        // Switch
        new SnippetsItem('Switch', '<md-switch></md-switch>', 0),
        // Tabs
        new SnippetsItem('Tabs', '<md-tabs></md-tabs>', 0),
        new SnippetsItem('Primary Tab', '<md-primary-tab></md-primary-tab>', 0),
        new SnippetsItem('Secondary Tab', '<md-secondary-tab></md-secondary-tab>', 0),
        // Text Field
        new SnippetsItem('Filled Text Field', '<md-filled-text-field></md-filled-text-field>', 0),
        new SnippetsItem('Outlined Text Field', '<md-outlined-text-field></md-outlined-text-field>', 0),
        // Field
        new SnippetsItem('Filled Field', '<md-filled-field></md-filled-field>', 0),
        new SnippetsItem('Outlined Field', '<md-outlined-field></md-outlined-field>', 0),
        // Badge
        new SnippetsItem('Badge', '<md-badge></md-badge>', 0),
        // Card
        new SnippetsItem('Elevated Card', '<md-elevated-card></md-elevated-card>', 0),
        new SnippetsItem('Filled Card', '<md-filled-card></md-filled-card>', 0),
        new SnippetsItem('Outlined Card', '<md-outlined-card></md-outlined-card>', 0),
        // Item
        new SnippetsItem('Item', '<md-item></md-item>', 0),
        // Navigation Bar
        new SnippetsItem('Navigation Bar', '<md-navigation-bar></md-navigation-bar>', 0),
        new SnippetsItem('Navigation Tab', '<md-navigation-tab></md-navigation-tab>', 0),
        // Navigation Drawer
        new SnippetsItem('Navigation Drawer', '<md-navigation-drawer></md-navigation-drawer>', 0),
        new SnippetsItem('Navigation Drawer Modal', '<md-navigation-drawer-modal></md-navigation-drawer-modal>', 0),
        // Segmented Button
        new SnippetsItem('Segmented Button', '<md-outlined-segmented-button></md-outlined-segmented-button>', 0),
        new SnippetsItem('Segmented Button Set', '<md-outlined-segmented-button-set></md-outlined-segmented-button-set>', 0),
        // template
        // new SnippetsItem('', '<md-></md->', 0),
    ];
    getChildren(element) {
        // Return the children of the element.
        return Promise.resolve(this.elements);
    }
    getTreeItem(element) {
        // Return the tree item for the element.
        return Promise.resolve(element);
    }
}
exports.SnippetsTree = SnippetsTree;
class SnippetsItem {
    label;
    code;
    collapsibleState;
    command;
    constructor(label, code, collapsibleState, command) {
        this.label = label;
        this.code = code;
        this.collapsibleState = collapsibleState;
        this.command = command;
    }
}
exports.SnippetsItem = SnippetsItem;
//# sourceMappingURL=SnippetsTree.js.map