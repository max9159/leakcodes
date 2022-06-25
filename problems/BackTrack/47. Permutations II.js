/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {

  function backTrack(nums, tracks, res) {
    if (tracks.length === nums.length) {
      const val = JSON.stringify(tracks);
      if(!memo[val]){
        res.push(tracks.slice());
        memo[val] = val;
      }

      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;
      if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue;

      tracks.push(nums[i]);
      used[i] = true;
      backTrack(nums, tracks, res);
      tracks.pop();
      used[i] = false;
    }

    return res;
  }
  let used = new Array(nums.length).fill(false);
  let memo = {};
  // sorting for the same ele together
  return backTrack(nums.sort((a, b) => a - b), [], []);
};