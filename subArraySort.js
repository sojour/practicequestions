function subarraySort(array) {
  // Write your code here.
  let localMin = Infinity;
  let localMax = -Infinity;

  for (let i = 0; i < array.length; i++) {
    if (outOfOrder(array, i)) {
      localMin = Math.min(array[i], localMin);
      localMax = Math.max(array[i], localMax);
    }
  }

  if (localMin == Infinity) {
    return [-1, -1];
  }

  let leftIdx = 0;
  let rightIdx = array.length - 1;

  while (localMin >= array[leftIdx]) {
    leftIdx++;
  }

  while (localMax <= array[rightIdx]) {
    rightIdx--;
  }
  return [leftIdx, rightIdx];
}

function outOfOrder(array, index) {
  if (index == 0) return array[index] > array[index + 1];
  if (index == array.length - 1) return array[index] < array[index - 1];
  return array[index] > array[index + 1] || array[index] < array[index - 1];
}
