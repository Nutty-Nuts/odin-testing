function reverseString(inputString) {
    const inputStringArray = inputString.split("");
    let reversedString = "";

    for (let i = inputStringArray.length - 1; i >= 0; i--) {
        reversedString = `${reversedString}${inputStringArray[i]}`;
    }

    return reverseString;
}

module.exports = reverseString;
