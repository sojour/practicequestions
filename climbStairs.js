var climbStairs = function (n) {
  let result = [1, 1];
  for (let i = 2; i < n + 1; i++) {
    result[i] = result[i - 1] + result[i - 2];
  }

  return result[result.length - 1]
};
