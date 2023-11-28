/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length!==t.length){
        return false;
    }
    let obj={};
    for(let i=0;i<s.length;i++){
        if(obj[s[i]]==undefined){
            obj[s[i]]=1
        }else{
            obj[s[i]]++;
        }
    }
    for(let i=0;i<t.length;i++){
if(obj[t[i]]==undefined|| obj[t[i]]==0) return false;
else{
    obj[t[i]]--
}
    }
    return true;
};
// @lc code=end

