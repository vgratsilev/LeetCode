### [&#8592; Back to other problems](../../README.md)

## 1089. [Duplicate Zeros](https://leetcode.com/problems/duplicate-zeros/)

Given an integer array `nums` sorted in **non-decreasing order**, return *an array of the **squares
of each number** sorted in non-decreasing order*.

##### Examples

**Example 1:**

<pre>
<b>Input:</b> nums = [-4,-1,0,3,10]
<b>Output:</b> [0,1,9,16,100]
<b>Explanation:</b> After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
</pre>

**Example 2:**

<pre>
<b>Input:</b> nums = [-7,-3,2,3,11]
<b>Output:</b> [4,9,9,49,121]
</pre>

##### Constraints

* <code>1 <= nums.length <= 10<sup>4</sup></code>
* <code>-10<sup>4</sup> <= nums[i] <= 10<sup>4</sup></code>
* `nums` is sorted in **non-decreasing** order.

**Follow up:** Squaring each element and sorting the new array is very trivial, could you find
an `O(n)` solution using a different approach?
