/*
 * @Author: coconut 1424392205@qq.com
 * @Date: 2022-12-21 10:27:35
 * @LastEditors: coconut 1424392205@qq.com
 * @LastEditTime: 2022-12-21 11:35:20
 * @FilePath: /leetcode-record/19.删除链表的倒数第-n-个结点.js
 * @Description:
 *
 * Copyright (c) 2022 by coconut 1424392205@qq.com, All Rights Reserved.
 */
/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
 *
 * https://leetcode.cn/problems/remove-nth-node-from-end-of-list/description/
 *
 * algorithms
 * Medium (44.88%)
 * Likes:    2340
 * Dislikes: 0
 * Total Accepted:    996.5K
 * Total Submissions: 2.2M
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：head = [1,2,3,4,5], n = 2
 * 输出：[1,2,3,5]
 *
 *
 * 示例 2：
 *
 *
 * 输入：head = [1], n = 1
 * 输出：[]
 *
 *
 * 示例 3：
 *
 *
 * 输入：head = [1,2], n = 1
 * 输出：[1]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 链表中结点的数目为 sz
 * 1 <= sz <= 30
 * 0 <= Node.val <= 100
 * 1 <= n <= sz
 *
 *
 *
 *
 * 进阶：你能尝试使用一趟扫描实现吗？
 *
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let p1 = head;
  let p2 = p1;
  let p3 = p2;
  if (p1.next == null) {
    return null;
  }
  for (let i = 0; i < n; i++) {
    p1 = p1.next;
  }
  if (p1 == null) {
    p2 = p2.next;
    return p2;
  }
  p1 = p1.next;
  while (p1 !== null) {
    p1 = p1.next;
    p2 = p2.next;
  }
  p2.next = p2.next.next;
  return p3;
};
// @lc code=end
