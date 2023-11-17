/*
 * @lc app=leetcode id=226 lang=javascript
 *
 * [226] Invert Binary Tree
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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if( root != null ){
        
        // General case:
        // invert child node of current root
        [root.left, root.right] = [root.right, root.left];
        
        // invert subtree with DFS
        invertTree(root.left);
        invertTree(root.right);
        return root;
        
    }else{
        
        // Base case:
        // empty tree or empty node
        return null; 
    }
};
// @lc code=end

