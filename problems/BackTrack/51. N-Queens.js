/**
 * @param {number} n
 * @return {string[][]}
 */
String.prototype.replaceAt = function (index, replacement) {
  return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}
var solveNQueens = function (n) {
  let res = [];

  function backTrack(_board, _row) {
    if (_row === _board.length) {
      res.push([..._board]);
      return;
    }

    let n = _board[_row].length;
    for (let col = 0; col < n; col++) {
      if (!isValid(_board, _row, col)) continue;

      // make choise
      _board[_row] = _board[_row].replaceAt(col, 'Q');
      // go next
      backTrack(_board, _row + 1);
      // decline choise
      _board[_row] = _board[_row].replaceAt(col, '.');
    }
  };

  function isValid(__board, __row, __col) {
    let n = __board.length;
    // Check Row
    for (let i = 0; i <= __row; i++) {
      if (__board[i][__col] === 'Q') return false;
    }
    // Check right top
    for (let i = __row - 1, j = __col + 1; i >= 0 && j < n; i--, j++) {
      if (__board[i][j] === 'Q') return false;
    }
    // Check left top
    for (let i = __row - 1, j = __col - 1; i >= 0 && j >= 0; i--, j--) {
      if (__board[i][j] === 'Q') return false;
    }
    // no need others checking
    return true;

  };
  let initRowData = '';
  for (let i = 0; i < n; i++) {
    initRowData += '.';
  }
  let board = Array(n).fill(initRowData);
  backTrack(board, 0);

  return res;
};
module.exports = solveNQueens;