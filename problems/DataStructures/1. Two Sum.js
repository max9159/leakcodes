/**
 * 1. Two Sum (Easy)
 * 題目需求：給定整數陣列 nums 與目標值 target，找出陣列中相加等於 target 的兩個數字，並回傳它們的索引。
 * 限制條件：每組輸入剛好只有唯一解，且同一個元素不能重複使用兩次。
 * Example: nums = [2, 7, 11, 15], target = 9 -> Output: [0, 1]
 */
// ======================== Solution 2: Hash Map (Optimal) =====================
// Time Complexity: O(n) | Space Complexity: O(n)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const numIndexMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (numIndexMap.has(complement)) {
      return [numIndexMap.get(complement), i];
    }
    numIndexMap.set(nums[i], i);
  }

  return [];
};

// ======================== Solution 1: Brute Force ============================
// Time Complexity: O(n^2) | Space Complexity: O(1)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
//   return [];
// };

module.exports = twoSum;
