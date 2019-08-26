var moveZeroes = function (nums) {
  let lastNonZero = 0;
  let temp;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      temp = nums[lastNonZero];
      nums[lastNonZero] = nums[i];
      nums[i] = temp;
      lastNonZero++;
    }
  }
  return nums
};
