/*
 * @lc app=leetcode id=338 lang=javascript
 *
 * [338] Counting Bits
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let result = [];

    function countBits(n) {
        let count = 0;

        while (n > 0) {
            if (n & 1) {
                count++;
            }
            n >>= 1;
        }

        return count;
    }

    for (let i = 0; i <= n; i++) {
        result.push(countBits(i));
    }

    return result;
};
// @lc code=end

