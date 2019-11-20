function twoSum(arr, sum) {
  let obj = {}
  for (let i = 0; i < arr.length; i++) {
    let difference = sum - arr[i];
    if (obj.hasOwnProperty(difference)) {
      return true;
    } else {
      obj[arr[i]] = difference;
    }
  }
  return false;
}

// let array = [1, 5, 6, 7, 10, 50];
// let sum = 6;

// twoSum(array, sum)


function twoSumDistinct(arr) {
  arr = arr.sort((a, b) => a - b);
  const result = [];

  let l = 0;
  let r = arr.length - 1;

  while (l < r) {
    let currSum = arr[l] + arr[r];

    if (currSum == 0) {
      result.push([arr[l], arr[r]]);
      l++;
      r--;

      while (l < r && arr[l] == arr[l - 1]) {
        l++;
      }

      while (l < r && arr[r] == arr[r + 1]) {
        r--;
      }
    } else if (currSum < 0) {
      l++;
    } else {
      r--;
    }
  }
  return result;
}

console.log(twoSumDistinct([2, 3, 1, 1, 0, -2, -3, -2, -1, -1, -1]));
