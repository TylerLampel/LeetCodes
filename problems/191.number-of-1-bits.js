/*
 * @lc app=leetcode id=191 lang=javascript
 *
 * [191] Number of 1 Bits
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    n = n.toString(2)
    let count = 0
    console.log(n)
    for(let i = 0; i <= n.length; i++) {
        if(n[i] == 1) count++
    }
    return count
};
// @lc code=end

