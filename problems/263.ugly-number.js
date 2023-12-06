/*
 * @lc app=leetcode id=263 lang=javascript
 *
 * [263] Ugly Number
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
const UGLY = [2,3,5];
var isUgly = function(n) {
    if (UGLY.includes(n) || n == 1) return true;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (!(n%i)) {
            if (!UGLY.includes(n/i)) {
                return isUgly(n/i);
            } else {
                return true;
            }
        }
    }
    
    return false;
};
// @lc code=end

