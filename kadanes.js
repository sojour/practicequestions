function kadanesAlgorithm(array) {
  // Write your code here.
  if (!array.length) {
    return 0;
  }

  let currSum = array[0];
  let currMax = array[0];
  for (let i = 1; i < array.length; i++) {
    currSum = Math.max((currSum + array[i]), array[i]);
    currMax = Math.max(currSum, currMax);
  }
  return currMax;
}
