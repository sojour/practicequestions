var maxSubArray = function (nums) {
  let dp = [nums[0],];
  let tracker;
  let largest = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let current = nums[i];
    let pSum = dp[i - 1];
    let tSum = pSum + current;
    if (tSum > current) {
      dp.push(tSum);
      largest = largest > tSum ? largest : tSum;
    } else {
      dp.push(current);
      largest = largest > current ? largest : current;
    }
  }
  console.log(largest)
  return largest;
};

let s = [-2, -3, 4, -1, -2, 1, 5, -3];
let t = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

maxSubArray(t)


