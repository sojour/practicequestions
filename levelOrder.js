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


//n-ary tree
var levelOrder = function (root) {
  let result = [];

  if (!root) {
    return result;
  }

  let queue = [root]
  let interQueue = [];

  while (queue.length) {
    let len = queue.length;

    for (let j = 0; j < len; j++) {
      let node = queue.shift();
      interQueue.push(node.val)
      for (let i = 0; i < node.children.length; i++) {
        queue.push(node.children[i]);
      }
    }
    result.push(interQueue);
    interQueue = [];


  }
  return result;
};
