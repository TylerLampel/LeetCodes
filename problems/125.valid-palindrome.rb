#
# @lc app=leetcode id=125 lang=ruby
#
# [125] Valid Palindrome
#

# @lc code=start
# @param {String} s
# @return {Boolean}
def is_palindrome(s)
    # Filtering of alphanumeric characters and changing to downcase
    letters = s.downcase.chars.filter{ |char| ("a".."z").include?(char) || ("0".."9").include?(char)}

    # Two pointers 
    right = 0
    left = letters.length - 1
    
    # Verification of palindromes from right and left
    while right <= left do
       if letters[right] == letters[left]
            right += 1
            left -= 1
        else
            return false
       end
    end
    true
end
# @lc code=end

