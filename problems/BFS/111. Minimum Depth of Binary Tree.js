// primary have a number, 1 is in the front, 2 is behind
class Pqueue {
  constructor() { this.list = [] }
  offer(ele, primary) { primary ? this.list.splice(primary - 1, 0, ele) : this.list.push(ele); }
  size() { return this.list.length; }
  poll() { return this.list.shift(); }
}
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  if (root === null) return 0;
  let q = new Pqueue();
  q.offer(root);
  let depth = 1; // root layer

  while (q.size() > 0) {
    const sz = q.size(); // Declare here avoid queue changes

    // traverse all nodes from a layer
    for (let i = 0; i < sz; i++) {
      let cur = q.poll();
      // encountered end node return depth directly.
      if (cur.left === null && cur.right === null)
        return depth;
      
      if (cur.left !== null)
        q.offer(cur.left);
      if (cur.right !== null)
        q.offer(cur.right);
    }
    // end a layer traverse, to add depth
    depth++;
  }
  return depth;
};
module.exports = minDepth;

