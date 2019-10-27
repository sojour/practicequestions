const maxSumSubarray = (arr, k) => {
  let maxValue = -Infinity;
  let currentRunningSum = 0;

  for (let i = 0; i < arr.length; i++) {
    currentRunningSum += arr[i];
    if (i >= k - 1) {
      maxValue = Math.max(maxValue, currentRunningSum)
      currentRunningSum -= arr[i - (k - 1)]
    }
  }
  return maxValue
}

console.log(maxSumSubarray([4, 2, 1, 7, 8, 1, 2, 8, 1, 0], 3))
