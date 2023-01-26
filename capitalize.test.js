const capitalize = require("./capitalize");

test('capitalizes "hello, world!" to "Hello, world!"', () => {
    expect(capitalize("hello, world!")).toBe("Hello, world!");
});
