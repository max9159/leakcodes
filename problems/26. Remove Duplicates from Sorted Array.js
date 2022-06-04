/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function (nums) {
  let left = 0, right = 0;

  while (right < nums.length) { 
    if(nums[right] != nums[left]){
      left++
      nums[left] = nums[right];
    }
    right++;
  }
  return left + 1;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
  let slow = 0
  nums.forEach((n) => {
    if(n !== nums[slow]) {
      slow ++
      nums[slow] = n
    }
  })
  return slow + 1
};
