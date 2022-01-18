/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  const operators = {
    '+': (a) => (b) => a+b,
    '-': (a) => (b) => a-b,
    '*': (a) => (b) => a*b,
    '/': (a) => (b) => Math.floor(a/b),
  };
  
  const calculate = (acc, val) => {
    if (val in operators) {
      return operators[val](parseInt(acc));
    }
    return acc(parseInt(val));
  }
  
  return s.split(/(?=[\+\-])|(?<=[\+\-])/g).map((chunk) => {
    if (chunk.length === 1) {
      return chunk;
    }
    
    return chunk.split(/(?=[\*\/])|(?<=[\*\/])/g).reduce((acc, val) => {
      return calculate(acc, val);
    });
  }).reduce((acc, val) => {
    return calculate(acc, val);
  });
};
