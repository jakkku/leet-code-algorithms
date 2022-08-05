/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
  const dp = Array.from({ length: target + 1 });
  dp.fill(-1);
  dp[0] = 1;
  
  const _combinationSum = (nums, target) => {
    if (dp[target] !== -1) {
      return dp[target];
    }

    let result = 0;
    for (let i = 0; i < nums.length; i++) {
      if (target - nums[i] >= 0) {
        result += _combinationSum(nums, target - nums[i]);
      }
    }

    dp[target] = result;
    return result;
  }
  
  return _combinationSum(nums, target);
};

