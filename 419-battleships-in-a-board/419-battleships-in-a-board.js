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
  
  const isVertical = (x, y) => {
    if (y === col - 1) {
      return false;
    };
    
    return board[y + 1][x] === BODY;
  } 
  
  const compressVertical = (x, y) => {
    if (board[y][x] === EMPTY) return;
    board[y][x] = EMPTY;
    
    if (y === col - 1) return;
    return compressVertical(x, y + 1);
  }
    
  for (let y = 0; y < col; y++) {
    isHolding = false;
    
    for (let x = 0; x < row; x++) {
      const target = board[y][x];
      
      if (target === EMPTY) {
        isHolding = false;
        continue;
      };
      
      if (!isHolding) {
        result++;
        isHolding = true; 
        
        if (isVertical(x, y)) {
          compressVertical(x, y + 1);
          isHolding = false;
        }
      }
    }
  }
  
  return result;
};