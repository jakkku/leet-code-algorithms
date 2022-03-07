/**
 * @param {number} n
 * @return {number}
 */
var getMaximumGenerated = function(n) {
  const dp = [];
  
  for (let i = 0; i <= n; i++) {
    if (i === 0 || i === 1) {
      dp.push(i);
      continue;
    }
    
    if (i % 2 === 0) {
      dp[i] = dp[i / 2];
    } else {
      dp[i] = dp[(i - 1) / 2] + dp[((i - 1) / 2) + 1];
    }
  }
  
  console.log(dp);
  return Math.max(...dp);
};