/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function(n) {
  const dp = [
    [1, 1, 1, 1, 1]
  ];
  
  for (let i = 1; i < n; i++) {
    dp[i] = [];
    
    for (let j = 0; j < 5; j++) {
      dp[i][j] = dp[i - 1][j] + (dp[i][j - 1] ?? 0);
    }
  }
  
  return dp[n - 1].reduce((sum, curr) => sum + curr);
};