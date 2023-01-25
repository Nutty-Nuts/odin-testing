class Calculator {
    sum(first, second) {
        return first + second;
    }

    subtract(first, second) {
        return first - second;
    }

    divide(first, second) {
        return first / second;
    }

    multiply(first, second) {
        return first * second;
    }
}

let calculator = new Calculator();

module.exports = calculator;
