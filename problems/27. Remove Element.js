/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
  let left = 0, right = 0;

  while (right < nums.length) { 
    if(nums[right] != val){
      nums[left] = nums[right];
      left++
    }
    right++;
  }
  return left;
};