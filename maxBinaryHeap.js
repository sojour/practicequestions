class maxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(val) {
    this.values.push(val);

    this._heapUp();
    return this;
  }

  extractMax() {
    let max = this.values[0];
    this.values[0] = this.values.pop();
    this._heapDown();

    return max;
  }

  _heapUp() {
    let i = this.values.lenght - 1;
    let parentI = Math.floor((i - 1) / 2);

    while (i > 0 && this.values[parentI] < this.values[i]) {
      this._swap(parentI, i);
      i = parentI;
      parentI = Math.floor((parentI - 1) / 2);
    }
    return this;
  }

  _swap(parent, child) {
    let temp = this.values[parent];
    this.values[parent] = this.values[child];
    this.values[child] = temp;
  }

  _heapDown() {
    let i = 0;
    let [left, right] = this._getChildren(i);
    let largestIdx;

    while (left < this.values.length) {
      if (right < this.values.length) {
        largestIdx = this.values[left] > this.values[right] ? left : right;
      } else {
        largestIdx = left
      }


      if (this.values[i] < this.values[largestIdx]) {
        this._swap(i, largestIdx);
        i = largestIdx;
        [left, right] = this._getChildren(i);
      } else {
        return this;
      }
    }
    return this;
  }

  _getChildren(i) {
    const left = (2 * i) + 1;
    const right = (2 * i) + 2;

    return [left, right];
  }
}
