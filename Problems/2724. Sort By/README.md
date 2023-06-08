### [&#8592; Back to other problems](../../README.md)

## 2724. [Sort By](https://leetcode.com/problems/sort-by/)

Given an array `arr` and a function `fn`, return a sorted array `sortedArr`. You can assume `fn`
only
returns numbers and those numbers determine the sort order of `sortedArr`. `sortedArray` must be
sorted
in **ascending order** by `fn` output.

You may assume that `fn` will never duplicate numbers for a given array.

##### Examples

**Example 1:**

<pre>
<b>Input:</b> arr = [5, 4, 1, 2, 3], fn = (x) => x
<b>Output:</b> [1, 2, 3, 4, 5]
<b>Explanation:</b> fn simply returns the number passed to it so the array is sorted in ascending order.
</pre>

**Example 2:**

<pre>
<b>Input:</b> arr = [{"x": 1}, {"x": 0}, {"x": -1}], fn = (d) => d.x
<b>Output:</b> [{"x": -1}, {"x": 0}, {"x": 1}]
<b>Explanation:</b> fn returns the value for the "x" key. So the array is sorted based on that value.
</pre>

**Example 3:**

<pre>
<b>Input:</b> arr = [[3, 4], [5, 2], [10, 1]], fn = (x) => x[1]
<b>Output:</b> [[10, 1], [5, 2], [3, 4]]
<b>Explanation:</b> arr is sorted in ascending order by number at index=1. 
</pre>

##### Constraints

* <code>arr is a valid JSON array</code>
* <code>fn is a function that returns a number</code>
* <code>1 <= arr.length <= 5 * 10<sup>5</sup></code>
