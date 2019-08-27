var majorityElement = function (nums) {
  let result = {}
  let n = nums.length / 2
  if (nums.length === 1) {
    return nums[0]
  }

  for (let i = 0; i < nums.length; i++) {
    let curr = nums[i]
    if (result[curr]) {
      result[curr]++;
      if (result[curr] > n) {
        return curr;
      }
    } else {
      result[curr] = 1;
    }
  }
};
