class LockingBinaryTree {
  constructor(val, left = null, right = null, parent = null) {
    this.val = val;
    this.left = left;
    this.right = right;
    this.parent = parent;
    this.isLocked = False;
  }

  isLocked() {
    return this.isLocked;
  }

  lock() {

  }

  unlock() {

  }
}
