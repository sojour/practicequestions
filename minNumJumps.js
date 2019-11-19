function minNumberOfJumps(array) {
  // Write your code here.
  const length = array.length;
  const newArray = new Array(length).fill(Infinity);
  newArray[0] = 0;

  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      if (array[j] + j >= i) {
        newArray[i] = Math.min(newArray[i], newArray[j] + 1);
      }
    }
  }
  return newArray[newArray.length - 1];
}
