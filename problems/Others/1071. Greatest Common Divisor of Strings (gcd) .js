/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    const [smallerString, largerString] = [str1, str2].sort((a,b) => a.length - b.length);
    for (let i = smallerString.length; i > 0; i--) {
        const testString = smallerString.slice(0, i);
        const correctSmaller = !smallerString.split(testString).join('').length;
        const correctLarger = !largerString.split(testString).join('').length;
        if (correctSmaller && correctLarger) return testString;
    }
    return '';
};

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
 const gcdOfStrings = (str1, str2) => {
  // confirm str1 and str2 could be divisible, if not return '';
  if (str1 + str2 !== str2 + str1) return '';
  // Dvisible confirmed just find greatest common divisor by Euclidean algorithm 
  const gcd = (a, b) => (0 === b ? a : gcd(b, a % b));
  return str1.substring(0, gcd(str1.length, str2.length));
};

// 最大公因數 greatest common divisor，gcd
// Euclidean algorithm 輾轉相除法，又稱歐幾里得算法
// Example:
// 252 % 105 = 42
// 105 % 42 = 21
// 42 % 21 = 0
