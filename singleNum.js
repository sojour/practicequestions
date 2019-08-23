//no extra space

var singleNumber = function (nums) {
  return nums.reduce((acc, num) => acc ^ num);
};



var singleNumber = function (nums) {
  let result = {};
  for (let i = 0; i < nums.length; i++) {
    if (result[nums[i]]) {
      result[nums[i]]++;
    } else {
      result[nums[i]] = 1;
    }
  }

  for (key in result) {
    if (result[key] === 1) {
      return key;
    }
  }

};
