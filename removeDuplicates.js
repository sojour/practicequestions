var removeDuplicates = function (nums) {
  let slow = 0;

  for (let fast = 1; fast < nums.length; fast++) {
    if (nums[fast] !== nums[slow]) {
      slow++;
      nums[slow] = nums[fast];
    }
  }
  console.log(nums);
  console.log(slow + 1);
  return slow + 1;
}

// var removeDuplicates = function (nums) {
//   let counter = 1;
//   let current = nums[0];

//   for (let i = 1; i < nums.length; i++) {
//     if (current !== nums[i]) {
//       counter++;
//       current = nums[i]
//     }
//   }
//   return counter;
// }

nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]

removeDuplicates(nums)
