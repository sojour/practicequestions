//[1,2,3,4,5,6,7];
//[2,3,4,5,6,7,8]
//[2,2,4,5,6,7,8]


function sportsPic(arr1, arr2) {
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  let one = 0;
  let two = 0;

  const flag = arr1[one] < arr2[two] ? true : false;

  while (one < arr1.length && two < arr2.length) {
    if (flag) {
      if (arr1[one] < arr2[two]) {
        one++;
        two++;
      }
      else {
        return false;
      }
    } else {
      if (arr1[one] > arr2[two]) {
        one++;
        two++;
      }
      return false;
    }
  }
  return true;
}


console.log(sportsPic([1, 2, 3, 10, 5, 6, 4], [6, 3, 2, 5, 4, 7, 8]))
