/*
 * @lc app=leetcode id=101 lang=javascript
 *
 * [101] Symmetric Tree
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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (root == null) return true;
  let left = root.left;
  let right = root.right;
  function chk(left, right) {
    if (!left && !right) return true;
    if (!left || !right || left.val != right.val) return false;
    return chk(left.left, right.right) && chk(left.right, right.left);
  }

  return chk(left, right);
};
// @lc code=end
