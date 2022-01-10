/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let head = 0;
  let tail = nums.length - 1;
  
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
    return nums[center] >= target
      ? getPosition(nums, head, center, target)
      : getPosition(nums, center, tail, target);
  }
    
  return getPosition(nums, head, tail, target);
};