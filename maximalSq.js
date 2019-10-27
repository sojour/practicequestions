var maximalSquare = function (matrix) {
  if (matrix == null || matrix.length === 0) return 0;

  if (matrix.length == 1) {
    for (let i = 0; i < matrix[0].length; i++) {
      if (matrix[0][i] == '1') {
        return 1;
      }
    }
    return 0;
  }


  let max = -Infinity;
  let row = matrix.length;
  let col = matrix[0].length;
  let currTop = 0;
  let currTopLeft = 0;
  let currLeft = 0;

  let dp = [];

  for (let i = 0; i < row; i++) {
    dp.push([])
    for (let j = 0; j < col; j++) {
      dp[i].push(0)
    }
  }


  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      let curr = matrix[i][j];

      if (curr == '0') {
        dp[i][j] = 0;
        max = Math.max(0, max);
      } else {
        if (i == 0) {
          currTop = 0;
          currTopLeft = 0;
        } else {
          currTop = parseInt(dp[i - 1][j]);
        }

        if (j == 0) {
          currLeft = 0;
        } else {
          currLeft = parseInt(dp[i][j - 1]);
        }

        if (j == 0 || i == 0) {
          currTopLeft = 0;
        } else {
          currTopLeft = parseInt(dp[i - 1][j - 1]);

        }

        let currMax = Math.min(currLeft, currTop, currTopLeft) + 1;

        max = Math.max(currMax, max);

        dp[i][j] = currMax;
      }
    }
  }
  return max * max;
};
