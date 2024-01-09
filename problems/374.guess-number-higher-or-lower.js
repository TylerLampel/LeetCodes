/*
 * @lc app=leetcode id=374 lang=javascript
 *
 * [374] Guess Number Higher or Lower
 */

// @lc code=start
/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    const helperRecursive = (low, high) => {
        const mid = Math.floor((low+high)/2);        
        
        if(guess(mid) === 0) return mid;
        else if(guess(mid) === 1) return helperRecursive(mid+1,high);
        else if(guess(mid) === -1) return helperRecursive(low,mid-1);
        
    }
    
    return helperRecursive(0,n);
};
// @lc code=end

