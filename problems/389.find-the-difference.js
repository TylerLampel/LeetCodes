/*
 * @lc app=leetcode id=389 lang=javascript
 *
 * [389] Find the Difference
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    for (let i = 0; i < s.length; i++) {
        t = t.replace(s[i], '')
    }
    return t;
};
// @lc code=end

