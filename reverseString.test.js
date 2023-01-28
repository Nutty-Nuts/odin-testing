const reverseString = require("./reverseString");

test('reverses "reverse this string" to "gnirts siht esrever"', () => {
    expect(reverseString("reverse this string")).toBe("gnirts siht esrever");
});
