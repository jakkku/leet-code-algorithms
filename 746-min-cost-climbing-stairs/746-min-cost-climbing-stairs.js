/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  const dp = [];
  
  cost.forEach((currCost, idx) => {
    if (idx === 0 || idx === 1) {
      dp.push(currCost);
      return;
    }
    
    dp.push(currCost + Math.min(dp[idx - 1], dp[idx - 2]));
  });
  
  return Math.min(...dp.slice(-2));
};