function zigzagTraverse(array) {
  // Write your code here.
  const tRows = array.length - 1;
  const tCols = array[0].length - 1;

  let cRow = 0;
  let cCol = 0;

  const result = [];

  let down = true;

  while (!OOB(cRow, cCol, tRows, tCols)) {
    result.push(array[cRow][cCol]);
    if (down) {
      if (cRow === tRows || cCol === 0) {
        down = false;
        if (cRow === tRows) {
          cCol++;
        } else {
          cRow++;
        }
      } else {
        cCol--;
        cRow++;
      }
    } else {
      if (cRow === 0 || cCol === tCols) {
        down = true;
        if (cRow === 0) {
          cCol++;
        } else {
          cRow--;
        }
      } else {
        cRow--;
        cCol++;
      }
    }

  }
  return result;

}

function OOB(cRow, cCol, tRows, tCols) {
  return cRow < 0 || cRow > tRows || cCol < 0 || cCol > tCols;
}
