/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
  let n = prices.length;
  let maxProfit = 0, latestMinimumBuy = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < n; i++) {
    let tempProfit = maxProfit;
    // confirm max pofit for rest / sell.
    maxProfit = Math.max(maxProfit, latestMinimumBuy + prices[i]);
    // get minium buy price
    latestMinimumBuy = Math.max(latestMinimumBuy, tempProfit - prices[i] - fee)
  }
  return maxProfit;
};