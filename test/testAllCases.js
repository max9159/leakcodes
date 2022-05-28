var assert = require("assert");
var arrayPairSum = require("../problems/905. Sort Array By Parity");
var containsDuplicate = require('../problems/217. Contains Duplicate');

describe("217. Contains Duplicate", () => {
  it("Should always pass", () => {
    // Arrange
    const nums = [1, 2, 3, 4];
    const expectedResult = false;

    // Action 
    const result = containsDuplicate(nums)

    // Assert
    assert.equal(result, expectedResult);
  });
});

describe("905. Sort Array By Parity", () => {
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