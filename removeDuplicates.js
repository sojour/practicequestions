// var removeDuplicates = function (nums) {
//   let counter = 0;

//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] !== nums[counter]) {
//       counter++;
//       nums[counter] = nums[i];
//     }
//   }
//   console.log(counter + 1);
//   return counter + 1;
// }

var removeDuplicates = function (nums) {
  let counter = 1;
  let current = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (current !== nums[i]) {
      counter++;
      current = nums[i]
    }
  }
  return counter;
}

nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]

removeDuplicates(nums)
