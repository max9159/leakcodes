/**
 * 33. Search in Rotated Sorted Array (Medium)
 * 題目需求：給定一個在未知樞紐點旋轉過的升序且無重複整數陣列 nums 與目標值 target，
 *          若 target 存在於陣列中則回傳其索引，否則回傳 -1。
 * 限制條件：必須以 O(log n) 時間複雜度實作。
 * Example: nums = [4, 5, 6, 7, 0, 1, 2], target = 0 -> Output: 4
 */
// Binary Search on Rotated Sorted Array
// Time Complexity: O(log n) | Space Complexity: O(1)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchRotated = function (nums, target) {
  let left = 0, right = nums.length - 1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    // Check if the left half [left...mid] is sorted
    if (nums[left] <= nums[mid]) {
      // Check if target lies within the sorted left half
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      // Otherwise, the right half [mid...right] must be sorted
      // Check if target lies within the sorted right half
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return -1;
};

module.exports = searchRotated;
