/*
 * @lc app=leetcode id=345 lang=javascript
 *
 * [345] Reverse Vowels of a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
const vowels = ['a', 'e', 'i', 'o', 'u'];

var reverseVowels = function(s) {
    let output = s.split('');
    let cursor1 = 0;
    let cursor2 = s.length - 1;

    while (cursor1 < cursor2) {
        if (vowels.includes(s[cursor1].toLowerCase()) && vowels.includes(s[cursor2].toLowerCase())) {
            [output[cursor1], output[cursor2]] = [output[cursor2], output[cursor1]];
            cursor1++;
            cursor2--;
        }
        if (!vowels.includes(s[cursor1].toLowerCase())) {
            cursor1++;
        }
        if (!vowels.includes(s[cursor2].toLowerCase())) {
            cursor2--;
        }
    }
    
    return output.join('')
    
};
// @lc code=end

