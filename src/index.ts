export default function arrayMove<T>(array: ReadonlyArray<T>, from: number, to: number) {
  const arrayCopy = array.slice();

  const startIndex = to < 0 ? arrayCopy.length + to : to;
  const item = arrayCopy.splice(from, 1)[0];
  arrayCopy.splice(startIndex, 0, item);

  return arrayCopy;
}
