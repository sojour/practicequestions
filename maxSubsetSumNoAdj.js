function maxSubsetSumNoAdjacent(array) {
  if (array.length === 0) {
    return 0;
  } else if (array.length === 1) {
    return array[0];
  } else {

    let second = Math.max(array[0], array[1]);
    let maxSums = [array[0], second];

    for (let i = 2; i < array.length; i++) {
      let first = maxSums[maxSums.length - 1];
      let second = +(maxSums[maxSums.length - 2] + array[i]);
      let current = Math.max(first, second);

      maxSums[0] = first;
      maxSums[1] = current;
    }
    console.log(maxSums)
    return maxSums[1];
  }
}

maxSubsetSumNoAdjacent([75, 105, 120, 90, 135])
