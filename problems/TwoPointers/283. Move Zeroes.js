/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function (nums) {
  let left = 0, right = 0;

  while (right < nums.length) {
    if (nums[right] != 0) {
    let tempLeft = nums[left];
      nums[left] = nums[right];

      left++
      if (tempLeft == 0) {
        nums[right] = 0;
      }
    }
    right++;
  }
};