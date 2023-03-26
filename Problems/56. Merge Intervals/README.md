### [&#8592; Back to other problems](../../README.md)

## 56. [Merge Intervals](https://leetcode.com/problems/merge-intervals/)

Given an array of `intervals` where <code>
intervals[i] = [start<sub>i</sub>, end<sub>i</sub>]</code>, merge all overlapping intervals, and
return *an array of the non-overlapping intervals that cover all the intervals in the input*.

##### Examples

**Example 1:**

<pre>
<b>Input:</b> intervals = [[1,3],[2,6],[8,10],[15,18]]
<b>Output:</b> [[1,6],[8,10],[15,18]]
<b>Explanation:</b> Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
</pre>

**Example 2:**

<pre>
<b>Input:</b> intervals = [[1,4],[4,5]]
<b>Output:</b> [[1,5]]
<b>Explanation:</b> Intervals [1,4] and [4,5] are considered overlapping.
</pre>

##### Constraints

* <code>1 <= intervals.length <= 10<sup>4</sup></code>
* <code>intervals[i].length</code>
* <code>0 <= start<sub>i</sub> <= end<sub>i</sub> <= 10<sup>4</sup></code>
