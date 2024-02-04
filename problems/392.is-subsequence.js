/*
 * @lc app=leetcode id=392 lang=javascript
 *
 * [392] Is Subsequence
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let j = 0
    for(let i=0; i<t.length && j<s.length; i++){
         if(t[i] == s[j])   j++;
    }
    return j == s.length
};
// @lc code=end

