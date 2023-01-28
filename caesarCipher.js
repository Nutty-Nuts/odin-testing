function caesarCipher(inputString, shiftAmount) {
    const lowercaseString = inputString;
    const characterString = lowercaseString.split("");

    let outputString = "";
    let characterCode = 0;

    for (let item of characterString) {
        characterCode = item.charCodeAt() + shiftAmount;

        if (item.charCodeAt() == 32) {
            characterCode = 32;
        } else if (item.charCodeAt() >= 65 && item.charCodeAt() <= 90) {
            if (characterCode > 90) {
                let moduluCode = characterCode % 90;
                characterCode = 64 + moduluCode;
            }
        } else if (item.charCodeAt() >= 97 && item.charCodeAt() <= 122) {
            if (characterCode > 122) {
                let moduluCode = characterCode % 122;
                characterCode = 96 + moduluCode;
            }
        } else {
            characterCode -= shiftAmount;
        }
        outputString += String.fromCharCode(characterCode);
    }
    return outputString;
}
module.exports = caesarCipher;
