/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  let target = 1;
  
  do {
    if (target * target === num) {
      return true;
    }
    
    target++;
  } while(target * target <= num)
    
    return false;
};