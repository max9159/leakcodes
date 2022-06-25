/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {

  function backTrack(candidates, tracks, res, startIndex, sum) {
    if (sum === target) {
      res.push(tracks.slice());
      return;
    }

    if (sum > target) return;

    for (let i = startIndex; i < candidates.length; i++) {
      const num = candidates[i];

      // choice
      tracks.push(num);
      sum += num;
      // backtrack
      backTrack(candidates, tracks, res, i, sum);
      // revert choice
      tracks.pop();
      sum -= num;
    }

    return res;
  }

  return backTrack(candidates, [], [], 0, 0)
};