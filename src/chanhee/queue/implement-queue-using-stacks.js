/** Stack implementation */
var Stack = function () {
  this.stack = [];
  this.length = 0;
};
Stack.prototype.push = function (val) {
  this.stack.push(val);
  this.length += 1;
};
Stack.prototype.pop = function () {
  this.length -= 1;
  return this.stack.pop();
};
Stack.prototype.isEmpty = function () {
  return this.length === 0;
};

var MyQueue = function () {
  this.pushStack = new Stack();
  this.popStack = new Stack();
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.pushStack.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (this.popStack.isEmpty()) {
    while (this.pushStack.length !== 0) {
      this.popStack.push(this.pushStack.pop());
    }
  }
  return this.popStack.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  const val = this.pop();
  this.popStack.push(val);
  return val;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.popStack.isEmpty() && this.pushStack.isEmpty();
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
