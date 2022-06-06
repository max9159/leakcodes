// ========================== Solution 1: DFS =======================================
/**
 * @param {number} n // cities
 * @param {number[][]} flights // [src, dist, price]
 * @param {number} src
 * @param {number} dst
 * @param {number} k // most stops
 * @return {number} // the cheapest price
 */
var findCheapestPrice = function (n, flights, src, dst, k) {
  const INF = 1000007;

  function dfs(_flights, i, _dst, _k, _memo) {
    if (_k < 0) return INF;
    if (i == _dst) return 0;
    if (_memo[i][_k] != 0) return _memo[i][_k];


    let min = INF;
    _flights.forEach(flight => {
      // 遍历 i 的下一个节点
      if (flight[0] == i) {
        min = Math.min(min, dfs(_flights, flight[1], _dst, _k - 1, _memo) + flight[2]);
      }
    });
    _memo[i][_k] = min;
    return min;
  }

  let memo = new Array(n).fill(0).map(() => new Array(k + 2).fill(0));
  let ans = dfs(flights, src, dst, k + 1, memo);
  return ans >= INF ? -1 : ans;

};

module.exports = findCheapestPrice;