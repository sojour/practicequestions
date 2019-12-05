// var swapPairs = function(head) {
//    let newList = new ListNode(0);
//    newList.next = head;

//    let slow = newList;
//    let fast, prev;

//    // 0->1->2
//    while (slow.next && slow.next.next){
//        prev = slow; //0
//        slow = slow.next //1
//        fast = slow.next; //2

//        slow.next = fast.next;
//        fast.next = slow
//        prev.next = fast
//    }
//     return newList.next;
// };

var swapPairs = function (head) {
  if (!head || !head.next) return head;

  let temp = head.next
  head.next = temp.next;
  temp.next = head;
  head.next = swapPairs(head.next);
  return temp;
}
