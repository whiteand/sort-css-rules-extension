import { comparePropertyNames } from "./comparePropertyNames";
import { getPropertyNameFromLine } from "./getPropertyNameFromLine";

export function compareLines(
  userDefinedComparator: (
    propertyName1: string,
    propertyName2: string
  ) => 1 | 0 | -1,
  line1: string,
  line2: string
): 1 | 0 | -1 {
  if (line1 === line2) {
    return 0;
  }
  const propertyName1 = getPropertyNameFromLine(line1);
  const propertyName2 = getPropertyNameFromLine(line2);

  return comparePropertyNames(
    userDefinedComparator,
    propertyName1,
    propertyName2
  );
}
