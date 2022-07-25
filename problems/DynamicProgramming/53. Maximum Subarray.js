/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  const n = nums.length;
  let dp = [];
  dp[0] = nums[0];

  for (let i = 1; i < n; i++) {
    dp[i] = Math.max(nums[i], nums[i] + dp[i - 1]);
  }
  let res = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < n; i++) {
    res = Math.max(res, dp[i]);
  }

  return res;
};