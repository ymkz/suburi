import app from '../src/index'

describe('hono integration test', () => {
  test('request / should return 200 response', async () => {
    // Arrange

    // Act
    const response = await app.request('/')
    const responseJson = await response.json()

    // Assert
    expect(response.status).toBe(200)
    expect(responseJson).toEqual({ message: 'Hello, World!' })
  })
})
