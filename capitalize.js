function capitalize(inputString) {
    let firstLetter = inputString.charAt(0);
    firstLetter = firstLetter.toUpperCase();

    let remainingWord = inputString.slice(1);

    let outputString = `${firstLetter}${remainingWord}`;

    return outputString;
}

module.exports = capitalize;
