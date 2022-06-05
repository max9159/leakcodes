// ================================= Sloution 2 ===============================
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {

  function palindrome(str, left, right) {
    while (left >= 0 && right < str.length && str[left] === str[right]) {
      left--;
      right++;
    }
    return str.substring(left + 1, right);å
  }

  let result = '';
  for (var i = 0; i < s.length; i++) {
    const chkSubstr1 = palindrome(s, i, i);
    const chkSubstr2 = palindrome(s, i, i + 1);
    result = result.length > chkSubstr1.length ? result : chkSubstr1;
    result = result.length > chkSubstr2.length ? result : chkSubstr2;

  }
  return result;
};

// ================================ Sloution 1 =========================================
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