function isToeplitz(arr) {
	/**
	@param arr: integer[][]
	@return: boolean
	*/

  // your code goes here

  const row = arr[0].length;
  const col = arr.length;

  for (let i = 0; i < col; i++) {
    let r = 0;
    let c = i;
    while (r < row && c < col) {
      let value = arr[c][r];
      if (arr[i][0] !== value) {
        return false;
      } else {
        r++;
        c++
      }
    }
  }

  for (let j = 0; j < row; j++) {
    let r = j;
    let c = 0;
    while (r < row && c < col) {
      let value = arr[c][r];
      if (arr[0][j] !== value) {
        return false;
      } else {
        r++;
        c++
      }
    }
  }

  return true
}
