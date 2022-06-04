# Algorithm

## Binary Tree
- Hints
  - Default Pattern Codesnipt 
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

## Sliding Window: O(n)
- Hints
  - All positive integers
  - Extend the range til target
  - Move the start and end
- leetcode
  - https://leetcode.com/tag/sliding-window/

## BFS
## DFS
## Dynamic Programing
## Dijkstra’s Algorithm
## Sequece Search: O(n)
## Binary Search: O(log n)
  - array has been srtoed then split 
## merge sort: O(nlogn) 
  - splict then merge result
## quick sort: O(nlogn) 
  - From Left and Right to the mid
## Selection Sort: O(n²)
## Bubble Sort: O(n²)
  - Compare pairs need two - for loop
## 費氏數列(費波那契數列): O(2^n)