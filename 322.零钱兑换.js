/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 *
 * https://leetcode.cn/problems/coin-change/description/
 *
 * algorithms
 * Medium (46.73%)
 * Likes:    2564
 * Dislikes: 0
 * Total Accepted:    676.9K
 * Total Submissions: 1.4M
 * Testcase Example:  '[1,2,5]\n11'
 *
 * 给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额。
 *
 * 计算并返回可以凑成总金额所需的 最少的硬币个数 。如果没有任何一种硬币组合能组成总金额，返回 -1 。
 *
 * 你可以认为每种硬币的数量是无限的。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：coins = [1, 2, 5], amount = 11
 * 输出：3
 * 解释：11 = 5 + 5 + 1
 *
 * 示例 2：
 *
 *
 * 输入：coins = [2], amount = 3
 * 输出：-1
 *
 * 示例 3：
 *
 *
 * 输入：coins = [1], amount = 0
 * 输出：0
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= coins.length <= 12
 * 1 <= coins[i] <= 2^31 - 1
 * 0 <= amount <= 10^4
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  //dp table 递推
  // var dp = new Array(amount + 1).fill(amount + 1);
  // dp[0] = 0;
  // for (let i = 0; i < dp.length; i++) {
  //   for (let coin of coins) {
  //     if (i - coin >= 0) {
  //       dp[i] = Math.min(dp[i], dp[i - coin] + 1);
  //     }
  //   }
  // }
  // return  (dp[amount] == amount + 1) ? -1 : dp[amount];
 //递归+备忘录
  const memo = new Array(amount + 1).fill(-666);
    // 备忘录初始化为一个不会被取到的特殊值，代表还未被计算
    const dp = (coins, amount) => {
        if (amount == 0) return 0;
        if (amount < 0) return -1;
        // 查备忘录，防止重复计算
        if (memo[amount] !== -666) return memo[amount];

        let res = Infinity;
        for (let coin of coins) {
            // 计算子问题的结果
            let subProblem = dp(coins, amount - coin);

            // 子问题无解则跳过
            if (subProblem === -1) continue;
            // 在子问题中选择最优解，然后加一
            res = Math.min(res, subProblem + 1);
        }
        memo[amount] = (res == Infinity) ? -1 : res;
        return memo[amount];
    }

    return dp(coins, amount);
};
// @lc code=end
