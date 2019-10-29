function removeKthNodeFromEnd(head, k) {
  // Write your code here
  let counter = 1;
  let F = head;
  let S = head;

  while (counter <= k) {
    counter++;
    S = S.next;
  }

  if (!S) {
    head.value = head.next.value;
    head.next = head.next.next;
    return;
  }

  while (S.next) {
    S = S.next;
    F = F.next;
  }
  F.next = F.next.next
}


//2 pass;
function removeKthNodeFromEnd(head, k) {
  // Write your code here.
  let counter = 0;
  let dummy1 = head;
  let dummy2 = head;
  while (dummy1) {
    counter++;
    dummy1 = dummy1.next
  }

  let newCounter = counter - k;
  // let dummy2 = result;
  if (newCounter == 0) {
    head.value = head.next.value;
    head.next = head.next.next;
    console.log(head)
    return
  }

  while (newCounter > 1) {
    newCounter--;
    dummy2 = dummy2.next
  }
  dummy2.next = dummy2.next.next
}
