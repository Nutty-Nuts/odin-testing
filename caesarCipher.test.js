const caesarCipher = require("./caesarCipher");

test('encodes "This is a Caesar Cipher." into "Aopz pz h Jhlzhy Jpwoly."', () => {
    expect(caesarCipher("This is a Caesar Cipher.", 7)).toBe(
        "Aopz pz h Jhlzhy Jpwoly."
    );
});
