//each node contains
//- a piece of data (val)
// - reference to the next node (next)

//each node contains
//- a piece of data (val)
// - reference to the next node (next)

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}


class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      const oldTail = this.tail;
      oldTail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.tail) {
      return undefined;
    } else if (this.tail === this.head) {
      const removed = this.tail;
      this.tail = null;
      this.head = null;
      this.length--;
      return removed;
    } else {
      let current = this.head;
      let temp = this.head.next;
      while (temp.next) {
        current = temp;
        temp = current.next;
      }
      this.tail = current;
      this.tail.next = null;
      this.length--;
      return temp;
    }
  }

  shift() {
    const current = this.head;
    if (!current) {
      return undefined;
    } else if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      this.length--;
      return current;
    } else {
      this.length--;
      this.head = current.next;
      return current;
    }
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      const oldHead = this.head;
      newNode.next = oldHead
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(idx) {
    const current = this.head;
    let counter = 0;

    if (idx < 0 || idx >= this.length) {
      return null;
    } else {
      while (counter !== idx) {
        current = current.next;
        counter++;
      }
    }
    return current;
  }

  set(idx, val) {
    let foundNode = this.get(idx);
    if (foundNode) {
      foundNode.val = val;
      return true;
    } else {
      return false;
    }
  }

  insert(idx, val) {
    const newNode = new Node(val);

    if (idx < 0 || idx > this.length) {
      return undefined;
    } else if (idx === 0) {
      this.unshift(val);
      this.length++;
    } else if (idx === this.length) {
      this.push(val);
      this.length++;
    } else {
      let foundNode = this.get(idx - 1);
      const oldNext = foundNode.next;
      newNode.next = oldNext;
      foundNode.next = newNode;
      this.length++;
    }
  }

  remove(idx) {
    if (idx < 0 || index >= this.length) {
      return undefined;
    } else if (index === 0) {
      this.length--;
      this.shift();
    } else if (index === this.length - 1) {
      this.length--;
      this.pop();
    } else {
      let previousNode = this.get(idx - 1);
      let oneAfter = previousNode.next.next;
      previousNode.next = oneAfter;
      this.length--;
    }
  }

  reverse() {
    let current = this.head;
    this.head = this.tail;
    this.tail = current;

    let next = current.next;
    let prev = null;

    // for (let i = 0; i < this.length; i++) {
    //   next = current.next;
    //   current.next = prev;
    //   prev = current;
    //   current = next;
    // }
    while (next) {
      let sNext = next.next;
      current.next = prev;
      prev = current;
      current = next
      next = sNext;
    }

    this.head.next = prev;
    return this;
  }
}

let a = new SinglyLinkedList();
a.push(1);
a.push(2);
a.push(3);
a.push(4);

a.reverse();
