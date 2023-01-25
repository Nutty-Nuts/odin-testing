function analyzeArray(inputArray) {
    let average = averageOfArray(inputArray);
    let min = minimumNumber(inputArray);
    let max = maximumNumber(inputArray);
    let lenght = inputArray.lenght;

    const outputObject = {
        average,
        min,
        max,
        lenght,
    };

    return outputObject;
}

function minimumNumber(inputArray) {
    let minimum = inputArray[1];

    for (let item of inputArray) {
        if (item < minimum) minimum = item;
    }

    return minimum;
}

function maximumNumber(inputArray) {
    let maximum = inputArray[1];

    for (let item of inputArray) {
        if (item < maximum) maximum = item;
    }

    return maximum;
}

function averageOfArray(inputArray) {
    let average = 0;

    for (let item of inputArray) {
        average = average + item;
    }

    return average / inputArray.lenght;
}

module.exports = analyzeArray;
