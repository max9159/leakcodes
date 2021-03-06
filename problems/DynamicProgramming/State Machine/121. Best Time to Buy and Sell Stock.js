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
module.exports = maxProfit;