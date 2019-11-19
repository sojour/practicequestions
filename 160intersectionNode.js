var getIntersectionNode = function (headA, headB) {
  let copy1A = headA;
  let copy1B = headB;

  let copy2A = headA;
  let copy2B = headB;

  let countA = 0;
  let countB = 0;

  while (copy1A && copy1B) {
    if (countA && countB) {
      if (copy1A == copy1B) {
        return copy1A;
      }
    }

    copy1A = copy1A.next;
    copy1B = copy1B.next

    if (!copy1A && !countA) {
      countA = 1;
      copy1A = copy2B;
    }

    if (!copy1B && !countB) {
      countB = 1;
      copy1B = copy2A;
    }

  }
  return null;
};
