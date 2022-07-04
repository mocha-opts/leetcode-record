/*
 * @lc app=leetcode.cn id=860 lang=javascript
 *
 * [860] 柠檬水找零
 */

// @lc code=start
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  var income5 = 0;
  var income10 = 0;
  for (const i of bills) {
    if (i == 5) {
      ++income5;
    } else if (i === 10) {
      if (!income5) return false;
      --income5;
      ++income10;
    } else {
      if (income5 && income10) {
        --income5, --income10;
      } else if (income5 >= 3) {
        income5 -= 3;
      } else {
        return false;
      }
    }
  }
  return true;
};
// @lc code=end
