/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var allPossibleFBT = function(n) {
  if (n % 2 === 0) {
    return [];
  }
  
  const dp = [[], [new TreeNode(0)]];
  
  for (let i = 3; i <= n ; i += 2) {
    dp[i] = [];
    
    for (let j = 1; j < i; j += 2) {
      const lefts = dp[j];
      const rights = dp[i - j - 1];
      
      for (const left of lefts) {
        for (const right of rights) {
          const root = new TreeNode(0, left, right);
          dp[i].push(root);
        }
      }
    }
  }
  
  return dp[n];
};