import { Node } from "scss-parser";
import { comparePropertyNames } from "./comparePropertyNames";
import { groupNodes } from "./groupNodes";
import { sortSubset } from "./sortSubset";

function compareProperties(
  userDefinedComparator: (name1: string, name2: string) => 1 | -1 | 0,
  aName: string,
  bName: string
): 1 | 0 | -1 {
  const aLower = aName.trim().toLowerCase();
  const bLower = bName.trim().toLowerCase();

  return comparePropertyNames(userDefinedComparator, aLower, bLower);
}

function sortBlock(
  userDefinedComparator: (
    propertyName1: string,
    propertyName2: string
  ) => 1 | 0 | -1,
  node: Node
) {
  if (typeof node.value === "string") {
    // We do not sort blocks with string value
    return;
  }
  const groups = groupNodes(node.value);
  sortSubset(
    groups,
    (a) => a.property != null,
    (a, b) => compareProperties(userDefinedComparator, a.property!, b.property!)
  );

  node.value.length = 0;
  for (const g of groups) {
    for (const n of g.nodes) {
      node.value.push(n);
    }
  }

  for (const child of node.value) {
    sortCssTree(userDefinedComparator, child);
  }
}

export function sortCssTree(
  userDefinedComparator: (
    propertyName1: string,
    propertyName2: string
  ) => 1 | 0 | -1,
  node: Node | null | undefined | string
): void {
  if (!node) {
    return;
  }
  if (typeof node === "string") {
    return;
  }
  switch (node.type) {
    case "rule": // falltrough
    case "atrule": // falltrough
    case "stylesheet": {
      for (const child of node.value) {
        sortCssTree(userDefinedComparator, child);
      }
      return;
    }
    case "declaration": // falltrough
    case "selector": // falltrough
    case "punctuation": // falltrough
    case "string_single": // falltrough
    case "identifier": // falltrough
    case "space": // falltrough
    case "atkeyword": {
      return;
    }
    case "block":
      return sortBlock(userDefinedComparator, node);
    default: {
      if (typeof node.value === "string") {
        return;
      }
      if (!Array.isArray(node.value)) {
        return;
      }
      for (const child of node.value) {
        sortCssTree(userDefinedComparator, child);
      }
    }
  }
}
