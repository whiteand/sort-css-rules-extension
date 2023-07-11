import { comparePropertyNames } from "./comparePropertyNames";
import { getPropertyNameFromLine } from "./getPropertyNameFromLine";

export function compareLines(line1: string, line2: string): 1 | 0 | -1 {
  if (line1 === line2) {
    return 0;
  }
  const propertyName1 = getPropertyNameFromLine(line1);
  const propertyName2 = getPropertyNameFromLine(line2);

  return comparePropertyNames(propertyName1, propertyName2);
}
