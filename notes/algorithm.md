# Algorithm<!-- omit in toc -->

- [Binary Tree](#binary-tree)
- [N Tree](#n-tree)
- [Two Pointer - Fast and Slow : O(n)](#two-pointer---fast-and-slow--on)
- [Two Pointer - Sliding Window: O(n)](#two-pointer---sliding-window-on)
- [Backtracking](#backtracking)
- [DFS (Depth-First Search)](#dfs-depth-first-search)
- [BFS (Breadth-First Search)](#bfs-breadth-first-search)
- [Dynamic Programing](#dynamic-programing)
  - [DP : Core](#dp--core)
  - [DP : Greedy](#dp--greedy)
- [Binary Search: O(log n)](#binary-search-olog-n)
- [Graph](#graph)
- [Union-Find (Disjoint-set data structure)](#union-find-disjoint-set-data-structure)
- [Dijkstra’s Algorithm (From BFS)](#dijkstras-algorithm-from-bfs)
- [Sequece Search: O(n)](#sequece-search-on)
- [merge sort: O(nlogn)](#merge-sort-onlogn)
- [quick sort: O(nlogn)](#quick-sort-onlogn)
- [Selection Sort: O(n²)](#selection-sort-on)
- [Bubble Sort: O(n²)](#bubble-sort-on)
- [Fibonacci(費氏數列/費波那契數列): O(2^n)](#fibonacci費氏數列費波那契數列-o2n)
- [Code Snippets Of Operation](#code-snippets-of-operation)

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
## N Tree
- Hints
  ```js
  // Travese `N Tree`
  var traverse = function(root) {
    if (root == null) return;
    // Preorder
    for (var i = 0; i < root.children.length; i++) {
      traverse(root.children[i]);
    }
    // Postorder
  };
  ```
## Two Pointer - Fast and Slow : O(n)
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
## Two Pointer - Sliding Window: O(n)
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
- Purpose
  - Focused on `path`
  ```js
  var backtrack = function(root) {
      if (root == null) return;
      for (var i = 0; i < root.children.length; i++) {
          var child = root.children[i];
          // Make Choice
          console.log("from " + root + " To " + child);
          backtrack(child);
          // Decline Choice
          console.log("From " + child + " To " + root);
      }
  };
  ```
- Hints
  - **Backtracking**: check not make sense result then **backtracking**
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
## DFS (Depth-First Search)
- Purpose
  - Focused on `node`
  ```js
  var traverse = function(root) {
      if (root == null) return;
      // Enter the node
      for (var i = 0; i < root.children.length; i++) {
          var child = root.children[i];
          traverse(child);
      }
      // Leave the node
  };
  ```
- Hints
  - **DFS**: check visited node then **backtracking**
  - Use the b-tree concept to traverse nodes with pruning
  - Types
    1. Input nums **No duplicated**, Res **No duplicated**
       1. Just check no duplicated.
    2. Input nums **duplicated**, Res **No duplicated**
       1. Use num !== pre or abosolute position
    3. Input nums **duplicated**, Res **duplicated**

## BFS (Breadth-First Search)
- Hints
  - Getting a shortest path from start to the end in a graph.
  - Two way BFS: need to know the end.
    - Refer problem [752. Open the Lock](../problems/BFS/752.%20Open%20the%20Lock.js)

## Dynamic Programing
- Hints
  - Just start with **Brute Force**
  - Reduce cost by using memo/DP table.

### DP : Core
  - Optimal Substructure
  - State Machine
  - Overlapping Subproblems

### DP : Greedy
- Hints
  - High performance then regular DP
  - Can choose best selection would be greedy
- [253. Meeting Rooms II](/problems/Greedy/253.%20Meeting%20Rooms%20II.js)

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

## Graph
- Directed `Graph` could be kind of [N Tree](#n-tree)
- Directed Acyclic Graph(DAG)
  - No circle

## Union-Find (Disjoint-set data structure)
- [1101. The Earliest Moment When Everyone Become Friends](/problems/UnionFind/1101.%20The%20Earliest%20Moment%20When%20Everyone%20Become%20Friends.js)
- Hints
  - Two variables `parent`, `rank` to mock as a linkedlist
  - Two funcs `union`, `find`, `union` for merging and `find` for checking `parent`

## Dijkstra’s Algorithm (From BFS)
## Sequece Search: O(n)
## merge sort: O(nlogn) 
  - splict then merge result
## quick sort: O(nlogn) 
  - From Left and Right to the mid
## Selection Sort: O(n²)
## Bubble Sort: O(n²)
  - Compare pairs need two - for loop
## Fibonacci(費氏數列/費波那契數列): O(2^n)

## Code Snippets Of Operation
```js

  // -- Array --
  // reduce, map, join, split
  const sum = w.reduce((cur, pre) => pre += cur);
  var morse = { "a": ".-"}
  const str = val.split('').map((char)=> morse[char]).join('');

  if (Array.isArray(_arr))
  let n = 3, k = 4;
  // [1, 2, 3]
  const nums = Array.from({ length: n }).map((_, i) => i + 1); // another way: new Array( n ).fill(0).map((_, i) => i);
  // [false, false, false]
  let used = new Array(n).fill(false);
  // 3 x 4 matrix with number 0 
  let dp = new Array(n).fill(new Array(k).fill(0));
  // shift (remove [0]), pop (remove [last])
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  fruits.shift(); // [ "Orange", "Apple", "Mango"];
  fruits.pop(); // [ "Orange", "Apple"];
  // slice
  const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
  const citrus = fruits.slice(1, 3); // Orange,Lemon
  // splice, No overlap found, insert the booking
  array.splice(left, 0, [start, end]);

  // -- Priority Queue --  
  // use a min-heap/priority queue to track the end time of meetings
  let pq = [intervals[0][1]];
  for(let i = 1; i < intervals.length; i++) {
      if(intervals[i][0] >= pq[0]) {
          // the meeting can take place in the current room, remove the room from the heap
          pq.shift();
      }
      // add the current meeting's end time into the heap
      pq.push(intervals[i][1]);
      pq.sort((a, b) => a - b); // make sure the earliest ending time is at the front
  }
  // the size of the heap gives us the minimum rooms required
  return pq.length;

  // -- string --
  // substr, subString
  var words = "Welcome to the world.";
  //substr (start index, length)
  words.substr(3);　// come to the world.
  words.substr(3,6);　// come t
  //substring (start index, end index)
  words.substring(3);　// come to the world.
  words.substring(3,6); // com
  // fromCharCode
  let char = String.fromCharCode(65); // A
  JSON.stringify({ x: 5, y: 6 });
  
  // --- Object ---
  const object1 = { a: 'somestring', b: 42 };
  for (const [key, value] of Object.entries(object1)) {
    console.log(`${key}: ${value}`);
  }
  const object1 = { a: 'somestring', b: 42, c: false };
  console.log(Object.keys(object1)); // ["a", "b", "c"]
  console.log(Object.values(object1)); // ["somestring", 42, false]
  let obj2 = Object.assign({}, object1);
  // sort
  let sortedByKeysDesc = Object.keys(mapCounter).sort((a, b) => mapCounter[b] - mapCounter[a]);

```
