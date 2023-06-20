### [&#8592; Back to other problems](../../README.md)

## 2733. [Neither Minimum nor Maximum](https://leetcode.com/problems/neither-minimum-nor-maximum/)

Given an integer array `nums` containing **distinct positive** integers, find and return **any**
number from
the array that is neither the **minimum** nor the **maximum** value in the array, or `-1` if there
is no such
number.

Return *the selected integer*.

##### Examples

**Example 1:**

<pre>
<b>Input:</b> nums = [3,2,1,4]
<b>Output:</b> 2
<b>Explanation:</b> In this example, the minimum value is 1 and the maximum value is 4. Therefore, either 2 or 3 can be valid answers.
</pre>

**Example 2:**

<pre>
<b>Input:</b> nums = [1,2]
<b>Output:</b> -1
<b>Explanation:</b> Since there is no number in nums that is neither the maximum nor the minimum, we cannot select a number that satisfies the given condition. Therefore, there is no answer.
</pre>

**Example 3:**

<pre>
<b>Input:</b> nums = nums = [2,1,3]
<b>Output:</b> 2
<b>Explanation:</b> Since 2 is neither the maximum nor the minimum value in nums, it is the only valid answer. 
</pre>

##### Constraints

* <code>1 <= nums.length <= 100</code>
* <code>1 <= nums[i] <= 100</code>
* All values in `nums` are distinct
