/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let leftIndex = 0;
  let rightIndex = 0;
  let tempSum = 0;
  let result = Number.MAX_VALUE;

  while (rightIndex < nums.length) {
    tempSum += nums[rightIndex];
    rightIndex++;
    while (tempSum >= target && leftIndex < rightIndex) {
      result = Math.min(result, rightIndex - leftIndex);
      tempSum -= nums[leftIndex];
      leftIndex++;
    }
  }
  return result === Number.MAX_VALUE ? 0 : result;
};

module.exports = minSubArrayLen;