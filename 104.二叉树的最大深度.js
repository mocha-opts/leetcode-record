/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
 *
 * https://leetcode.cn/problems/maximum-depth-of-binary-tree/description/
 *
 * algorithms
 * Easy (77.18%)
 * Likes:    1693
 * Dislikes: 0
 * Total Accepted:    1.1M
 * Total Submissions: 1.4M
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树 root ，返回其最大深度。
 *
 * 二叉树的 最大深度 是指从根节点到最远叶子节点的最长路径上的节点数。
 *
 *
 *
 * 示例 1：
 *
 *
 *
 *
 *
 *
 * 输入：root = [3,9,20,null,null,15,7]
 * 输出：3
 *
 *
 * 示例 2：
 *
 *
 * 输入：root = [1,null,2]
 * 输出：2
 *
 *
 *
 *
 * 提示：
 *
 *
 * 树中节点的数量在 [0, 10^4] 区间内。
 * -100 <= Node.val <= 100
 *
 *
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
//一棵二叉树的最大深度可以通过子树的最大深度推导出来
var maxDepth = function (root) {
  if (root == null) {
    return 0;
  }
  // 利用定义，计算左右子树的最大深度
  let leftMax = maxDepth(root.left);
  let rightMax = maxDepth(root.right);
  // 整棵树的最大深度等于左右子树的最大深度取最大值，
  // 然后再加上根节点自己
  let res = Math.max(leftMax, rightMax) + 1;

  return res;
};

// @lc code=end
