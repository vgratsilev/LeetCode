### [&#8592; Back to other problems](../../README.md)

## 463. [Island Perimeter](https://leetcode.com/problems/island-perimeter/)

You are given `row x col` `grid` representing a map where `grid[i][j] = 1` represents land and
`grid[i][j] = 0` represents water.

Grid cells are connected **horizontally/vertically** (not diagonally). The `grid` is completely
surrounded by water, and there is exactly one island (i.e., one or more connected land cells).

The island doesn't have "lakes", meaning the water inside isn't connected to the water around the
island. One cell is a square with side length 1. The grid is rectangular, width and height don't
exceed 100. Determine the perimeter of the island.

##### Examples

**Example 1:**

![island example](assets/island.png "island example")

<pre>
<b>Input:</b> grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
<b>Output:</b> 16
<b>Explanation:</b> The perimeter is the 16 yellow stripes in the image above.
</pre>

**Example 2:**

<pre>
<b>Input:</b> grid = [[1]]
<b>Output:</b> 4
</pre>

**Example 3:**

<pre>
<b>Input:</b> grid = [[1,0]]
<b>Output:</b> 4
</pre>

##### Constraints

* <code>row == grid.length</code>
* <code>col == grid[i].length</code>
* <code>1 <= row, col <= 100</code>
* `grid[i][j]` is `0` or `1`.
* There is exactly one island in `grid`.
