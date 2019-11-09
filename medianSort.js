function medianSort(arr) {
  //logic: use the built in .sort method
  //check if element one or two is an array, if it is, extract the median and use that to compare
  //if it isn't an array, set it to the 'median' as a placeholder
  return arr.sort((one, two) => {
    let medianOne = one;
    let medianTwo = two;
    if (Array.isArray(one)) {
      const tempOne = [...one];
      const tempOneSorted = tempOne.sort((a, b) => a - b);
      const lengthOne = tempOneSorted.length;
      const midOne = Math.floor(lengthOne / 2)
      if (midOne % 2 == 1) {
        medianOne = tempOneSorted[midOne];
      } else if (midOne % 2 == 0) {
        medianOne = (tempOneSorted[midOne] + tempOneSorted[midOne + 1]) / 2
      }
    }
    if (Array.isArray(two)) {
      const tempTwo = [...two];
      const tempTwoSorted = tempTwo.sort((a, b) => a - b);
      const lengthTwo = tempTwoSorted.length;
      const midTwo = Math.floor(lengthTwo / 2)
      if (midTwo % 2 == 1) {
        medianTwo = tempTwoSorted[midTwo];
      } else if (midTwo % 2 == 0) {
        medianTwo = (tempTwoSorted[midTwo] + tempTwoSorted[midTwo + 1]) / 2
      }
    }

    //where the sorting is done!
    return medianOne - medianTwo;
  })
}

console.log(medianSort([3, [-2, 4, 9]]));

console.log(medianSort([[2.4, 0.2, 9.8], 0, [-1], [-9, -4]]));

console.log(medianSort([[12, 9, 1, 25], 4]))
