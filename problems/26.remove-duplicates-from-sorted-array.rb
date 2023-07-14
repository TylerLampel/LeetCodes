#
# @lc app=leetcode id=26 lang=ruby
#
# [26] Remove Duplicates from Sorted Array
#

# @lc code=start
# @param {Integer[]} nums
# @return {Integer}
def remove_duplicates(nums)
    nums.uniq!
    nums.count
end
# @lc code=end

