### [&#8592; Back to other problems](../../README.md)

## 643. [Maximum Average Subarray I](https://leetcode.com/problems/maximum-average-subarray-i/)

You are given an integer array `nums` consisting of `n` elements, and an integer `k`.

Find a contiguous subarray whose length is equal to `k` that has the maximum average value and
return *this value*. Any answer with a calculation error less than <code>10<sup>-5</sup></code> will
be
accepted.

##### Examples

**Example 1:**

<pre>
<b>Input:</b> nums = [1,12,-5,-6,50,3], k = 4
<b>Output:</b> 12.75000
<b>Explanation:</b> Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
</pre>

**Example 2:**

<pre>
<b>Input:</b> nums = [5], k = 1
<b>Output:</b> 5.00000
</pre>

##### Constraints

* <code>n == nums.length</code>
* <code>1 <= k <= n <= 10<sup>5</sup></code>
* <code>-10<sup>4</sup> <= nums[i] <= 10<sup>4</sup></code>
