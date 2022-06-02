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
 * @return {boolean}
 */
 var isBalanced = function (root) {
  let isBalanced = true;

  function traverse(node, isLeft) {
    if (node === null) {
      return 0;
    }

      let maxLeft = traverse(node.left);
      let maxRight = traverse(node.right);
      if (Math.abs(maxLeft - maxRight) > 1) {
          isBalanced = false;
      }
      return 1 + Math.max(maxLeft, maxRight);        
  }

  traverse(root);
  return isBalanced;
};