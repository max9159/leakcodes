// DFS with Flood Fill 
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {

  function dfs(grid, i, j, visited) {
    let m = grid.length, n = grid[0].length;
    // out of index
    if (i < 0 || j < 0 || i >= m || j >= n) return;
    if (grid[i][j] === '0') return;
    grid[i][j] = '0';
    // no need memorized visited caused by using flood fill
    // if (visited[i][j]) return;
    // visited[i][j] = true;

    dfs(grid, i - 1, j, visited);// up
    dfs(grid, i + 1, j, visited);// down
    dfs(grid, i, j - 1, visited);// left
    dfs(grid, i, j + 1, visited);// right

  }

  let res = 0;
  let m = grid.length, n = grid[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === '1') {
        // is island
        res++;
        // DFS with Flood Fill
        // Flood fill, also called seed fill, is a flooding algorithm 
        dfs(grid, i, j);
      }
    }
  }
  return res;
};