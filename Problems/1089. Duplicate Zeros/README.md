### [&#8592; Back to other problems](../../README.md)

## 1089. [Duplicate Zeros](https://leetcode.com/problems/duplicate-zeros/)

Given a fixed-length integer array `arr`, duplicate each occurrence of zero, shifting the remaining
elements to the right.

**Note** that elements beyond the length of the original array are not written. Do the above
modifications to the input array in place and do not return anything.

##### Examples

**Example 1:**

<pre>
<b>Input:</b> arr = [1,0,2,3,0,4,5,0]
<b>Output:</b> [1,0,0,2,3,0,0,4]
<b>Explanation:</b> After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]
</pre>

**Example 2:**

<pre>
<b>Input:</b> arr = [1,2,3]
<b>Output:</b> [1,2,3]
<b>Explanation:</b> After calling your function, the input array is modified to: [1,2,3]
</pre>

##### Constraints

* <code>1 <= arr.length <= 10<sup>4</sup></code>
* <code>0 <= arr[i] <= 9</code>
