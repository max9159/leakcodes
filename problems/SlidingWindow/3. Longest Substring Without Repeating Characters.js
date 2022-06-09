// ========================== Solution 3 =======================================
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length === 1) return 1;
  let map = {};
  let left = 0, right = 1;
  let res = 0;
  map[s[left]] = 1;

  while (right < s.length) {

    if (map[s[right]] && map[s[right]] === 1) {
      if (s[left] === s[right]) {
        left++;
        res = Math.max(res, right - left + 1);
        right++;
      } else {
        map[s[left]] = 0;
        left++;
      }

    } else {
      res = Math.max(res, right - left + 1);
      map[s[right]] = 1;
      right++;
    }
  }

  return res;
};
/**
 * @param {string} s
 * @return {number}
 */
// -------------------------- Solution 2 --------------------------------------
// var lengthOfLongestSubstring = function (s) {
//   let left = 0;
//   let right = 0;
//   let result = 0;
//   let validMap = {};

//   while (right < s.length) {
//     let c = s[right];
//     right++;
//     validMap[c] = (validMap[c] || 0) + 1;
//     while (validMap[c] > 1) {
//       let d = s[left];
//       left++;
//       validMap[d] = (validMap[d] || 0) - 1;
//     }
//     result = Math.max(result, right - left);
//   }
//   return result;
// };

// -------------------------- Solution 1 --------------------------------------
// var lengthOfLongestSubstring = function (s) {

//   if (s.length === 0) return 0;
//   if (s.length === 1) return 1;

//   let left = 0;
//   let right = 0;
//   let resultLength = 0;
//   let validMap = {};

//   while (right < s.length) {

//     let char = s[right];
//     let isRepating = !!validMap[char];
//     validMap[char] = char;

//     while (isRepating === true && left < right) {
//       isRepating = false;
//       let validMapLength = Object.keys(validMap).length;
//       resultLength = Math.max(resultLength, validMapLength);

//       if (validMapLength > 1) {
//         delete validMap[s[left]];
//       }
//       isRepating = !!validMap[char];

//       if (validMapLength > 1 && char === s[left]) {
//         validMap[char] = char;
//       }
//       left++;
//     }

//     right++;
//   }

//   if (right === s.length) {
//     resultLength = Math.max(resultLength, Object.keys(validMap).length);
//   }
//   return resultLength;
// };

module.exports = lengthOfLongestSubstring;