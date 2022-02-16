/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
  const result = [0];
  let currIdx = 0;
  let endIdx = 0;
  
  for (let i = 0; i < n; i++) {
    result.push(result[currIdx] + 1);
    
    if (currIdx < endIdx) {
      currIdx++;
    } else {
      currIdx = 0;
      endIdx = result.length - 1;
    }
  }
  
  return result;
};
