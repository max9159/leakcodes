/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function (nums) {
  return new Set(nums).size < nums.length;
};

module.exports = containsDuplicate;