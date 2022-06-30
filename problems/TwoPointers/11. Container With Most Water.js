/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0, right = height.length - 1, result = 0;
  while (left < right) {
    let curArea = Math.min(height[left], height[right]) * (right - left);
    result = Math.max(result, curArea);
    // move smaller one
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return result;
};