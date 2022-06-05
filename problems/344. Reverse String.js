/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseString = function(s) {
  let left = 0, right = s.length - 1;
  while(right > left){
      let tempRight = s[right];
      s[right] = s[left];
      s[left] = tempRight;
      right--;
      left++;
  }
};