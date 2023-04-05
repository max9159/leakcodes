/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {

  function reverse(head){
    let pre = null
    let next
    while(head) {
      next = head.next
      head.next = pre
      pre = head
      head = next
    }
    return pre
  }
  
  return reverse(head)
  
//   let res = new ListNode();
  
//   function recursive(node) {  
//     if(!node) return;
//     recursive(node.next);
//     let temp = node;
//     temp = node;
//     res = temp;
    
//     res.next = node;
//   }
    
//   recursive(head);
  
  
};