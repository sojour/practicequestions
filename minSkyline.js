const minSkyline = arr => {
  let counter = 0;
  for (let i = 1; i < arr.length; i++) {
    counter += Math.max(0, arr[i - 1] - arr[i]);
  }
  console.log(counter + arr[arr.length - 1]);
  return counter + arr[arr.length - 1];
}





let arr = [1, 3, 2, 1, 2, 1, 5, 3, 3, 4, 2];
minSkyline(arr)
