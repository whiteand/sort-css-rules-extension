import { compareRules } from './compareRules';
import { getRuleFromLine } from './getRuleFromLine';

export function compareLines(line1: string, line2: string): 1 | 0 | -1 {
  if (line1 === line2) {
    return 0;
  }
  const rule1 = getRuleFromLine(line1);
  const rule2 = getRuleFromLine(line2);

  return compareRules(rule1, rule2);
}
