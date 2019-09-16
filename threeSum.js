function threeNumberSum(array, targetSum) {
  const sortedArray = array.sort((a, b) => a - b);
  let result = [];


  for (let i = 0; i < sortedArray.length - 2; i++) {
    let CN = sortedArray[i];
    let L = i + 1;
    let R = sortedArray.length - 1;
    while (L !== R && R - L > 0) {
      let CS = CN + sortedArray[L] + sortedArray[R]
      if (CS === targetSum) {
        result.push([CN, sortedArray[L], sortedArray[R]]);
        L++;
        R--;
      } else if (CS < targetSum) {
        L++;
      } else if (CS > targetSum) {
        R--;
      }
    }
  }
  console.log(sortedArray)
  console.log(result)
  return result;
}

const a = [12, 3, 1, 2, -6, 5, -8, 6];

threeNumberSum(a, 0)
