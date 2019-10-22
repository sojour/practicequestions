var maxDepth = function (root) {
  if (!root) {
    return 0;
  }
  let level = 0;
  let queue = [root];

  while (queue.length) {
    level++;
    let length = queue.length;

    for (let i = 0; i < length; i++) {
      let node = queue.shift();

      for (let j = 0; j < node.children.length; j++) {
        queue.push(node.children[j]);
      }
    }
  }

  return level
};
