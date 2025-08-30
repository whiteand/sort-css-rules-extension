import { Node } from "scss-parser";


/**
 * Expects "declaration" node and returns a string which is the property name
 */
export function getPropertyName(n: Node): string | null {
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
