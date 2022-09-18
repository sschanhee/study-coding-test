var MyQueue = function () {
  this.queue = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.queue.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  var tempQueue = [];
  var top = 0;
  while (this.queue.length > 1) {
    top = this.queue[this.queue.length - 1];
    tempQueue.push(top);
    this.queue.pop();
  }

  front = this.queue[this.queue.length - 1];
  this.queue.pop();

  while (tempQueue.length > 0) {
    top = tempQueue[tempQueue.length - 1];
    this.queue.push(top);
    tempQueue.pop();
  }

  return front;
  //return this.queue.shift()
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  return this.queue[0];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.queue.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
