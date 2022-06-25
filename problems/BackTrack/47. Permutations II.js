/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {

  function backTrack(nums, tracks, res) {
    if (tracks.length === nums.length) {
      res.push(tracks.slice());
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (memo[i]) continue;
      if (i > 0 && nums[i] === nums[i - 1] && !memo[i - 1]) continue;

      tracks.push(nums[i]);
      memo[i] = true;
      backTrack(nums, tracks, res);
      tracks.pop();
      memo[i] = false;
    }

    return res;
  }
  let memo = new Array(nums.length).fill(false);
  // sorting for the same ele together
  return backTrack(nums.sort((a, b) => a - b), [], []);
};