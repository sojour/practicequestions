function smallestDifference(arrayOne, arrayTwo) {
  const sortedOne = arrayOne.sort((a, b) => a - b);
  const sortedTwo = arrayTwo.sort((a, b) => a - b);

  let L = 0;
  let R = 0;

  let difference = Infinity

  while (L < sortedOne.length && R < sortedTwo.length) {
    let tempDiff = Math.abs(sortedOne[L] - sortedTwo[R]);
    if (tempDiff === 0) {
      return [sortedOne[L], sortedTwo[R]];
    }
    if (tempDiff < difference) {
      difference = tempDiff;
      result = [sortedOne[L], sortedTwo[R]];
    }

    if (sortedOne[L] < sortedTwo[R]) {
      L++;
    } else if (sortedOne[L] > sortedTwo[R]) {
      R++;
    }

  }
  return result;
}


smallestDifference([-1, 5, 10, 20, 3], [26, 134, 135, 15, 17])
