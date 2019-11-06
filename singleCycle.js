function hasSingleCycle(array) {
  // Write your code here.
  let currIdx = 0;
  let numVisited = 0;

  while (numVisited < array.length) {
    if (numVisited > 0 && currIdx === 0) {
      return false;
    }

    numVisited++;
    currIdx = getCurrIdx(array, currIdx);
  }

  return currIdx === 0;
}

function getCurrIdx(array, currIdx) {
  const jump = array[currIdx];
  const nextIdx = (currIdx + jump) % array.length;
  return nextIdx >= 0 ? nextIdx : nextIdx + array.length;
}


var hasCycle = function (head) {
  if (head == null || head.next == null) {
    return false;
  }

  let slow = head;
  let fast = head.next;

  while (slow != fast) {
    if (fast == null || fast.next == null) {
      return false;
    }
    slow = slow.next;
    fast = fast.next.next;
  }
  return true;

};
