#
# @lc app=leetcode id=27 lang=ruby
#
# [27] Remove Element
#

# @lc code=start
# @param {Integer[]} nums
# @param {Integer} val
# @return {Integer}
def remove_element(nums, val)
    nums.delete(val)
    nums.compact!
end
# @lc code=end

