export function getPropertyNameFromLine(line: string) {
  const trimmedLine = line.trim();
  const propertyName = trimmedLine.split(":")[0] || "";

  return propertyName.trim().toLowerCase();
}
