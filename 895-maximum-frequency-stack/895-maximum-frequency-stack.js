
var FreqStack = function() {
  this.freq = {};
  this.stack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
FreqStack.prototype.push = function(val) {
  const count = this.freq[val] ?? 0;
  this.freq[val] = count + 1;
  
  const orderInCount = this.stack[count] ?? [];
  orderInCount.push(val);
  
  if(!this.stack[count]) {
    this.stack[count] = orderInCount;
  } 
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function() {
  const mostFreqs = this.stack.at(-1);
  const mostFreq = mostFreqs.pop();
  
  this.freq[mostFreq]--;
  
  if (!mostFreqs.length) {
    this.stack.pop();
  }
  
  return mostFreq;
};

/** 
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */