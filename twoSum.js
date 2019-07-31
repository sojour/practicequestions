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

let array = [1, 5, 6, 7, 10, 50];
let sum = 6;

twoSum(array, sum)

