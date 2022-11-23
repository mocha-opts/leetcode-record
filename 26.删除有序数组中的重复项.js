/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  //利用双指针，按升序判断是否相等，遇到相等的第一个指针停住，等第二个指针遇见不同的进行赋值覆盖。最后输出数组长度为前一个指针+1。
  // slow 在 0 开始 fast 在 1 开始，去让 fast 向前走 找到和 slow 不重复的元素就 把nums[fast] 赋值给 nums[++slow]

  let slow = 0;
  for (let fast = 1; fast < nums.length; fast++) {
    if (nums[fast] !== nums[slow]) {
      slow++;
      nums[slow] = nums[fast];
    }
  }
  return slow + 1;
};
// @lc code=end
