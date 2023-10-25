/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const lengthToSearch = nums.length / 2;
    const cache = {};
    
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (!cache[num]) {
            cache[num] = 0;
        }
        cache[num]++;
        
        if (cache[num] >= lengthToSearch) {
            return num;
        }
    }
    
    return null;
};
// @lc code=end

