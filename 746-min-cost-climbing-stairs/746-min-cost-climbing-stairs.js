/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  const dp = [];
  for (let i = 0; i < cost.length; i++) {
    if (i === 0 || i === 1) {
      dp.push(cost[i]);
      continue;
    }
    
    const sum = cost[i] + Math.min(dp[i - 1], dp[i - 2]);
    dp.push(sum);
  }
  
  return Math.min(...dp.slice(-2));
};