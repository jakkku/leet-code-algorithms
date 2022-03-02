/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let result = 0;
  let curProfit = 0;
  
  for (let i = 1; i < prices.length; i++) {
    curProfit = Math.max(curProfit + prices[i] - prices[i - 1], 0);
    result = Math.max(curProfit, result);
  }
  
  return result;
};