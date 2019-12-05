var flatten = function (head) {
  let node = head;

  while (node) {
    if (node.child) {
      let n = node.next;

      node.next = node.child;

      let tail = node.child;

      while (tail.next) {
        tail = tail.next;
      }
      tail.next = n;

      if (n) n.prev = tail;

      node.child.prev = node;
      node.child = null;
    }
    node = node.next;
  }
  return head;
};
