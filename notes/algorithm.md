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