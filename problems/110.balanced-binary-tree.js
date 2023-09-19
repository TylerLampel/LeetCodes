/*
 * @lc app=leetcode id=110 lang=javascript
 *
 * [110] Balanced Binary Tree
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
var isBalanced = function (root) {
  let dfs = function (root) {
    if (!root) {
      return 0;
    }
    let lh = 1 + dfs(root.left);
    let rh = 1 + dfs(root.right);
    if (Math.abs(lh - rh) > 1) {
      return Infinity;
    } else {
      return Math.max(lh, rh);
    }
  };

  return dfs(root) == Infinity ? false : true;
};
// @lc code=end
