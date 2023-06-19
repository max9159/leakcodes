/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {

  function traverse(right) {
    if(right === null) return true;
    let res = traverse(right.next);
    // postorder

    // right pointer from last val
    // left pointer from first val 
    res = res && (right.val === left.val);
    // after comparison left move to next node
    left = left.next;
    return res;
  }

  let left = head; // is left pointer
  return traverse(head);
};

// timecomplexity Big(N) ,space complexity Big(1) 
// Solution 2 : Get middle of the node
// boolean isPalindrome(ListNode head) {
//   ListNode slow, fast;
//   slow = fast = head;
//   // ============ Hints : fast pointer always move 2 nodes more than slow pointer ===========
//   while (fast != null && fast.next != null) {
//       slow = slow.next;
//       fast = fast.next.next;
//   }
  
//   if (fast != null)
//       slow = slow.next;
  
//   ListNode left = head;
//   ListNode right = reverse(slow);
//   while (right != null) {
//       if (left.val != right.val)
//           return false;
//       left = left.next;
//       right = right.next;
//   }
  
//   return true;
// }

// ListNode reverse(ListNode head) {
//   ListNode pre = null, cur = head;
//   while (cur != null) {
//       ListNode next = cur.next;
//       cur.next = pre;
//       pre = cur;
//       cur = next;
//   }
//   return pre;
// }