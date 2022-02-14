/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
  const result = [0];
  const dp = [];
  let addMode = false;
  let dpIdx = 0;
  
  for (let i = 1; i < n + 1; i++) {
    if (!dp.length) {
      result.push(1);
      dp.push(1);
      continue;
    }
    
    if (dpIdx >= dp.length) {
      dpIdx = 0;
      addMode = !addMode;
      
      if (!addMode) {
        dp.push(...result.slice(-dp.length));
        
      }
    }
    
    if (addMode) {
      result.push(dp[dpIdx] + 1);
    } else {
      result.push(dp[dpIdx]);
    }
    
    dpIdx++;
  }
  
  return result;
};