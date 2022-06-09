var assert = require("assert");
var arrayPairSum = require("../problems/TwoPointers/905. Sort Array By Parity");
var containsDuplicate = require('../problems/217. Contains Duplicate');
var lengthOfLongestSubstring = require('../problems/SlidingWindow/3. Longest Substring Without Repeating Characters');
var findCheapestPrice = require('../problems/DynamicProgramming/787. Cheapest Flights Within K Stops');
const coinChange = require("../problems/DynamicProgramming/322. Coin Change");

describe("3. Longest Substring Without Repeating Characters M", () => {
  it("322. Coin Change", () => {
    // Arrange
    const expectedResult = 3;
    const conis = [1, 2, 5];
    const amount = 11;
    // Action 
    const result = coinChange(conis, amount);

    // Assert
    assert.equal(result, expectedResult);
  });
  it("322. Coin Change", () => {
    // Arrange
    const expectedResult = 20;
    const conis = [186, 419, 83, 408];
    const amount = 6249;
    // Action 
    const result = coinChange(conis, amount);

    // Assert
    assert.equal(result, expectedResult);
  });

  it("787. Cheapest Flights Within K Stops: DFS", () => {
    // Arrange
    const expectedResult = 700;
    const flights = [[0, 1, 100], [1, 2, 100], [2, 0, 100], [1, 3, 600], [2, 3, 200]];
    // Action 
    const result = findCheapestPrice(4, flights, 0, 3, 1);

    // Assert
    assert.equal(result, expectedResult);
  });

  it("3. Longest Substring Without Repeating Characters", () => {
    // Arrange
    const s = "pwwkew";
    const expectedResult = 3;

    // Action 
    const result = lengthOfLongestSubstring(s)

    // Assert
    assert.equal(result, expectedResult);
  });

  it("3. Longest Substring Without Repeating Characters 2", () => {
    // Arrange
    const s = "bbtablud";
    const expectedResult = 6;

    // Action 
    const result = lengthOfLongestSubstring(s)

    // Assert
    assert.equal(result, expectedResult);
  });
  it("3. Longest Substring Without Repeating Characters 3", () => {
    // Arrange
    const s = "qrsvbspk";
    const expectedResult = 5;

    // Action 
    const result = lengthOfLongestSubstring(s)

    // Assert
    assert.equal(result, expectedResult);
  });

  it("3. Longest Substring Without Repeating Characters 4", () => {
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