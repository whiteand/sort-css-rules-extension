export function sortSubset<const T>(
  arr: T[],
  shouldBeSorted: (item: T, i: number, arr: T[]) => boolean,
  cmp: (a: T, b: T) => number
): void {
  const sortableSlices: [number, number][] = [];
  const elementsToSort: { x: T; i: number }[] = [];
  for (let i = 0; i < arr.length; i++) {
    const x = arr[i];
    const sortable = shouldBeSorted(x, i, arr);
    if (!sortable) {
      continue;
    }
    elementsToSort.push({ x, i });
    if (sortableSlices.length === 0) {
      sortableSlices.push([i, i + 1]);
      continue;
    }
    const lastSlice = sortableSlices[sortableSlices.length - 1];
    if (lastSlice[1] === i) {
      lastSlice[1] += 1;
    } else {
      sortableSlices.push([i, i + 1]);
    }
  }
  elementsToSort.sort((a, b) => cmp(a.x, b.x) || a.i - b.i);
  while (sortableSlices.length > 0) {
    const last = sortableSlices[sortableSlices.length - 1];
    const lastInd = last[1];
    arr[lastInd - 1] = elementsToSort.pop()!.x;
    const startInd = last[0];
    if (lastInd === startInd + 1) {
      sortableSlices.pop();
    } else {
      last[1] -= 1;
    }
  }
  if (elementsToSort.length !== 0) {
    throw new Error("Unreachable");
  }
}
