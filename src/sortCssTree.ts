/* eslint-disable eqeqeq */
import { Node } from "scss-parser";
import { comparePropertyNames } from "./comparePropertyNames";

function getPropertyName(n: Node): string | null {
  if (typeof n.value === "string") {
    return null;
  }

  for (const child of n.value) {
    if (child.type !== "property") {
      continue;
    }
    if (typeof child.value === "string") {
      return child.value;
    }
    let res = "";
    for (const child2 of child.value) {
      if (child2.type === "identifier" && typeof child2.value === "string") {
        res += child2.value;
      }
      if (child2.type === "operator" && typeof child2.value === "string") {
        res += child2.value;
      }
    }
    return res;
  }
  return null;
}

function compareDeclarations(a: Node, b: Node): number {
  if (a.type !== "declaration" && b.type !== "declaration") {
    return 0;
  }
  if (a.type !== "declaration") {
    return 1;
  }
  if (b.type !== "declaration") {
    return -1;
  }

  const aName = getPropertyName(a);
  const bName = getPropertyName(b);

  if (aName == null && bName == null) {
    return 0;
  }
  if (aName == null) {
    return 1;
  }
  if (bName == null) {
    return -1;
  }

  const aLower = aName.trim().toLowerCase();
  const bLower = bName.trim().toLowerCase();

  return comparePropertyNames(aLower, bLower);
}

export function sortCssTree(node: Node | null | undefined | string): void {
  if (!node) {
    return;
  }
  if (typeof node === "string") {
    return;
  }
  if (node.type === "stylesheet") {
    for (const child of node.value) {
      sortCssTree(child);
    }
    return;
  }
  if (node.type === "atrule") {
    for (const child of node.value) {
      sortCssTree(child);
    }
    return;
  }
  if (node.type === "atkeyword") {
    // It is a single keyword there is nothing to sort
    return;
  }
  if (node.type === "space") {
    // It is a single space
    return;
  }
  if (node.type === "identifier") {
    // It is a single identifier there is nothing to sort
    return;
  }
  if (node.type === "string_single") {
    // It is a single string there is nothing to sort
    return;
  }

  if (node.type === "punctuation") {
    // It is a single punctuation there is nothing to sort
    return;
  }
  if (node.type === "declaration") {
    // We should sort declarations on the higher level
    return;
  }
  if (node.type === "rule") {
    for (const child of node.value) {
      sortCssTree(child);
    }

    return;
  }
  if (node.type === "selector") {
    // we do not sort selectors
    return;
  }
  if (node.type === "block") {
    if (typeof node.value === "string") {
      // We do not sort blocks with string value
      return;
    }
    const declarationIndexes: number[] = [];
    const declarations: Node[] = [];
    for (let i = 0; i < node.value.length; i++) {
      const child = node.value[i];

      if (typeof child === "string") {
        continue;
      }

      if (child.type === "declaration") {
        declarationIndexes.push(i);
        declarations.push(child);
      }
    }

    declarations.sort(compareDeclarations);

    for (let i = 0; i < declarations.length; i++) {
      const declaration = declarations[i];
      const ind = declarationIndexes[i];
      node.value[ind] = declaration;
    }

    for (const child of node.value) {
      sortCssTree(child);
    }

    return;
  }

  if (typeof node.value === "string") {
    return;
  }
  if (!Array.isArray(node.value)) {
    return;
  }
  for (const child of node.value) {
    sortCssTree(child);
  }
}
