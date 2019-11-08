function riverSizes(matrix) {
  // Write your code here.
  const rows = matrix.length;
  const cols = matrix[0].length;
  let result = [];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] == 1) {
        traverse(matrix, i, j, rows, cols, result)
      }
    }
  }

  return result;
}

function traverse(matrix, i, j, rows, cols, result) {
  let queue = [[i, j]];
  let length = 0;

  while (queue.length) {
    //console.log(queue);
    let curr = queue.shift();
    length++;
    matrix[curr[0]][curr[1]] = 0;
    console.log(matrix)
    if (curr[0] > 0) {
      if (matrix[curr[0] - 1][curr[1]] == 1) {
        queue.push([curr[0] - 1, curr[1]]);
        matrix[curr[0] - 1][curr[1]] = 0;
      }
    }
    if (curr[0] < rows - 1) {
      if (matrix[curr[0] + 1][curr[1]] == 1) {
        queue.push([curr[0] + 1, curr[1]]);
        matrix[curr[0] + 1][curr[1]] = 0;

      }
    }
    if (curr[1] < cols - 1) {
      if (matrix[curr[0]][curr[1] + 1] == 1) {
        queue.push([curr[0], curr[1] + 1]);
        matrix[curr[0]][curr[1] + 1] = 0;

      }
    }
    if (curr[1] > 0) {
      if (matrix[curr[0]][curr[1] - 1] == 1) {
        queue.push([curr[0], curr[1] - 1]);
        matrix[curr[0]][curr[1] - 1] = 0;
      }
    }
  }

  if (length > 0) {
    result.push(length)
  }
}


//console.log(riverSizes([[1, 0, 0, 1, 0], [1, 0, 1, 0, 0], [0, 0, 1, 0, 1], [1, 0, 1, 0, 1], [1, 0, 1, 1, 0]]));



console.log(riverSizes([[1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0], [1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0], [0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1], [1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0], [1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1]]));
