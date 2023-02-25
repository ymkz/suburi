export const isInteger = (value: unknown): boolean => {
  return Number.isSafeInteger(value)
}
