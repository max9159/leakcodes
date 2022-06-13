/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  var res = [];

  function backtrack(nums, track) {
    if (track.length === nums.length) {
      res.push(track.slice());
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (track.some((n) => n === nums[i])) {
        continue;
      }
      track.push(nums[i]);
      backtrack(nums, track);
      track.pop();
    }
  }

  let track = [];
  backtrack(nums, track);
  return res;
};

