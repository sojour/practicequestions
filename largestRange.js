function largestRange(array) {
  // Write your code here.
  let dict = {};
  let longest = 0;
  let result = [];
  for (let num of array) {
    dict[num] = true;
  }


  for (let num of array) {
    if (!dict[num]) continue;

    dict[num] = false;
    let currentLength = 1;
    let leftNum = num - 1;
    let rightNum = num + 1;


    while (dict[leftNum]) {
      dict[leftNum] = false;
      currentLength++;
      leftNum -= 1;
    }

    while (dict[rightNum]) {
      dict[rightNum] = false;
      currentLength++;
      rightNum += 1;
    }

    if (currentLength > longest) {
      longest = currentLength;
      result = [leftNum + 1, rightNum - 1]
    }
  }
  return result;
}
