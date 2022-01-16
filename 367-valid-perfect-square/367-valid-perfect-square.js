/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  if (num === 1) {
    return true;
  }
  
  for (let i = Math.floor(num / 2); i > 1; i--) {
    if (i * i < num) {
      return false;
    }
    
    if (num === i * i) {
      return true;
    }
  }
};