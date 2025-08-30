import { Node } from "scss-parser";
import { getPropertyName } from "./getPropertyName";

interface IPropertyRelatedNodes {
  property: string | null;
  nodes: Node[];
}

class GroupBuilder {
  nodes: Node[];
  property: string;
  constructor() {
    this.nodes = [];
    this.property = "";
  }
  getDeclaration(): Node | null {
    return this.nodes.find((x) => x.type === "declaration") ?? null;
  }
  canAppend(node: Node): boolean {
    if (this.nodes.length === 0) {
      return true;
    }
    const declaration = this.getDeclaration();
    if (node.type === "declaration") {
      return !declaration && this.nodes.length === 0;
    }

    if (!declaration) {
      // Any node which comes before declaration should be "connected"
      // to the first declaration
      return true;
    }

    // If new node is on the same line as previous we can append it

    const lastNode = this.nodes[this.nodes.length - 1];
    if (lastNode == null || lastNode.start == null) {
      return false;
    }
    if (lastNode.start.line === node.start?.line) {
      return true;
    }
    return false;
  }
  build(): IPropertyRelatedNodes[] {
    if (this.isEmpty()) {
      return [];
    }
    const declaration = this.getDeclaration();

    const group: IPropertyRelatedNodes = {
      property: declaration ? getPropertyName(declaration) : null,
      nodes: this.nodes,
    };

    this.property = "";
    this.nodes = [];

    if (group.nodes.length === 1) {
      return [group];
    }

    if (
      group.nodes.length > 0 &&
      group.nodes[group.nodes.length - 1].type === "space"
    ) {
      const n = group.nodes.pop();
      return [group, { property: null, nodes: n ? [n] : [] }];
    }

    return [group];
  }
  append(node: Node) {
    this.nodes.push(node);
  }
  isEmpty() {
    return this.nodes.length === 0;
  }
}

export function groupNodes(nodes: Node[]): IPropertyRelatedNodes[] {
  const groups: IPropertyRelatedNodes[] = [];

  const groupBuilder = new GroupBuilder();

  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    if (groupBuilder.canAppend(node)) {
      groupBuilder.append(node);
    } else {
      groups.push(...groupBuilder.build());
      groupBuilder.append(node);
    }
  }
  if (!groupBuilder.isEmpty()) {
    groups.push(...groupBuilder.build());
  }

  return groups;
}
