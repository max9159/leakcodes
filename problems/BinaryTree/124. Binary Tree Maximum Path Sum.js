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
var maxPathSum = function (root) {
  let res = -1001; // the problem's constraints: -1000 <= Node.val <= 1000

  // calculate from root to biggest path sum
  function oneSideMax(root) {
    if (root === null) return 0;

    let leftMaxSum = Math.max(0, oneSideMax(root.left));
    let rightMaxSum = Math.max(0, oneSideMax(root.right));
    // post traverse: update maximum path sum
    let pathMaxSum = root.val + leftMaxSum + rightMaxSum;
    res = Math.max(res, pathMaxSum);
    // left and right tree to plus root val would be maximum sum from root
    return Math.max(leftMaxSum, rightMaxSum) + root.val;
  }

  if (root === null) return 0;
  // to calculate single path and maximum sum
  oneSideMax(root);
  return res;
};