/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  const cookies = s.sort((a, b) => a - b);
  const children = g.sort((a, b) => a - b);
  let result = 0;
  
  cookies.forEach((cookie) => {
    for (let i = 0; i < children.length; i++) {
      if (children[i] > cookie) continue;

      children.splice(i, 1);
      result++;
      return;
    }
  });
  
  return result;
};