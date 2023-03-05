import { isGreaterThanN } from './is-greater-than-n'
import * as IsIntegerModule from './is-integer'

/**
 * mockを利用した場合のテスト例
 */
describe('is-greater-than-n', () => {
  const spyIsInteger = jest.spyOn(IsIntegerModule, 'isInteger')

  beforeEach(() => {
    spyIsInteger.mockReset()
  })

  test('11 is greater than 10', () => {
    // Arrange
    spyIsInteger.mockReturnValue(true)

    // Act
    const actual = isGreaterThanN(10, 11)

    // Assert
    expect(actual).toBe(true)
    expect(spyIsInteger).toHaveBeenCalledTimes(1)
    expect(spyIsInteger).toHaveBeenCalledWith(11)
  })

  test('9 is not greater than 10', () => {
    // Arrange
    spyIsInteger.mockReturnValue(true)

    // Act
    const actual = isGreaterThanN(10, 9)

    // Assert
    expect(actual).toBe(false)
    expect(spyIsInteger).toHaveBeenCalledTimes(1)
    expect(spyIsInteger).toHaveBeenCalledWith(9)
  })

  test('11.1 is greater than 10 because not integer', () => {
    // Arrange
    spyIsInteger.mockReturnValue(false)

    // Act
    const actual = isGreaterThanN(10, 11.1)

    // Assert
    expect(actual).toBe(false)
    expect(spyIsInteger).toHaveBeenCalledTimes(1)
    expect(spyIsInteger).toHaveBeenCalledWith(11.1)
  })
})
