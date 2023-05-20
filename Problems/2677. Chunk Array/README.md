### [&#8592; Back to other problems](../../README.md)

## 2677. [Chunk Array](https://leetcode.com/problems/chunk-array/)

Given an array `arr` and a chunk size `size`, return a **chunked** array. A **chunked** array
contains the
original elements in `arr`, but consists of subarrays each of length `size`. The length of the last
subarray may be less than `size` if `arr.length` is not evenly divisible by `size`.

You may assume the array is the output of `JSON.parse`. In other words, it is valid JSON.

Please solve it without using lodash's `_.chunk` function.

##### Examples

**Example 1:**

<pre>
<b>Input:</b> arr = [1,2,3,4,5], size = 1
<b>Output:</b> [[1],[2],[3],[4],[5]]
<b>Explanation:</b> The arr has been split into subarrays each with 1 element.
</pre>

**Example 2:**

<pre>
<b>Input:</b> arr = [1,9,6,3,2], size = 3
<b>Output:</b> [[1,9,6],[3,2]]
<b>Explanation:</b> The arr has been split into subarrays with 3 elements. However, only two elements are left for the 2nd subarray.
</pre>

**Example 3:**

<pre>
<b>Input:</b> arr = [8,5,3,2,6], size = 6
<b>Output:</b> [[8,5,3,2,6]]
<b>Explanation:</b> Size is greater than arr.length thus all elements are in the first subarray.
</pre>

**Example 4:**

<pre>
<b>Input:</b> arr = [], size = 1
<b>Output:</b> []
<b>Explanation:</b> There are no elements to be chunked so an empty array is returned.
</pre>

##### Constraints

* `arr is a valid JSON array`.
* <code>2 <= JSON.stringify(arr).length <= 10<sup>5</sup></code>
* <code>1 <= size <= arr.length + 1</code>
