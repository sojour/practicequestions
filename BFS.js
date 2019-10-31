breadthFirstSearch(array) {
  // Write your code here.
  let queue = [this];
  while (queue.length) {
    let current = queue.shift();
    if (current.children.length) {
      for (let i = 0; i < current.children.length; i++) {
        queue.push(current.children[i])
      }
    }
    array.push(current.name)
  }
  return array;
}
