/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  var validMap = {};
  var validTmap = {};

  for (let i = 0; i < s.length; i++) {
    if (validMap[s[i]]) {
      if (validMap[s[i]] !== t[i]) return false;
    } else {
      validMap[s[i]] = t[i];
    }

    if (validTmap[t[i]]) {
      if (validTmap[t[i]] !== s[i]) return false;
    } else {
      validTmap[t[i]] = s[i];
    }
  }

  return true;
};