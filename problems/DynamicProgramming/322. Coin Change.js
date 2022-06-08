/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {

  let memo = Array(amount + 1).fill(-999);

  function dp(coins, amount) {
    if (amount === 0) return 0;
    if (amount < 0) return -1;

    if (memo[amount] !== -999)
      return memo[amount];

    let result = Number.MAX_VALUE;
    for (const coin of coins) {
      let val = dp(coins, amount - coin);
      if (val !== -1)
        result = Math.min(result, val + 1);
    }
    memo[amount] = result == Number.MAX_VALUE ? -1 : result;
    return memo[amount];
  }

  return dp(coins, amount);
};
module.exports = coinChange;
