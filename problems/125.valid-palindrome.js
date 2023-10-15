# @param {String} s
# @return {Boolean}
def is_palindrome(s)
    s = s.downcase.delete("^a-z0-9")
    # s = s.downcase
    left = 0
    right = s.length - 1

    while left < right
        if s[left] == " "
            left += 1
        elsif s[right] == " "
            right -= 1
        elsif s[left] == s[right]
            left += 1
            right -= 1
        else s[left] != s[right]
            return false
        end
    end
    return true
end
