/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  function nSum(nums, target, n, start) {

    const numsLength = nums.length;
    let res = [];
    if (n < 2 || numsLength < n) return res;

    if (n === 2) {
      let left = start, right = numsLength - 1;
      while (left < right) {
        let leftVal = nums[left], rightVal = nums[right];
        let sum = leftVal + rightVal;
        if (sum < target) {
          while (left < right && nums[left] === leftVal) left++;
        } else if (sum > target) {
          while (left < right && nums[right] === rightVal) right--;
        } else {
          res.push([leftVal, rightVal]);
          while (left < right && nums[left] === leftVal) left++;
          while (left < right && nums[right] === rightVal) right--;
        }
      }
    } else {
      for (let i = start; i < numsLength; i++) {
        let sub = nSum(nums, target - nums[i], n - 1, i + 1);
        for (let arr of sub) {
          arr.push(nums[i]);
          res.push(arr);
        }
        while (i < numsLength - 1 && nums[i] === nums[i + 1]) i++;
      }
    }

    return res;
  }

  return nSum(nums.sort((a, b) => a - b), 0, 3, 0);

}

// // DFS Solution: Time Limit Exceeded	
// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
// var threeSum = function (nums) {
//   let validMap = {};
//   let tempSum = 0;
//   let firstIndex = 0;
//   function backTrack(nums, tracks, res, startIndex) {
//     if (tracks.length === 3) {
//       // if (tracks.reduce((pre, cur) => pre + cur, 0) === 0) {
//       if (tempSum === 0) {
//         const tracksVal = JSON.stringify(tracks);
//         if (!validMap[tracksVal]) {
//           res.push(tracks.slice());
//           validMap[tracksVal] = tracksVal;
//         }
//       }
//       return;
//     }

//     for (let i = startIndex; i < nums.length; i++) {
//       if (firstIndex === i && nums[i] === nums[i - 1]) {
//         firstIndex++;
//         continue
//       };
//       tracks.push(nums[i]);
//       tempSum += nums[i];
//       backTrack(nums, tracks, res, i + 1);
//       tempSum -= tracks.pop();
//       if (firstIndex === i) {
//         firstIndex++;
//       }
//     }
//     return res;
//   }

//   return backTrack(nums.sort((a, b) => a - b), [], [], 0);
// };
module.exports = threeSum;