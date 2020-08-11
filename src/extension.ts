// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { compareLines } from './compareLines';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand('sort-css-rules.sort', () => {
    const activeEditor = vscode.window.activeTextEditor;
    if (!activeEditor) {
      return;
    }
    const currentSelection = activeEditor.selection;
    if (currentSelection.isSingleLine) {
      return;
    }

    const startLineIndex = currentSelection.start.line;
    const endLineIndex = currentSelection.end.line;

    const { document } = activeEditor;

    const linesTexts = Array.from(
      { length: endLineIndex - startLineIndex + 1 },
      (_, i) => {
        const lineNumber = i + startLineIndex;
        const line = document.lineAt(lineNumber);
        return line.text;
      },
    );

    linesTexts.sort(compareLines);

    activeEditor.edit((editBuilder) => {
      for (let i = 0; i < linesTexts.length; i++) {
        const lineText = linesTexts[i];
        const lineNumber = i + startLineIndex;
        const editedLine = document.lineAt(lineNumber);
        editBuilder.replace(editedLine.range, lineText);
      }
    });
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}
