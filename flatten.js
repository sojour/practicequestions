function ListNode(val) {
  this.val = val;
  this.next = null;
  this.child = null;
}

// function flatten(head) {
//   if (!head) return null;

//   let tail = head;
//   let next = head.next;

//   if (head.child) {
//     head.next = flatten(head.child)
//     head.child = null;
//   }


//   if (next) {
//     tail.next = flatten(next);
//   }

//   return head;
// }


var flatten = function (head) {
  var node = head;
  while (node) {
    if (node.child) {
      var temp = flatten(node.child);
      var end = temp;
      while (end.next) {
        end = end.next;
      }
      end.next = node.next;
      node.next = temp;
      node.child = null;
      node = end;
    }
    node = node.next;
  }
  return head;
};

let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.child = new ListNode(4);
head.next.child.next = new ListNode(5);
head.next.child.next.next = new ListNode(6);

console.log(flatten(head))
