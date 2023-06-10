/**
 * @param {number[]} w
 */
var Solution = function (w) {
  let n = w.length;
  this.preSum = new Array(n + 1);
  this.preSum[0] = 0;
  for (let i = 1; i <= w.length; i++) {
    this.preSum[i] = this.preSum[i - 1] + w[i - 1];
  }
};

/**
* @return {number}
*/
Solution.prototype.pickIndex = function () {
  let n = this.preSum.length;
  let target = Math.floor(Math.random() * this.preSum[n - 1]) + 1;
  return this.left_bound(this.preSum, target) - 1;
};
Solution.prototype.left_bound = function (nums, target) {
  if (nums.length === 0) return -1;
  let left = 0, right = nums.length;
  while (left < right) {
    var mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === target) {
      right = mid; // target in left side
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid; // target in left side
    }
  }
  return left;
};
/** 
* Your Solution object will be instantiated and called as such:
* var obj = new Solution(w)
* var param_1 = obj.pickIndex()
*/



// Solution 1: 55/57 passed
/**
 * @param {number[]} w
 */
var Solution = function (w) {
  this.w = w;
  // get sum of w
  this.sum = w.reduce((cur, pre) => pre += cur);
  // generate array poll by weight
  this.wPoll = new Array(this.sum);
  // fill poll
  let pIdx = 0;
  // the map of poll and w
  this.pMap = {};
  for (let i = 0; i < this.w.length; i++) {
    let wNum = this.w[i];
    if (wNum === 0) continue;

    for (let j = 0; j < wNum; j++) {
      this.wPoll[pIdx] = wNum;
      this.pMap[pIdx] = i;
      pIdx++;
    }
  }
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function () {
  if (this.w.length <= 1) return 0;
  // Returns a random integer from 0 to 10: Math.floor(Math.random() * 11);
  const rndPoIdx = Math.floor(Math.random() * this.wPoll.length);
  // const res = this.wPoll[rndPoIdx];
  const res = this.pMap[rndPoIdx];
  return res;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */