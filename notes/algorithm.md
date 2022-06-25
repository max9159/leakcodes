# Algorithm

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
      right++;
      validMap[addChar] = (validMap[addChar] || 0) + 1;
      while (validMap[addChar] > 1) {
        let delChar = s[left];
        left++;
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
  - array has been srtoed then split
  - Code Snippet
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