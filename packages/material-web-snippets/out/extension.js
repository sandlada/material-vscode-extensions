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
exports.activate = activate;
const vscode = __importStar(require("vscode"));
const SnippetsTree_1 = require("./SnippetsTree");
function activate(context) {
    const treeDataProvider = new SnippetsTree_1.SnippetsTree();
    const treeView = vscode.window.createTreeView('tree', { treeDataProvider });
    treeView.onDidChangeSelection(event => {
        const selectedItem = event.selection[0];
        if (selectedItem instanceof SnippetsTree_1.SnippetsItem && selectedItem.command) {
            vscode.commands.executeCommand(selectedItem.command.command, selectedItem.command.arguments);
        }
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const document = editor.document;
            const position = editor.selection.active;
            const content = selectedItem.code + '\n\t';
            editor.edit(editBuilder => {
                editBuilder.insert(position, content);
                vscode.commands.executeCommand('extension.focusEditor');
            });
        }
    });
    vscode.commands.registerCommand('extension.focusEditor', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            vscode.window.showTextDocument(editor.document);
        }
    });
    context.subscriptions.push(treeView);
}
//# sourceMappingURL=extension.js.map