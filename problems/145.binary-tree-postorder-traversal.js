/*
 * @lc app=leetcode id=145 lang=javascript
 *
 * [145] Binary Tree Postorder Traversal
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
var postorderTraversal = function(root) {
    const result = [];
    const stack = [root];

    while (stack.length) {
        const node = stack.pop();

        if (node) {
            result.push(node.val);

            //It is important that we stack the left first, then the right 
            //(in the preorder soluton, we do the opposite)
            stack.push(node.left, node.right); 
        }
    }

    //And at the end we reverse the array (it remains as it is in the preorder solution)
    return result.reverse(); 
};
// @lc code=end

