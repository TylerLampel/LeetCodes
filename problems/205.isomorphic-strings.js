/*
 * @lc app=leetcode id=205 lang=javascript
 *
 * [205] Isomorphic Strings
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const mapS = new Map();
  const mapT = new Map();

  for (let i = 0; i < s.length; i++) {
    const charS = s[i];
    const charT = t[i];

    if ((!mapS.has(charS) && !mapT.has(charT))) {
      mapS.set(charS, charT);
      mapT.set(charT, charS);
    } else if (mapS.get(charS) !== charT || mapT.get(charT) !== charS) {
      return false;
    }
  }

  return true;
};
// @lc code=end

