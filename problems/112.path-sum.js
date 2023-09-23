/*
 * @lc app=leetcode id=112 lang=javascript
 *
 * [112] Path Sum
 */

// @lc code=start
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (!root) return false;

  let output = false;
  const traverse = (root, sum = 0) => {
    // if targetSum exist at end of path, set output to TRUE
    if (!root.left && !root.right) {
      if (targetSum === sum + root.val) output = true;
    }

    // traverse left/right and keep adding value of nodes in current path
    if (root.left) traverse(root.left, sum + root.val);
    if (root.right) traverse(root.right, sum + root.val);
  };

  traverse(root);
  return output;
};
// @lc code=end
