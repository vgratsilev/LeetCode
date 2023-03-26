### [&#8592; Back to other problems](../../README.md)

## 122. [Best Time to Buy and Sell Stock II](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/)

You are given an integer array `prices` where `prices[i]` is the price of a given stock on the
<code>i<sup>th</sup></code> day.

On each day, you may decide to buy and/or sell the stock. You can only hold **at most one** share of
the
stock at any time. However, you can buy it then immediately sell it on the **same day**.

Find and return *the **maximum** profit you can achieve*.

##### Examples

**Example 1:**

<pre>
<b>Input:</b> prices = [7,1,5,3,6,4]
<b>Output:</b> 7
<b>Explanation:</b> Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
Total profit is 4 + 3 = 7.
</pre>

**Example 2:**

<pre>
<b>Input:</b> prices = [1,2,3,4,5]
<b>Output:</b> 4
<b>Explanation:</b> Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
Total profit is 4.
</pre>

**Example 3:**

<pre>
<b>Input:</b> prices = [7,6,4,3,1]
<b>Output:</b> 0
<b>Explanation:</b> There is no way to make a positive profit, so we never buy the stock to achieve the maximum profit of 0.
</pre>

##### Constraints

* <code>1 <= prices.length <= 3 * 10<sup>4</sup></code>
* <code>0 <= prices[i] <= 10<sup>4</sup></code>
