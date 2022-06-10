/**
 * @param {number[]} nums
 * @return {number}
 */
 var lengthOfLIS = function(nums) {
  
  let dp = Array(nums.length).fill(1);
  for(let i = 0; i < nums.length; i++){
    for(let j = 0; j < i; j++){
      if(nums[i] > nums[j]) 
        dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }
    
  let res = 0;
  for(let i = 0; i < dp.length; i++){
     res = Math.max(res, dp[i]);
  }

  return res;
};

// ============================ pratice
// 
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var lengthOfLIS = function(nums) {
  
//   let res = 0;
//   let memo =[];
//   for(let i = 0; i < nums.length; i++){
//     memo.push(nums[i]);
//     let tempVal = nums[i];
//     for(let j = i; j < nums.length; j++){
//       if(tempVal < nums[j]) {
//         tempVal = nums[j];
//         memo.push(nums[j]);

//     }
//     res = Math.max(res, memo.length);
//     memo = [];
//   }
    
//   return res;
// };