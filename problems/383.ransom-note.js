/*
 * @lc app=leetcode id=383 lang=javascript
 *
 * [383] Ransom Note
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let n = [...ransomNote.split('')];
    let m = [...magazine.split('')];
    let match = 0;
    
    for (let i = 0; i < n.length; i++) {    
      if (m.indexOf(n[i]) !== -1) {      
        match++;
        m.splice(m.indexOf(n[i]), 1)      
      }
    }
    
    return match === n.length
  };
// @lc code=end

