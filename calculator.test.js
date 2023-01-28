const calculator = require("./calculator");

test("1 + 2 is equal to 3", () => {
    expect(calculator.sum(1, 2)).toBe(3);
});

test("10 - 5 is equal to 5", () => {
    expect(calculator.subtract(10, 5)).toBe(5);
});

test("11 * 11 is equal to 121", () => {
    expect(calculator.multiply(11, 11)).toBe(121);
});

test("81 / 9 is equal to 9", () => {
    expect(calculator.divide(81, 9)).toBe(9);
});
