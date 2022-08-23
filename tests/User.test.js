const User = require('../src/User')

const user1 = new User('alex','1234',18)
// User tests here
describe("User Class", () => {
// test username
  test("should not be able to login if username doesn't match", () => {
    expect(user1.username).toEqual('alex')
  })
// test password
  test("should not be able to login if password doesn't match", () => {
    expect(user1.password).toEqual('1234')
  })
// test age
  test("should not be able to login if age doesn't match", () => {
    expect(user1.age).toEqual(18)
  })
})