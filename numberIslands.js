var numIslands = function (grid) {
  if (!grid.length) {
    return 0;
  }
  let islands = 0;
  let col = grid[0].length;
  let row = grid.length;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] == 1) {
        console.log('here')
        islands++;
        helper(grid, i, j);
      }
    }
  }
  return islands;
};

var helper = function (grid, row, col) {
  let queue = [[row, col]];

  while (queue.length) {
    [currentRow, currentCol] = queue.shift();
    if (currentRow < grid.length && currentRow >= 0 && currentCol < grid[0].length && currentCol >= 0 && grid[currentRow][currentCol] == 1) {
      grid[currentRow][currentCol] = 0;
      queue.push([currentRow + 1, currentCol]);
      queue.push([currentRow - 1, currentCol]);
      queue.push([currentRow, currentCol + 1]);
      queue.push([currentRow, currentCol - 1]);

    }
  }
}
