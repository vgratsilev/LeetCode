### [&#8592; Back to other problems](../../README.md)

## 441. [Arranging Coins](https://leetcode.com/problems/arranging-coins/)

You have `n` coins and you want to build a staircase with these coins. The staircase consists of `k`
rows where the <code>i<sup>th</sup></code> row has exactly `i` coins. The last row of the staircase
may be incomplete.

Given the integer `n`, return *the number of **complete rows** of the staircase you will build*.

##### Examples

**Example 1:**

![coins example 1](assets/arrangecoins1-grid.jpg "coins example 1")

<pre>
<b>Input:</b> n = 5
<b>Output:</b> 2
<b>Explanation:</b> Because the 3<sup>rd</sup> row is incomplete, we return 2.
</pre>

**Example 2:**

![coins example 2](assets/arrangecoins2-grid.jpg "coins example 2")

<pre>
<b>Input:</b> n = 8
<b>Output:</b> 3
<b>Explanation:</b> Because the 4<sup>rd</sup> row is incomplete, we return 3.
</pre>

##### Constraints

* <code>1 <= n <= 2<sup>31</sup> - 1</code>
