// ============================ Sloution 2 =====================================
/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  let memo = new Array(n);
  memo[0] = 0, memo[1] = 1;
  for (let i = 2; i <= n; i++) {
    memo[i] = memo[i - 1] + memo[i - 2];
  }
  return memo[n];
};

//============================ Sloution 1 ====================================
/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  let curSum = 1, preSum = 0;
  for (let i = 2; i <= n; i++) {
    // i=2 => 1 = 1 + 0, i=3 => 2 = 1 + 1, i=4 => 3 = 2 + 1
    let tempSum = curSum + preSum;

    preSum = curSum; // i=2 => 1
    curSum = tempSum; // i=2 => 1
  }
  return curSum;
};