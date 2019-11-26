var MyStack = function () {
  this.stack = [];
};

/**
* Push element x onto stack.
* @param {number} x
* @return {void}
*/
MyStack.prototype.push = function (x) {
  this.stack.push(x);
};

/**
* Removes the element on top of the stack and returns that element.
* @return {number}
*/
MyStack.prototype.pop = function () {
  for (let i = 1; i < this.stack.length; i++) {
    let ele = this.stack.shift();
    this.stack.push(ele)
  }
  return this.stack.shift();
};

/**
* Get the top element.
* @return {number}
*/
MyStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
* Returns whether the stack is empty.
* @return {boolean}
*/
MyStack.prototype.empty = function () {
  return this.stack.length === 0;
};
