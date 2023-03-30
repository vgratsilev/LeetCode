### [&#8592; Back to other problems](../../README.md)

## 200. [Number of Islands](https://leetcode.com/problems/number-of-islands/)

Given an `m x n` 2D binary grid `grid` which represents a map of `'1'`s (land) and `'0'`s (water),
return *the number of islands*.

An **island** is surrounded by water and is formed by connecting adjacent lands horizontally or
vertically. You may assume all four edges of the grid are all surrounded by water.

##### Examples

**Example 1:**

<pre>
<b>Input:</b> grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
<b>Output:</b> 1
</pre>

**Example 2:**

<pre>
<b>Input:</b> grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
<b>Output:</b> 3
</pre>

##### Constraints

* <code>m == grid.length</code>
* <code>n == grid[i].length</code>
* <code>1 <= m, n <= 300</code>
* <code>0 <= s.length <= 3 * 10<sup>4</sup></code>
* `grid[i][j]` is `'0'` or `'1'`
