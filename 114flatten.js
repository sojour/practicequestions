var flatten = function (root) {
  if (!root) {
    return null;
  }

  let queue = [root];

  let last;

  while (queue.length) {
    let node = queue.shift();

    if (node.right) {
      queue.unshift(node.right)
    }
    if (node.left) {
      queue.unshift(node.left)
    }

    if (!last) {
      last = node
    } else {
      last.right = node;
      last.left = null;
      last = last.right;
    }
  }
};
