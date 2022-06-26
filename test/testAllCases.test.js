var assert = require("assert");
var arrayPairSum = require("../problems/TwoPointers/905. Sort Array By Parity");
var containsDuplicate = require('../problems/DataStructures/217. Contains Duplicate');
var lengthOfLongestSubstring = require('../problems/SlidingWindow/3. Longest Substring Without Repeating Characters');
var findCheapestPrice = require('../problems/DynamicProgramming/787. Cheapest Flights Within K Stops');
const coinChange = require("../problems/DynamicProgramming/322. Coin Change");
const maxEnvelopes = require("../problems/DynamicProgramming/354. Russian Doll Envelopes");
const permute = require("../problems/BackTrack/46. Permutations");
const flattern = require("../problems/Others/Flatten a multi-dimensional array");
const solveNQueens = require("../problems/BackTrack/51. N-Queens");
const openLock = require("../problems/BFS/752. Open the Lock");
const combine = require("../problems/BackTrack/77. Combinations");
const subsetsWithDup = require("../problems/BackTrack/90. Subsets II");
const maxProfit = require("../problems/DynamicProgramming/State Machine/121. Best Time to Buy and Sell Stock");
const search = require("../problems/Binary Search/704. Binary Search");

describe("Tests", () => {

  it("704. Binary Search", () => {
    // Arrange
    const input = [-1, 0, 3, 5, 9, 12];
    const input2 = 9;
    const expectedResult = 4;
    // Action 
    const result = search(input, input2);

    // Assert
    assert.equal(result, expectedResult);
  });

  it("121. Best Time to Buy and Sell Stock", () => {
    // Arrange
    const input = [7, 1, 5, 3, 6, 4];
    const expectedResult = 5;
    // Action 
    const result = maxProfit(input);

    // Assert
    assert.equal(result, expectedResult);
  });

  it("90. Subsets II", () => {
    // Arrange
    const input = [1, 2, 2];
    const expectedResult = [[], [1], [1, 2], [1, 2, 2], [2], [2, 2]];
    // Action 
    const result = subsetsWithDup(input);

    // Assert
    assert.equal(JSON.stringify(result), JSON.stringify(expectedResult));
  });

  it("77. Combinations", () => {
    // Arrange
    const input = 5, input2 = 3;
    const expectedResult = [[1, 2, 3], [1, 2, 4], [1, 2, 5], [1, 3, 4], [1, 3, 5], [1, 4, 5], [2, 3, 4], [2, 3, 5], [2, 4, 5], [3, 4, 5]];
    // Action 
    const result = combine(input, input2);

    // Assert
    assert.equal(JSON.stringify(result), JSON.stringify(expectedResult));
  });

  it("752. Open the Lock", () => {
    // Arrange
    const input = ["0201", "0101", "0102", "1212", "2002"]
    const target = "0202";
    const expectedResult = 6;
    // Action 
    const result = openLock(input, target);

    // Assert
    assert.equal(result, expectedResult);
  });

  it("51. N-Queens - 2", () => {
    // Arrange
    const input = 5;
    const expectedResult = [["Q....", "..Q..", "....Q", ".Q...", "...Q."], ["Q....", "...Q.", ".Q...", "....Q", "..Q.."], [".Q...", "...Q.", "Q....", "..Q..", "....Q"], [".Q...", "....Q", "..Q..", "Q....", "...Q."], ["..Q..", "Q....", "...Q.", ".Q...", "....Q"], ["..Q..", "....Q", ".Q...", "...Q.", "Q...."], ["...Q.", "Q....", "..Q..", "....Q", ".Q..."], ["...Q.", ".Q...", "....Q", "..Q..", "Q...."], ["....Q", ".Q...", "...Q.", "Q....", "..Q.."], ["....Q", "..Q..", "Q....", "...Q.", ".Q..."]];
    // Action 
    const result = solveNQueens(input);

    // Assert
    assert.equal(JSON.stringify(result), JSON.stringify(expectedResult));
  });

  it("51. N-Queens - 1", () => {
    // Arrange
    const input = 4;
    const expectedResult = [[".Q..", "...Q", "Q...", "..Q."], ["..Q.", "Q...", "...Q", ".Q.."]];
    // Action 
    const result = solveNQueens(input);

    // Assert
    assert.equal(JSON.stringify(result), JSON.stringify(expectedResult));
  });

  it("Flatten a multi-dimensional array", () => {
    // Arrange
    const input = [1, [2, 3], [4, 5, [6]]];
    const expectedResult = [1, 2, 3, 4, 5, 6];
    // Action 
    const result = flattern(input);

    // Assert
    assert.equal(JSON.stringify(result), JSON.stringify(expectedResult));
  });

  it("46. Permutations", () => {
    // Arrange
    const input = [1, 2, 3];
    const expectedResult = [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]];

    // Action 
    const result = permute(input);

    // Assert
    assert.equal(JSON.stringify(result), JSON.stringify(expectedResult));
  });

  it("354. Russian Doll Envelopes - 5", () => {
    // Arrange
    const expectedResult = 6;
    // [5,7], [8,9], [13, 11], [14,17], [18,19]
    const envelopes = [[10, 4], [13, 18], [1, 5], [13, 15], [3, 12], [12, 11], [17, 15], [7, 1], [17, 18], [7, 19], [2, 5], [8, 9], [18, 10], [7, 6], [17, 7]];
    // Action 
    const result = maxEnvelopes(envelopes);

    // Assert
    assert.equal(result, expectedResult);
  });

  it("354. Russian Doll Envelopes - 4", () => {
    // Arrange
    const expectedResult = 5;
    // [5,7], [8,9], [13, 11], [14,17], [18,19]
    const envelopes = [[15, 8], [2, 20], [2, 14], [4, 17], [8, 19], [8, 9], [5, 7], [11, 19], [8, 11], [13, 11], [2, 13], [11, 19], [8, 11], [13, 11], [2, 13], [11, 19], [16, 1], [18, 13], [14, 17], [18, 19]];
    // Action 
    const result = maxEnvelopes(envelopes);

    // Assert
    assert.equal(result, expectedResult);
  });

  it("354. Russian Doll Envelopes - 3", () => {
    // Arrange
    const expectedResult = 3;
    const envelopes = [[1, 3], [3, 5], [6, 7], [6, 8], [8, 4], [9, 5]];
    // Action 
    const result = maxEnvelopes(envelopes);

    // Assert
    assert.equal(result, expectedResult);
  });

  it("354. Russian Doll Envelopes - 2", () => {
    // Arrange
    const expectedResult = 3;
    const envelopes = [[30, 50], [12, 2], [3, 4], [12, 15]];
    // Action 
    const result = maxEnvelopes(envelopes);

    // Assert
    assert.equal(result, expectedResult);
  });

  it("354. Russian Doll Envelopes - 1", () => {
    // Arrange
    const expectedResult = 5;
    const envelopes = [[2, 100], [3, 200], [4, 300], [5, 500], [5, 400], [5, 250], [6, 370], [6, 360], [7, 380]];
    // Action 
    const result = maxEnvelopes(envelopes);

    // Assert
    assert.equal(result, expectedResult);
  });

  it("322. Coin Change 1", () => {
    // Arrange
    const expectedResult = 3;
    const conis = [1, 2, 5];
    const amount = 11;
    // Action 
    const result = coinChange(conis, amount);

    // Assert
    assert.equal(result, expectedResult);
  });
  it("322. Coin Change 2", () => {
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