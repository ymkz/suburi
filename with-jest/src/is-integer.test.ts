import { isInteger } from './is-integer'

/**
 * 最もシンプルなテスト例
 */
describe('is-integer', () => {
  test('1 is integer', () => {
    // Arrange

    // Act
    const actual = isInteger(1)

    // Assert
    expect(actual).toBe(true)
  })

  test('0 is integer', () => {
    // Arrange

    // Act
    const actual = isInteger(0)

    // Assert
    expect(actual).toBe(true)
  })

  test('-1 is integer', () => {
    // Arrange

    // Act
    const actual = isInteger(-1)

    // Assert
    expect(actual).toBe(true)
  })

  test('0.1 is not integer', () => {
    // Arrange

    // Act
    const actual = isInteger(0.1)

    // Assert
    expect(actual).toBe(false)
  })

  test('1000000000000000 is integer', () => {
    // Arrange

    // Act
    const actual = isInteger(1000000000000000)

    // Assert
    expect(actual).toBe(true)
  })

  test('10000000000000000 is not integer', () => {
    // Arrange

    // Act
    const actual = isInteger(10000000000000000)

    // Assert
    // 絶対値が2^53以上の数値リテラルは大きすぎるため整数として表現できないためIntegerではない
    expect(actual).toBe(false)
  })

  test('{} is integer', () => {
    // Arrange

    // Act
    const actual = isInteger({})

    // Assert
    expect(actual).toBe(false)
  })

  test('NaN is integer', () => {
    // Arrange

    // Act
    const actual = isInteger(NaN)

    // Assert
    expect(actual).toBe(false)
  })

  test('Infinity is integer', () => {
    // Arrange

    // Act
    const actual = isInteger(Infinity)

    // Assert
    expect(actual).toBe(false)
  })
})
