var twoSum = function (nums, target) {
  let num1;
  let num2;
  for (let i = 0; i < nums.length; i++) {
    num1 = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      num2 = nums[j];
      if (num1 + num2 === target) {
        return [i, j];
      }
    }
  }
};
