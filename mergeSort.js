function split(wholeArray) {

  /* your code here to define the firstHalf and secondHalf arrays */
  if (wholeArray.length < 2) {
    return wholeArray
  } else {
    const mid = Math.floor(wholeArray.length / 2);
    const firstHalf = wholeArray.splice(0, mid);
    const secondHalf = wholeArray;
    return [firstHalf, secondHalf];
  }
}

function merge(arr) {
  const [first, second] = arr;
  let result = [];

  let f = 0;
  let s = 0;

  while (f < first.length && s < second.length) {
    if (first[f] <= second[s]) {
      result.push(first[f]);
      f++;
    } else {
      result.push(second[s]);
      s++;
    }
  }

  if (f < first.length) {
    result = [...result, ...first.slice(f)]
  } else {
    result = [...result, ...second.slice(s)]
  }
  return result
}

function mergeSort(arr) {

  if (arr.length < 2) {
    return arr;
  } else {
    const [splitF, splitS] = split(arr);

    const first = mergeSort(splitF);
    const second = mergeSort(splitS);
    console.log(merge([first, second]))
    return merge([first, second])
  }
}

mergeSort([6, 4, 1, 7, 5, 99])
