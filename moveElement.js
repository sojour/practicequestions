function moveElementToEnd(array, toMove) {
  // Write your code here.
  let counter = array.indexOf(toMove);
  if (counter == -1) {
    return array;
  }

  for (let i = 0; i < array.length; i++) {
    if (i > counter && array[i] !== toMove) {
      let temp = array[i];
      array[i] = array[counter];
      array[counter] = temp;
      counter++;
    }
  }
  return array;

}
