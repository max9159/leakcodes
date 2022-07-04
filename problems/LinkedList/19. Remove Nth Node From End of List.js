/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {

  function findFromEnd(head, k) {
    let p1 = head;
    // e.g. head = [1,2,3,4,5], n = 2
    // p1 will be [3,4,5], p2 will be [3,4,5]
    // p1 go k steps 
    for (let i = 0; i < k; i++) {
      p1 = p1.next;
    }

    // p1 and p2 go n - k steps
    let p2 = head;
    while (p1 != null) {
      p2 = p2.next;
      p1 = p1.next;
    }
    // p2 point to n - k + 1 node
    return p2;
  }

  let dummy = new ListNode(-1);
  dummy.next = head;
  // find the target node
  let x = findFromEnd(dummy, n + 1);
  // delete the target node
  // Notice that LinkedList remove data call by ref should replace 'next'
  x.next = x.next.next; 
  return dummy.next;
};