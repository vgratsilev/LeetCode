### [&#8592; Back to other problems](../../README.md)

## 414. [Third Maximum Number](https://leetcode.com/problems/third-maximum-number/)

Given an integer array `nums`, return *the **third distinct maximum** number in this array. If the
third maximum does not exist, return the **maximum** number*.

##### Examples

**Example 1:**

<pre>
<b>Input:</b> nums = [3,2,1]
<b>Output:</b> 1
<b>Explanation:</b>
The first distinct maximum is 3.
The second distinct maximum is 2.
The third distinct maximum is 1.
</pre>

**Example 2:**

<pre>
<b>Input:</b> nums = [1,2]
<b>Output:</b> 2
<b>Explanation:</b>
The first distinct maximum is 2.
The second distinct maximum is 1.
The third distinct maximum does not exist, so the maximum (2) is returned instead.
</pre>

**Example 3:**

<pre>
<b>Input:</b> nums = [2,2,3,1]
<b>Output:</b> 1
<b>Explanation:</b>
The first distinct maximum is 3.
The second distinct maximum is 2 (both 2's are counted together since they have the same value).
The third distinct maximum is 1.
</pre>

##### Constraints

* <code>1 <= nums.length <= 10<sup>4</sup></code>
* <code>2<sup>31</sup> <= nums[i] <= 2<sup>31</sup> - 1</code>

**Follow up:** Can you find an `O(n)` solution?
