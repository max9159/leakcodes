/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let n = prices.length;
  let maxProfit = 0;
  let preVal = prices[0];
  for (let i = 1; i < n; i++) {
    if (preVal < prices[i]) {
      maxProfit += prices[i] - preVal;
      preVal = prices[i];
    } else {
      preVal = prices[i];
    }
  }
  return maxProfit;
};