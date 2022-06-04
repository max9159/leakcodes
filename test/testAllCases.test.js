var assert = require("assert");
var arrayPairSum = require("../problems/905. Sort Array By Parity");
var containsDuplicate = require('../problems/217. Contains Duplicate');
var lengthOfLongestSubstring = require('../problems/3. Longest Substring Without Repeating Characters M');


describe("3. Longest Substring Without Repeating Characters M", () => {
  it("Should be 6 for 'bbtablud'", () => {
    // Arrange
    const s = "bbtablud";
    const expectedResult = 6;

    // Action 
    const result = lengthOfLongestSubstring(s)

    // Assert
    assert.equal(result, expectedResult);
  });
  it("Should be 5 for 'qrsvbspk'", () => {
    // Arrange
    const s = "qrsvbspk";
    const expectedResult = 5;

    // Action 
    const result = lengthOfLongestSubstring(s)

    // Assert
    assert.equal(result, expectedResult);
  });

  it("Should always pass", () => {
    // Arrange
    const s = "abcabcbb";
    const expectedResult = 3;

    // Action 
    const result = lengthOfLongestSubstring(s)

    // Assert
    assert.equal(result, expectedResult);
  });
});

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