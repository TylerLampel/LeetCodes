/*
 * @lc app=leetcode id=258 lang=javascript
 *
 * [258] Add Digits
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if (num < 10) {
        return num;
      } else {
        num = [...num.toString()].reduce((a, c) => a + Number(c), 0);
        return addDigits(num);
      }
};
// @lc code=end

