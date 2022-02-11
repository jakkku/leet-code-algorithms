/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  const cookies = s.sort((a, b) => a - b);
  const children = g.sort((a, b) => a - b);
  let result = 0;
  let lastIndex = 0;
  
  cookies.forEach((cookie) => {
    for (let i = lastIndex; i < children.length; i++) {
      if (children[i] > cookie) continue;

      result++;
      lastIndex = i + 1;
      return;
    }
  });
  
  return result;
};