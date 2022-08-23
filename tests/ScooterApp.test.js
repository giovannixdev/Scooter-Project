const Scooter = require('../src/Scooter')
const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')

const user1 = new User('alex','1234',18)
const app = new ScooterApp();
const scooter1 = new Scooter('NYC', 'john');

// ScooterApp tests here
describe('ScooterApp methods', () => {
// register user
  app.register(user1)
  const user2 = new User('alexa','1234',17)
  test("register", () => {
    expect(() => app.register(user2)).toThrowError("too young to register!");
  })

  // log in
  test("login", () => {
    expect(() => app.login('camila','1234')).toThrowError("Username or password are incorrect");
  })

  // add scooter
  test("addScooter", () => {
    expect(() => app.addScooter()).toThrowError("location is not defined");
  })
   
  // remove scooter
  test("removeScooter", () => {
    expect(() => app.removeScooter()).toThrowError("scooter has not previously been added");
  })
})