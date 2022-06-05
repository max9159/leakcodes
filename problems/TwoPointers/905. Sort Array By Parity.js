/**
 * @param {number[]} nums
 * @return {number}
 */
 var arrayPairSum = function (nums) {
  const sortedNums = nums.sort((a, b) => b - a);
  let sum = 0;
  for (let i = 0; i <= sortedNums.length - 1; i += 2) {
    const nextNum = sortedNums[i + 1];
    sum += nextNum;
  }
  return sum;
};

module.exports = arrayPairSum;
