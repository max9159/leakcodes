/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permute = function (nums) {

  function backtrack(nums, track, res) {
    if (track.length === nums.length) {
      res.push(track.slice());
      return;
    }

    for(num of nums) {
      if (track.some((n) => n === num)) continue;

      track.push(num);
      backtrack(nums, track, res);
      track.pop();
    }
      return res;
  }

  return backtrack(nums, [], []);
};

module.exports = permute;