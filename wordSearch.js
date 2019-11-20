var exist = function (board, word) {
  debugger
  const row = board.length;
  const col = board[0].length

  let queue = [];

  let temp = new Array(row).fill(false).map(ele => new Array(col).fill(false));

  let result = false;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (search(board, temp, word, i, j, 0)) return true;
    }
  }

  return result;

};


var search = function (board, temp, word, row, col, idx) {
  if (idx == word.length) return true;
  if (row < 0 || col < 0 || row >= board.length || col >= board[0].length || temp[row][col] || board[row][col] != word[idx]) return false;

  temp[row][col] = true;
  let result = search(board, temp, word, row, col + 1, idx + 1) || search(board, temp, word, row, col - 1, idx + 1) || search(board, temp, word, row + 1, col, idx + 1) || search(board, temp, word, row - 1, col, idx + 1);


  temp[row][col] = false;

  return result;

}
