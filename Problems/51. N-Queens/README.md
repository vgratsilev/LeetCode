### [&#8592; Back to other problems](../../README.md)

## 51. [N-Queens](https://leetcode.com/problems/n-queens/)

The **n-queens** puzzle is the problem of placing `n` queens on an `n x n` chessboard such that no
two
queens attack each other.

Given an integer `n`, return *all distinct solutions to the **n-queens puzzle***. You may return the
answer
in **any order**.

Each solution contains a distinct board configuration of the n-queens' placement, where `'Q'`
and `'.'`
both indicate a queen and an empty space, respectively.

##### Examples

**Example 1:**

![n-queens example](assets/queens.jpg "N-Queens example")

<pre>
<b>Input:</b> n = 4
<b>Output:</b> [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
<b>Explanation:</b> There exist two distinct solutions to the 4-queens puzzle as shown above.
</pre>

**Example 2:**

<pre>
<b>Input:</b> n = 1
<b>Output:</b> [["Q"]]
</pre>

##### Constraints

* <code>1 <= n <= 9</code>
