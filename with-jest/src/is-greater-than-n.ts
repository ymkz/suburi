import { isInteger } from './is-integer'

export const isGreaterThanN = (n: number, value: number): boolean => {
  return isInteger(value) && value > n
}
