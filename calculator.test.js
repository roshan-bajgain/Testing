const Calculator = require("./calculator.js");
 
  test("add positive numbers", () => {
    const calculator = new Calculator(a, b);
    expect(Calculator.add(12, 20)).toBe(32);
    expect(Calculator.add(3990, 10)).toBe(4000);
  });