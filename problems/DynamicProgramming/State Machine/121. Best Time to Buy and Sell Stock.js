/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let n = prices.length;
  let dp = new Array(n).fill(new Array(2));
  for (let i = 0; i < n; i++) {
    if (i === 0) {
      dp[i][0] = 0;
      dp[i][1] = -prices[i];
      continue;
    }
    // rest / sell
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
    // rest / buy
    dp[i][1] = Math.max(dp[i - 1][1], - prices[i]);
  }
  return dp[n - 1][0];
};

// =================================== Solution 2 ==============================
// Space Complexity : O(1)
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let n = prices.length;
  let maxProfit = 0, latestMinimumBuy = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < n; i++) {
    // confirm max pofit for rest / sell.
    maxProfit = Math.max(maxProfit, latestMinimumBuy + prices[i]);
    // get minium buy price
    latestMinimumBuy = Math.max(latestMinimumBuy, -prices[i])
  }
  return maxProfit;
};
// const input = [7, 1, 5, 3, 6, 4];
// const expectedResult = 5;
// result history
// 0, -7 
// 0, -1 dp_i_0 = Math.max(0, -7 + 1);, dp_i_1 = Math.max(0, -1)
// 4, -1
// 4, -1
// 5, -1
// 5, -1
module.exports = maxProfit;
