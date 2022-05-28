var sortArrayByParity = function(nums) {
  if(nums.length < 2)
  return nums;
  
  var newNums = [];
  for (let index = 0; index < nums.length; index++) {
  const isEven = nums[index] % 2 === 0;
  if(isEven)
    newNums.unshift(nums[index]);
  else
    newNums.push(nums[index]);
  }
  return newNums;
};


var sortArrayByParity = function(nums) {
  if(nums.length < 2)
  return nums;
  
  var evenNums = [];
  var oddNums = [];
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    const isEven = element % 2 === 0;
    if(isEven)
      evenNums.push(element);
    else
      oddNums.push(element);
  }
  return [...evenNums,...oddNums];
};