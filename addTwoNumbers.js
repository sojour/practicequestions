function ListNode(val) {
  this.val = val;
  this.next = null;
}

var addTwoNumbers = function (l1, l2) {
  let head, tail;
  let carry = 0;


  while (l1 || l2 || carry) {
    const sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry
    const node = new ListNode(sum % 10);
    carry = parseInt(sum / 10);

    if (!head) {
      head = node;
      tail = node;
    }
    else {
      tail.next = node;
      tail = tail.next;
    }

    l1 = l1 ? l1.next : l1
    l2 = l2 ? l2.next : l2
  }

  return head ? head : null;
};


let l1 = { val: 3, next: { val: 2, next: { val: 6, next: null } } }
let l2 = { val: 3, next: { val: 2, next: { val: 1, next: null } } }


addTwoNumbers(l1, l2)
