/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
// {val:1,next=list2}
var mergeTwoLists = function (list1, list2) {
  // if (!list1) return list2;
  // if (!list2) return list1;
  // if (list1.val < list2.val) {
  //   list1.next = mergeTwoLists(list1.next, list2);
  //   return list1;
  // } else {
  //   list2.next = mergeTwoLists(list1, list2.next);
  //   return list2;
  // }
  //头节点
  let p = new ListNode(),
    temp = p,
    l1 = list1,
    l2 = list2;
  while (l1 !== null && l2 !== null) {
    if (l1.val >= l2.val) {
      temp.next = l2;
      l2 = l2.next;
    } else {
      temp.next = l1;
      l1 = l1.next;
    }
    temp = temp.next;
  }
  if (l1 !== null) {
    temp.next = l1;
  }

  if (l2 !== null) {
    temp.next = l2;
  }
  return p.next;
};
// @lc code=end
