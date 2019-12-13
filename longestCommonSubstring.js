// fish & fosh = 2 from 'sh'

const longestCommonSubstring = (text1, text2) => {

  let dp = new Array(text1.length + 1).fill(0).map(() => new Array(text2.length + 1).fill(0));

  let max = -Infinity;

  for (let i = 1; i <= text1.length; i++) {
    for (let j = 1; j <= text2.length; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
        max = Math.max(max, dp[i][j]);
      }
    }
  }
  return max;
}


console.log(longestCommonSubstring('substring', 'sub'));
