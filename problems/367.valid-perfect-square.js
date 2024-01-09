/*
 * @lc app=leetcode id=367 lang=javascript
 *
 * [367] Valid Perfect Square
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let start = 1;
    let end = num;
    while (start <= end) {
        let middle = start + ((end - start) >> 1);
        let y = num / middle;
        if (y === middle) return true;
        else if (y < middle) end = middle - 1;
        else start = middle + 1;
    }
    return false;
};
// @lc code=end

