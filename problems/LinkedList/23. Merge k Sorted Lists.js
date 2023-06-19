/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */


var mergeKLists = function (lists) {
  let dummy = new ListNode(0);
  let pointer = dummy;
  let pq = [];
  lists.forEach(node => {
    if (node) pq.push(node);
  });

  pq.sort((a, b) => a.val - b.val);

  while (pq.length > 0) {
    let smallestNode = pq.shift();
    // cannot assigned to `pointer` diretly, avoid ref change if so, `dummy` won't be change as well.
    pointer.next = smallestNode;
    pointer = pointer.next;

    // sort again for next node list in ascending.
    if (smallestNode.next !== null) {
      pq.push(smallestNode.next);
      pq.sort((a, b) => a.val - b.val);
    }
  }

  return dummy.next;
};
