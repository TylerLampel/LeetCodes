/*
 * @lc app=leetcode id=344 lang=javascript
 *
 * [344] Reverse String
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let left = 0; // it will start at index 1
    let right = s.length -1 // it will be the last index of array
    while(left<right){
// We will swap the values 
// We will keep swaping untill left is less then right
        let temp = s[left]
        s[left]= s[right]
        s[right] = temp
        left++ // increment left to move forward
        right-- // decrement right so we can reach the center/mid
    }
};
// @lc code=end

