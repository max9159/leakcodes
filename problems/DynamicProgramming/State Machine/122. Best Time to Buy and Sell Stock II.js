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

// ========================== Solution 2 =======================================
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let n = prices.length;
  let maxProfit = 0, latestMinimumBuy = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < n; i++) {
    let tempProfit = maxProfit;
    // confirm max pofit for rest / sell.
    maxProfit = Math.max(maxProfit, latestMinimumBuy + prices[i]);
    // get minium buy price
    latestMinimumBuy = Math.max(latestMinimumBuy, tempProfit - prices[i])
  }
  return maxProfit;
};