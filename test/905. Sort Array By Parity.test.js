var assert = require("assert");
var arrayPairSum = require("../problems/905. Sort Array By Parity");

describe("My first test", () => {
  it("Should always pass", () => {
    // Arrange
    const nums = [6, 2, 6, 5, 1, 2];
    const expectedResult = 9;
    
    // Action 
    const result = arrayPairSum(nums)

    // Assert
    assert.equal(result, expectedResult);
  });
});