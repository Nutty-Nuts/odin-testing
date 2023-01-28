function caesarCipher(inputString, shiftAmount) {
    const lowercaseString = inputString.toLowerCase();
    const characterString = lowercaseString.split("");

    let outputString = "";
    let characterCode = 0;

    for (let item of characterString) {
        characterCode = (item.charCodeAt() + shiftAmount) % 26;
        outputString = String.fromCharCode(characterCode);
    }
    return outputString;
}

module.exports = caesarCipher;
