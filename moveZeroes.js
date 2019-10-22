var moveZeroes = function (nums) {
  let zeroP = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[zeroP] = nums[i];
      zeroP++;
    }
  }

  for (let j = zeroP; j < nums.length; j++) {
    nums[j] = 0;
  }
  return nums
};
