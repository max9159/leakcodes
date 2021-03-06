# Algorithm

- [Algorithm](#algorithm)
  - [Binary Tree](#binary-tree)
  - [Fast and Slow Pointer: O(n)](#fast-and-slow-pointer-on)
  - [Sliding Window(Two pointer): O(n)](#sliding-windowtwo-pointer-on)
  - [Backtracking](#backtracking)
  - [BFS](#bfs)
  - [DFS (Kind of Backtracking)](#dfs-kind-of-backtracking)
  - [Dynamic Programing](#dynamic-programing)
  - [Dijkstra’s Algorithm (From BFS)](#dijkstras-algorithm-from-bfs)
  - [Sequece Search: O(n)](#sequece-search-on)
  - [Binary Search: O(log n)](#binary-search-olog-n)
  - [merge sort: O(nlogn)](#merge-sort-onlogn)
  - [quick sort: O(nlogn)](#quick-sort-onlogn)
  - [Selection Sort: O(n²)](#selection-sort-on)
  - [Bubble Sort: O(n²)](#bubble-sort-on)
  - [費氏數列(費波那契數列): O(2^n)](#費氏數列費波那契數列-o2n)
  
## Binary Tree
- Hints
  - Code snipe
  ``` javascript
    function traverse(root) {
      if (root === null) return;
      // preorder : mid, left, right
      traverse(root.left);
      // inorder : left, mid, right
      traverse(root.right);
      // postorder : left, right, mid
  }
  ```
- leetcode
  - https://leetcode.com/tag/binary-tree/
## Fast and Slow Pointer: O(n)
- Hints
  - Code snipe
  ``` javascript
  function (nums) {
    let left = 0, right = 0;
    while (right < nums.length) { 
      if(nums[right] != nums[left]){
        left++
        nums[left] = nums[right];
      }
      right++;
    }
    return left + 1;
  }; 
  function (head) {
    if (head == null) return null;
    let slow = head, fast = head;
    while (fast != null) {
      if (slow.val != fast.val) {
        slow.next = fast;
        slow = slow.next;
      }
      fast = fast.next;
    }
    slow.next = null;
    return head;
  };
  ```
- leetcode
  - https://leetcode.com/tag/two-pointers/
## Sliding Window(Two pointer): O(n)
- Hints
  - Code Snippet
  ``` javascript
  function (s) {
    let left = 0, right = 0, result = 0;
    let validMap = {};

    while (right < s.length) {
      let addChar = s[right];
      // Increse window size
      right++;
      // ==== (change here) Update data
      validMap[addChar] = (validMap[addChar] || 0) + 1;
      // Verfiy left side need close or not
      while (validMap[addChar] > 1) {
        // remove data from window 
        let delChar = s[left];
        // decrease window size
        left++;
      // ==== (change here) Update data be removed
        validMap[delChar] = (validMap[delChar] || 0) - 1;
      }
      result = Math.max(result, right - left);
    }
    return result;
  };
  ```
  - All positive integers
  - Extend the range til target
  - Move the start and end
- leetcode
  - https://leetcode.com/tag/sliding-window/
## Backtracking
- Hints
  - To traverse roots
  - code snipe
  ```js
  function backTrack(_board, _row) {
    // meet the condition
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
  ```
## BFS
- Hints
  - Getting a shortest path from start to the end in a graph.
  - Two way BFS: need to know the end.
    - Refer problem [752. Open the Lock](../problems/BFS/752.%20Open%20the%20Lock.js)
## DFS (Kind of Backtracking)
- Hints
  - Use the b-tree concept to traverse nodes with pruning
  - Types
    1. Input nums **No duplicated**, Res **No duplicated**
       1. Just check no duplicated.
    2. Input nums **duplicated**, Res **No duplicated**
       1. Use num !== pre or abosolute position
    3. Input nums **duplicated**, Res **duplicated**
## Dynamic Programing
- Hints
  - Init dp table for memo.
  - 
## Dijkstra’s Algorithm (From BFS)
## Sequece Search: O(n)
## Binary Search: O(log n)
- Hints
  - Array has been sorted then split for each loop
  - Scenario 1: Find a number
  ```js
  function binarySeaerch(nums, target) {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
      let mid = left + Math.floor((right - left) / 2);
      if (nums[mid] === target) return mid;
      else if (nums[mid] < target) left = mid + 1;
      else if (nums[mid] > target) right = mid - 1;
    }
    return -1;
  }
  ```
  - Scenario 2
  ``` js
  function lengthOfLIS(nums) {
    let top = Array(nums.length).fill(0);
    let piles = 0;
    for (let i = 0; i < nums.length; i++) {
      let poker = nums[i];
      let left = 0, right = piles;
      while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (top[mid] >= poker)
          right = mid;
        else
          left = mid + 1;
      }
      if (left === piles) piles++;
      top[left] = poker;
    }
    return piles;
  }
  ```

## merge sort: O(nlogn) 
  - splict then merge result
## quick sort: O(nlogn) 
  - From Left and Right to the mid
## Selection Sort: O(n²)
## Bubble Sort: O(n²)
  - Compare pairs need two - for loop
## 費氏數列(費波那契數列): O(2^n)