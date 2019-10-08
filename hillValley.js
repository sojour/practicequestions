const hillValley = arr => {

  if (!arr.length) {
    return 0;
  }

  let count = 1;
  let valley = false;


  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] === arr[i]) {
      continue
    } else if (arr[i] > arr[i - 1] && valley) {
      count++;
      valley = false;
    } else if (arr[i] < arr[i - 1] && !valley) {
      count++;
      valley = true;
    }
  }
  return count;

}

console.log(hillValley([]));
console.log(hillValley([4, 1]));
console.log(hillValley([0, 0, 0, 1]));
console.log(hillValley([0, 3, 3, 2, 1, 2, 10, 10]));
