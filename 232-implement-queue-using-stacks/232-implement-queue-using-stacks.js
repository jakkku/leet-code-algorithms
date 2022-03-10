
var MyQueue = function() {
  this.input = [];
  this.output = [];
  
  this.switch = () => {
    const [from, to] = this.input.length
      ? [this.input, this.output]
      : [this.output, this.input];
    
    while (from.length) {
      to.push(from.pop());
    }
  };
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  if (!this.input.length) {
    this.switch();
  }
  
  this.input.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  if (!this.output.length) {
    this.switch();
  }
  
  return this.output.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  if (!this.output.length) {
    this.switch();
  }
  
  return this.output.at(-1);
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return !this.input.length && !this.output.length ;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */