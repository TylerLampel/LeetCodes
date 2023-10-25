/*
 * @lc app=leetcode id=168 lang=javascript
 *
 * [168] Excel Sheet Column Title
 */

// @lc code=start
/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    let ans = ''

    while(columnNumber>0){
        let code = (--columnNumber)%26
        ans = String.fromCharCode(code+65) + ans
        columnNumber = (columnNumber-code)/26
    }
    
    return ans
};
// @lc code=end

