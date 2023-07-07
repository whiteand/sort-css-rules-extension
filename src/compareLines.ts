import { comparePropertyNames } from "./comparePropertyNames";
import { getPropertyNameFromLine } from "./getPropertyNameFromLine";

export function compareLines(line1: string, line2: string): 1 | 0 | -1 {
  if (line1 === line2) {
    return 0;
  }
  const rule1 = getPropertyNameFromLine(line1);
  const rule2 = getPropertyNameFromLine(line2);

  return comparePropertyNames(rule1, rule2);
}
