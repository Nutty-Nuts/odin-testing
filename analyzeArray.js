function analyzeArray(inputArray) {
    let average = averageOfArray(inputArray);
    let min = minimumNumber(inputArray);
    let max = maximumNumber(inputArray);
    let length = inputArray.length;

    const outputObject = {
        average,
        min,
        max,
        length,
    };

    return outputObject;
}

function minimumNumber(inputArray) {
    let minimum = inputArray[0];

    for (let item of inputArray) {
        if (item < minimum) minimum = item;
    }

    return minimum;
}

function maximumNumber(inputArray) {
    let maximum = inputArray[0];

    for (let item of inputArray) {
        if (item > maximum) maximum = item;
    }

    return maximum;
}

function averageOfArray(inputArray) {
    let average = 0;

    for (let item of inputArray) {
        average = average + item;
    }

    return average / inputArray.length;
}

module.exports = analyzeArray;
