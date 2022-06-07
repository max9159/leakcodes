/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  let sum = 0;

  function fval(_n) {
    if (_n === 0) return 0;
    if (_n === 1) return 1;
    let tempN = _n;
    _n--;
    return fval(tempN) + _n;
  }

  return fval(n);
};

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