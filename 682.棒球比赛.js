/*
 * @lc app=leetcode.cn id=682 lang=javascript
 *
 * [682] 棒球比赛
 */

// @lc code=start
/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
  let record = [];
  let total = 0;
  let point;
  for (const value of ops) {
    if (!isNaN(Number(value))) {
      record.push(Number(value));
      total += Number(value);
    } else {
      switch (value) {
        case "C":
          point = record.pop();
          total -= point;
          break;
        case "D":
          point = 2 * record[record.length - 1];
          record.push(point);
          total += point;
          break;
        case "+":
          point = record[record.length - 1] + record[record.length - 2];
          record.push(point);
          total += point;
          break;
        default:
          break;
      }
    }
  }
  return total;
};
// @lc code=end
