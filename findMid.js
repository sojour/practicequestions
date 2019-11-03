function findMid(head) {
  let mid = head;
  let count = 0;
  let tracker = head;
  while (tracker) {
    counter++;
    if (count % 2 === 0) {
      mid = tracker;
    }
    tracker = tracker.next;
  }
  return mid;
}
