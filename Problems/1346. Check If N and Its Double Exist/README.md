### [&#8592; Back to other problems](../../README.md)

## 1346. [Check If N and Its Double Exist](https://leetcode.com/problems/check-if-n-and-its-double-exist/)

Given an array `arr` of integers, check if there exist two indices `i` and `j` such that :

* `i != j`
* `0 <= i, j < arr.length`
* `arr[i] == 2 * arr[j]`

##### Examples

**Example 1:**

<pre>
<b>Input:</b> arr = [10,2,5,3]
<b>Output:</b> true
<b>Explanation:</b> For i = 0 and j = 2, arr[i] == 10 == 2 * 5 == 2 * arr[j]
</pre>

**Example 2:**

<pre>
<b>Input:</b> arr = [3,1,7,11]
<b>Output:</b> false
<b>Explanation:</b> There is no i and j that satisfy the conditions.
</pre>

**Example 3:**

<pre>
<b>Input:</b> arr = [10,2,6,8,3,12]
<b>Output:</b> true
<b>Explanation:</b> For i = 2 and j = 5, arr[i] * 2 == 6 * 2 == 12 == arr[j]
</pre>

##### Constraints

* <code>2 <= arr.length <= 500</code>
* <code>-10<sup>3</sup> <= arr[i] <= 10<sup>3</sup></code>
