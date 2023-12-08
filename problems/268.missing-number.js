/*
 * @lc app=leetcode id=268 lang=javascript
 *
 * [268] Missing Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let x = nums.reduce((a, b) => a + b, 0);
    let y = (nums.length * (nums.length + 1)) / 2; 
    return y - x;
};
// @lc code=end

