/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {

  if (s.length === 0) return 0;
  if (s.length === 1) return 1;

  let left = 0;
  let right = 0;
  let resultLength = 0;
  let validMap = {};

  while (right < s.length) {

    let char = s[right];
    let isRepating = !!validMap[char];
    validMap[char] = char;

    while (isRepating === true && left < right) {
      isRepating = false;
      let validMapLength = Object.keys(validMap).length;
      resultLength = Math.max(resultLength, validMapLength);

      if (validMapLength > 1) {
        delete validMap[s[left]];
      }
      isRepating = !!validMap[char];

      if (validMapLength > 1 && char === s[left]) {
        validMap[char] = char;
      }
      left++;
    }

    right++;
  }

  if (right === s.length) {
    resultLength = Math.max(resultLength, Object.keys(validMap).length);
  }
  return resultLength;
};

module.exports = lengthOfLongestSubstring;