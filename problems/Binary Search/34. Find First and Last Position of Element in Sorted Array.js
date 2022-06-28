/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {

  function leftBound(nums, target) {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
      let mid = left + Math.floor((right - left) / 2);
      if (nums[mid] < target) {
        left = mid + 1;
      } else if (nums[mid] > target) {
        right = mid - 1;
      } else if (nums[mid] === target) {
        right = mid - 1; // close right pointer
      }
    }
    if (left >= nums.length || nums[left] != target) {
      return -1;
    }
    return left;
  }

  function rightBound(nums, target) {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
      let mid = left + Math.floor((right - left) / 2);
      if (nums[mid] < target) {
        left = mid + 1;
      } else if (nums[mid] > target) {
        right = mid - 1;
      } else if (nums[mid] === target) {
        left = mid + 1; // close left pointer
      }
    }
    if (right < 0 || nums[right] != target) {
      return -1;
    }
    return right;
  }

  return [leftBound(nums, target), rightBound(nums, target)];
};