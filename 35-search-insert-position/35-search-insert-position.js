/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  const getPosition = (nums, head, tail, target) => {
    if (tail - head <= 1) {
      if (target <= nums[head]) {
        return head;
      } else if (target > nums[tail]) {
        return tail + 1;
      } else {
        return head + 1;
      }
    }
    
    const center = ~~((head + tail) / 2);
    const nextArgs = nums[center] >= target
      ? [nums, head, center, target]
      : [nums, center, tail, target];
    
    return getPosition(...nextArgs);
  }
    
  return getPosition(nums, 0, nums.length - 1, target);
};
