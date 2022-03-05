/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function(matrix) {
  const dp = [];
  
  matrix.forEach((row, y) => row.forEach((val, x) => {
    if (!val) return;
    
    if (!dp[0]) {
      dp.push([]);
    }
    
    dp[0].push([x, y]);
  }));
  
  const literalCount = Math.min(matrix.length, matrix[0].length);
  for (let i = 2; i <= literalCount; i++) {
    const prevIndces = dp[i - 2];
    
    if (!prevIndces) break;
    
    prevIndces.forEach(([x, y]) => {
      let isSquare = true;
      
      if (x + i > matrix[0].length || y + i > matrix.length) return;
      
      for (let j = 0; j < i; j++) {
        if (!matrix[y + i - 1][x + j] || !matrix[y + j][x + i - 1]) return;
      }
      
      if (isSquare) {
        if (!dp[i - 1]) {
          dp[i - 1] = [];
        }
        
        dp[i - 1].push([x, y]);
      }
    });
  }
  
  return dp.reduce((sum, indces) => sum + indces.length, 0);
};