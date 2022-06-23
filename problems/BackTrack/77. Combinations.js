/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const nums = Array.from({ length: n }).map((_, i) => i + 1);

  function backTrack(nums, tracks, res, startIndex) {
    if (tracks.length === k) {
      res.push(tracks.slice());
      return;
    }
    for (let i = startIndex; i < nums.length; i++) {
      const num = nums[i];

      tracks.push(num);
      backTrack(nums, tracks, res, i + 1);
      tracks.pop();
    }
    return res;
  }

  return backTrack(nums, [], [], 0);
};

module.exports = combine;