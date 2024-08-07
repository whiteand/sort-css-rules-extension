// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import { compareLines } from "./compareLines";
import { sortCssTree } from "./sortCssTree";
import { parse, stringify } from "scss-parser";
import { e as v } from "quartet";
import { safeCompile } from "get-z-index";

const isValidOrder = v(
  v.arrayOf(
    v.and(v.arrayOf(v.and(v.string, v.minLength(1))), {
      length: 2,
    })
  )
);

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  let disposableSort = vscode.commands.registerCommand(
    "sort-css-declarations.sort",
    () => {
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
        }
      );

      const userComparator = getUserDefinedComparator();
      if (!userComparator.isOk) {
        return;
      }
      linesTexts.sort((line1, line2) =>
        compareLines(userComparator.value, line1, line2)
      );

      activeEditor.edit((editBuilder) => {
        for (let i = 0; i < linesTexts.length; i++) {
          const lineText = linesTexts[i];
          const lineNumber = i + startLineIndex;
          const editedLine = document.lineAt(lineNumber);
          editBuilder.replace(editedLine.range, lineText);
        }
      });
    }
  );

  function getUserOrder(): [string, string][] {
    const x = (vscode.workspace
      .getConfiguration("sort-css-declarations")
      .get("order") ?? []) as [string, string][];
    if (!isValidOrder(x)) {
      vscode.window.showErrorMessage(
        "Invalid order configuration. Please check your settings."
      );
      vscode.window.showErrorMessage(
        `Explanation: ${JSON.stringify(isValidOrder.explanations)}`
      );
      return [];
    }
    return x;
  }
  function getUserDefinedComparator():
    | {
        isOk: true;
        value: (a: string, b: string) => 1 | 0 | -1;
      }
    | { isOk: false } {
    const order = getUserOrder();
    const zIndex = safeCompile(order);

    if (!zIndex.isOk) {
      const error = zIndex.error;
      vscode.window.showErrorMessage(`Error in order configuration: ${error}`);
      return { isOk: false };
    }
    const provider = zIndex.value;

    return {
      isOk: true,
      value: (a: string, b: string) => {
        const aRes = provider.getSafe(a, undefined);
        if (!aRes.isOk) {
          return 0;
        }
        const bRes = provider.getSafe(b, undefined);
        if (!bRes.isOk) {
          return 0;
        }
        const aIndex = aRes.value;
        const bIndex = bRes.value;
        if (aIndex > bIndex) {
          return 1;
        }
        if (aIndex < bIndex) {
          return -1;
        }
        return 0;
      },
    };
  }

  let disposeAll = vscode.commands.registerCommand(
    "sort-css-declarations.sort-all",
    () => {
      const activeEditor = vscode.window.activeTextEditor;
      if (!activeEditor) {
        return;
      }

      const { document } = activeEditor;

      const text = document.getText();

      const css = parse(text);

      const userComparator = getUserDefinedComparator();
      if (!userComparator.isOk) {
        return;
      }
      sortCssTree(userComparator.value, css);

      const newText = stringify(css);

      const start = document.lineAt(0).range.start;
      const end = document.lineAt(document.lineCount - 1).range.end;
      const range = new vscode.Range(start, end);

      activeEditor.edit((editBuilder) => {
        editBuilder.replace(range, newText);
      });
    }
  );

  context.subscriptions.push(disposableSort);
  context.subscriptions.push(disposeAll);
}

export function deactivate() {}
