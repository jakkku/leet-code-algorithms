/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function(board) {
  const EMPTY = '.';
  const BODY = 'X';
  const TAIL = 'TAIL';
  const col = board.length;
  const row = board[0].length;
  let isHolding = false;
  let result = 0;
  
  const checkVertical = (x, y) => {
    if (y === col - 1) return;
    
    if (board[y + 1][x] === BODY) {
      board[y + 1][x] = TAIL;
      isHolding = false;
    }
  } 
    
  for (let y = 0; y < col; y++) {
    for (let x = 0; x < row; x++) {
      const target = board[y][x];
      
      if (target === EMPTY && isHolding) {
        isHolding = false;
        continue;
      }
      
      if (target === TAIL) {
        checkVertical(x, y);
        continue;
      }
      
      if (target === BODY) {
        if (!isHolding) {
          result++;
          isHolding = true; 
          checkVertical(x, y);
        }
        
        if (x === row - 1) {
          isHolding = false;
        }
      }
    }
  }
  
  return result;
};