import { PROPERTY_NAME_ORDER } from "./PROPERTY_NAME_ORDER";

export const comparePropertyNames = (
  propertyName1: string,
  propertyName2: string
) => {
  if (propertyName1 === propertyName2) {
    return 0;
  }
  const index1 = PROPERTY_NAME_ORDER.indexOf(propertyName1);
  const index2 = PROPERTY_NAME_ORDER.indexOf(propertyName2);

  if (index1 < 0 && index2 < 0) {
    return 0;
  }
  if (index1 < 0) {
    return 1;
  }
  if (index2 < 0) {
    return -1;
  }
  return index1 > index2 ? 1 : -1;
};
