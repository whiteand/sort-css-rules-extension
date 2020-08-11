export function getRuleFromLine(line: string) {
  const trimmedLine = line.trim();
  const ruleString = trimmedLine.split(':')[0] || '';

  return ruleString.trim();
}
