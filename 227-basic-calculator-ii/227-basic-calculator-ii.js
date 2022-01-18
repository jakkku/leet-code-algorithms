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
  
  return s.split(/(?=[\+\-])|(?<=[\+\-])/g).map((chunk) => {
    if (chunk.length === 1) {
      return chunk;
    }
    
    return chunk.split(/(?=[\*\/])|(?<=[\*\/])/g).reduce((acc, val) => {
      if (val === '*' | val === '/') {
        return operators[val](acc);
      }
      return acc(val);
    });
  }).reduce((acc, val) => {
    if (val === '+' | val === '-') {
      return operators[val](parseInt(acc));
    }
    return acc(+val);
  });
};