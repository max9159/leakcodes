// ======================== Soultion 2 =========================================
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  let dp = new Array(amount + 1).fill(amount + 1);

  // base
  dp[0] = 0;
  for (let i = 1; i < dp.length; i++) {
    for (const coin of coins) {
      if (i - coin < 0) continue;

      dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
    }
  }
  return dp[amount] === amount + 1 ? -1 : dp[amount];
};
// ======================== Solution 1 =========================================
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// var coinChange = function (coins, amount) {

//   let memo = Array(amount + 1).fill(-999);

//   function dp(coins, amount) {
//     if (amount === 0) return 0;
//     if (amount < 0) return -1;

//     if (memo[amount] !== -999)
//       return memo[amount];

//     let result = Number.MAX_VALUE;
//     for (const coin of coins) {
//       let val = dp(coins, amount - coin);
//       if (val !== -1)
//         result = Math.min(result, val + 1);
//     }
//     memo[amount] = result == Number.MAX_VALUE ? -1 : result;
//     return memo[amount];
//   }

//   return dp(coins, amount);
// };
module.exports = coinChange;
