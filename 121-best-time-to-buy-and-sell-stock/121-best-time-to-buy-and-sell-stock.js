/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  const dp = [];

  prices.map((price, idx, prices) => {
    if (idx === 0) {
      return -price;
    }
    return price - prices[idx - 1];
  }).forEach((profit) => {
    if (!dp.length) {
      dp.push(profit);
      return;
    }
    
    const preProfit = dp.at(-1);
    dp.push(preProfit > 0 ? preProfit + profit : profit);
  });
  
  return Math.max(...dp, 0);
};