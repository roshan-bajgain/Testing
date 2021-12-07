const Calculator = require("./calculator.js");

describe("Additions", () => {
  const calculator = new Calculator(a, b);
  test("add positive numbers", () => {
    expect(Calculator.add(12, 20)).toBe(32);
    // expect(Calculator.add(3990, 10)).toBe(4000);
  });
});
