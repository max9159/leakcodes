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

 var maxVal = 0;
 var tempDepth = 1;
 function traverse(root) {
   if (root === null) return;
 
   tempDepth++;
   if (root.left === null && root.right === null) {
     maxVal = Math.max(maxVal, tempDepth);
     tempDepth = 1;
   }
   
   traverse(root.left);
   traverse(root.right);
 }
 
 var maxDepth = function (root) {
   traverse(root);
   return maxVal;
 };