function fourNumberSum(array, targetSum) {
  // Write your code here.
  let pairs = {};
  let result = [];

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      const currSum = array[i] + array[j];
      const diff = targetSum - currSum;
      if (diff in pairs) {
        for (const pair of pairs[diff]) {
          result.push(pair.concat([array[i], array[j]]));
        }
      }
    }

    for (let k = i - 1; k >= 0; k--) {
      let currSum = array[i] + array[k];

      if (currSum in pairs) {
        pairs[currSum].push([array[i], array[k]]);
      } else {
        pairs[currSum] = [[array[i], array[k]]]
      }
    }
  }
  return result;
}

console.log(fourNumberSum([1, 2, 3, 4, 5, 6, 7], 10));
