import { RULES_ORDER } from "./RULES_ORDER";

export const comparePropertyNames = (rule1: string, rule2: string) => {
  if (rule1 === rule2) {
    return 0;
  }
  const index1 = RULES_ORDER.indexOf(rule1);
  const index2 = RULES_ORDER.indexOf(rule2);

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
