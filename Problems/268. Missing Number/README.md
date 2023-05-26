### [&#8592; Back to other problems](../../README.md)

## 268. [Missing Number](https://leetcode.com/problems/missing-number/)

Given an array `nums` containing `n` distinct numbers in the range `[0, n]`, return *the only number
in the
range that is missing from the array*.

##### Examples

**Example 1:**

<pre>
<b>Input:</b> nums = [3,0,1]
<b>Output:</b> 2
<b>Explanation:</b> n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
</pre>

**Example 2:**

<pre>
<b>Input:</b> nums = [0,1]
<b>Output:</b> 2
<b>Explanation:</b> n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.
</pre>

**Example 2:**

<pre>
<b>Input:</b> nums = [9,6,4,2,3,5,7,0,1]
<b>Output:</b> 8
<b>Explanation:</b> n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.
</pre>

##### Constraints

* <code>n == nums.length</code>
* <code>1 <= n <= 10<sup>4</sup></code>
* <code>0 <= nums[i] <= n</code>
* All the numbers of `nums` are **unique**.

**Follow up:** Could you implement a solution using only `O(1)` extra space complexity and `O(n)`
runtime complexity?
