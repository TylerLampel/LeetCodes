/*
 * @lc app=leetcode id=94 lang=javascript
 *
 * [94] Binary Tree Inorder Traversal
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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  if (!root) {
    return [];
  }

  const result = [];
  const nodesToTraverse = [];

  let currentNode = root;

  while (nodesToTraverse.length || currentNode) {
    while (currentNode) {
      nodesToTraverse.push(currentNode);
      currentNode = currentNode.left;
    }

    currentNode = nodesToTraverse.pop();
    result.push(currentNode.val);
    currentNode = currentNode.right;
  }

  return result;
};
// @lc code=end
