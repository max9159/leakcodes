/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function (s) {

  if (s.length < 2) return s;

  function isPalindromic(str) {
    const midIndex = Math.floor(str.length / 2);
    let leftIndex = midIndex - 1;
    let rightIndex = str.length % 2 === 0 ? midIndex : midIndex + 1;
    let valdate = false;
    while (leftIndex >= 0 && rightIndex < str.length) {

      if (str[leftIndex] !== str[rightIndex]) {
        return false;
      }
      leftIndex--;
      rightIndex++;
      valdate = true;
    }
    return valdate;
  }

  let subStr = '';
  for (var i = s.length; i >= 1; i--) {
    let left = 0, right = i;
    while (right === s.substr(left, right).length) {
      subStr = s.substr(left, right);
      if (isPalindromic(subStr))
        return subStr;

      left++;
    }
  }
  return subStr;
};