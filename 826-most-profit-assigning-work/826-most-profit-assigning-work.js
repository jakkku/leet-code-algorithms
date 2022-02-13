/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function(difficulty, profit, worker) {
   return worker.map((worker) => {
     let maxProfit = 0;
     
     difficulty.forEach((diff, idx) => {
       if (worker < diff || profit[idx] <= maxProfit) return;
       
       maxProfit = profit[idx];
     });
     
     return maxProfit;
   }).reduce((acc, val) => acc + val);
};