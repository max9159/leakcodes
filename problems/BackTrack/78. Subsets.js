/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {

  // tracks = record path
  function backTrack(nums, tracks, res, startIndex) {
    res.push(tracks.slice());
 
    for (let i = startIndex; i < nums.length; i++) {
      const num = nums[i];

      // choice
      tracks.push(num);
      // backtrack
      backTrack(nums, tracks, res, i + 1);
      // revert choice
      tracks.pop();
    }

    return res;
  }

  return backTrack(nums, [], [], 0)

};