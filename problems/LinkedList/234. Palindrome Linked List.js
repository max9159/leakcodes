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