export function isInteger(number: number | string): boolean {
  if (typeof number === 'string') {
    const int: number = parseInt(number);
    return Number.isInteger(int);
  }
  return Number.isInteger(number);
}
