/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [s[0]];
  const symbolMap = { '(': ')', '[': ']', '{': '}' };
  for (let i = 1; i < s.length; i++) {
    if (symbolMap[stack[stack.length - 1]] === s[i]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }
  return stack.length === 0;
};