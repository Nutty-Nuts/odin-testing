function caesarCipher(inputString, shiftAmount) {
    const lowercaseString = inputString;
    const characterString = lowercaseString.split("");

    let outputString = "";
    let characterCode = 0;

    for (let item of characterString) {
        characterCode = item.charCodeAt() + shiftAmount;
        characterCode = wrapLetters(
            item.charCodeAt(),
            characterCode,
            shiftAmount
        );
        outputString += String.fromCharCode(characterCode);
    }
    return outputString;
}

function wrapLetters(oldCharacterCode, newCharacterCode, shiftAmount) {
    if (oldCharacterCode == 32) {
        return 32;
    } else if (oldCharacterCode >= 65 && oldCharacterCode <= 90) {
        if (newCharacterCode > 90) {
            let moduluCode = newCharacterCode % 90;
            return 64 + moduluCode;
        } else {
            return newCharacterCode;
        }
    } else if (oldCharacterCode >= 97 && oldCharacterCode <= 122) {
        if (newCharacterCode > 122) {
            let moduluCode = newCharacterCode % 122;
            return 96 + moduluCode;
        } else {
            return newCharacterCode;
        }
    } else {
        return newCharacterCode - shiftAmount;
    }
}

module.exports = caesarCipher;
