/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {

  let memo = {};

  function backTrack(nums, tracks, res, startIndex) {

    const val = JSON.stringify(tracks);
    if (!memo[val]) {
      res.push(tracks.slice());
      memo[val] = val;
    }

    for (let i = startIndex; i < nums.length; i++) {

      tracks.push(nums[i]);
      backTrack(nums, tracks, res, i + 1);

      tracks.pop();
    }
    return res;
  }

  return backTrack(nums.sort((a, b) => a - b), [], [], 0);

};