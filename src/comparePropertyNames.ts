import { PROPERTY_NAME_ORDER } from "./PROPERTY_NAME_ORDER";

export const comparePropertyNames = (
  userDefinedComparator: (
    propertyName1: string,
    propertyName2: string
  ) => 1 | 0 | -1,
  propertyName1: string,
  propertyName2: string
) => {
  if (propertyName1 === propertyName2) {
    return 0;
  }
  const userDefinedComparison = userDefinedComparator(
    propertyName1,
    propertyName2
  );
  if (userDefinedComparison !== 0) {
    return userDefinedComparison;
  }
  const index1 = PROPERTY_NAME_ORDER.indexOf(propertyName1);
  const index2 = PROPERTY_NAME_ORDER.indexOf(propertyName2);

  if (index1 < 0 && index2 < 0) {
    return propertyName1 > propertyName2 ? 1 : -1;
  }
  if (index1 < 0) {
    return -1;
  }
  if (index2 < 0) {
    return 1;
  }
  return index1 > index2 ? 1 : -1;
};
