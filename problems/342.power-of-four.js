/*
 * @lc app=leetcode id=342 lang=javascript
 *
 * [342] Power of Four
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    if (n <= 0) return false;
    const str = n.toString(4);
    const zerosAmount = str.length - 1;
    const re = `10{${zerosAmount}}`;
    return str.match(re) !== null;
};
// @lc code=end

