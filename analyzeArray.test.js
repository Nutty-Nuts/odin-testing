const analyzeArray = require("./analyzeArray");

test("the array of [1,8,3,4,2,6] should have average: 4, min: 1, max: 8, length: 6", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6,
    });
});
