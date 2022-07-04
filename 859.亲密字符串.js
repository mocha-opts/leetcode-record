/*
 * @lc app=leetcode.cn id=859 lang=javascript
 *
 * [859] 亲密字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function (s, goal) {
  let [first, second] = [-1, -1];
  if (s.length !== goal.length) return false;
  if (s === goal) return new Set(s.split("")).size < s.length;

  for (let i = 0; i < goal.length; i++) {
    if (s[i] !== goal[i]) {
      if (first === -1) {
        first = i;
      } else if (second === -1) {
        second = i;
      } else {
        return false;
      }
    }
  }
  return (
    second !== -1 && s[first] === goal[second] && s[second] === goal[first]
  );
};
// @lc code=end
