const Scooter = require('../src/Scooter')
const User = require('../src/User')

//typeof scooter === object
// describe('scooter object', () => {
//   test('does something', () => {
//     // edit this to be a real test!
//     expect(false).toEqual(true);
//   }
// )
// })

const scooter1 = new Scooter('NYC', 'john');

//Method tests
describe('scooter methods', () => {
  // tests here!
  //rent method
  test("rent", () => {
    scooter1.charge = 100
    expect(scooter1.charge).toBe(100)
  })

  //dock method
  test('dock', function() {
    expect(() => scooter1.dock()).toThrowError("Docking station required");
  })

  //requestRepair method
  test('requestRepair', function() {
    expect(() => scooter1.requestRepair()).toThrowError("Scooter is broken, please send a repair request");
  })

  //charge method
  test("recharge", async () => {
    await scooter1.recharge(); // we need to wait for the charge!
    expect(scooter1.charge).toBe(100);
  });
})
