var levelOrder = function (root) {
  if (!root) {
    return [];
  }

  let queue = [root];
  let result = [];

  while (queue.length) {
    let temp = [];
    let length = queue.length;

    for (let i = 0; i < length; i++) {
      //adds all possible children elements from previous set of children
      let current = queue.shift();
      temp.push(current.val)
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
    result.push(temp)

  }
  return result
};
