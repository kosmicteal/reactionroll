/* eslint-disable @typescript-eslint/no-explicit-any */
export function moveArrayItem(array: any[], from: any, to: any) {
  return array.splice(to, 0, array.splice(from, 1)[0]);
}
