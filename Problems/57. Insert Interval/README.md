### [&#8592; Back to other problems](../../README.md)

## 57. [Insert Interval](https://leetcode.com/problems/insert-interval/)

You are given an array of non-overlapping intervals `intervals` where <code>
intervals[i] = [start<sub>i</sub>, end<sub>i</sub>]</code> represent the start and the end of the
<code>i<sup>th</sup></code> interval and `intervals` is sorted in ascending order by <code>
start<sup>i</sup></code>. You are
also given an interval
`newInterval = [start, end]` that represents the start and end of another interval.

Insert `newInterval` into `intervals` such that intervals is still sorted in ascending order
by <code>start<sub>i</sub></code>
and `intervals` still does not have any overlapping intervals (merge overlapping intervals if
necessary).

Return `intervals` *after the insertion*.

##### Examples

**Example 1:**

<pre>
<b>Input:</b> intervals = [[1,3],[6,9]], newInterval = [2,5]
<b>Output:</b> [[1,5],[6,9]]
</pre>

**Example 2:**

<pre>
<b>Input:</b> intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
<b>Output:</b> [[1,2],[3,10],[12,16]]
<b>Explanation:</b> Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
</pre>

##### Constraints

* <code>0 <= intervals.length <= 10<sup>4</sup></code>
* `intervals[i].length == 2`
* <code>0 <= start<sub>i</sub> <= end<sub>i</sub> <= 10<sup>5</sup></code>
* `intervals` is sorted by <code>start<sub>i</sub></code> in **ascending** order.
* `newInterval.length == 2`
* <code>0 <= start <= end <= 10<sup>5</sup></code>
