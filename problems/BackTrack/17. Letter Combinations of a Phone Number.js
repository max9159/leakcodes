/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits === "") return [];
  const numsVals = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
  };

  function dfs(nums, tracks, res, startIndex) {
    if (tracks.length === nums.length) {
      res.push(tracks.join(''));
      return;
    }

    for (var i = startIndex; i < nums.length; i++) {
      const numberLetters = numsVals[nums[i]];
      for (var j = 0; j < numberLetters.length; j++) {
        tracks.push(numberLetters[j]);
        dfs(nums, tracks, res, i + 1);
        tracks.pop();
      }
    }
    return res;
  }

  return dfs(digits.split(''), [], [], 0)
};