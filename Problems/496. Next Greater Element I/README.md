### [&#8592; Back to other problems](../../README.md)

## 496. [Next Greater Element I](https://leetcode.com/problems/next-greater-element-i/)

The **next greater element** of some element `x` in an array is the **first greater** element that
is **to the right** of `x` in the same array.

You are given two **distinct 0-indexed** integer arrays `nums1` and `nums2`, where `nums1` is a
subset of `nums2`.

For each `0 <= i < nums1.length`, find the index `j` such that `nums1[i] == nums2[j]` and determine
the **next greater element** of `nums2[j]` in `nums2`. If there is no next greater element, then the
answer for this query is `-1`.

Return *an array `ans` of length `nums1.length` such that `ans[i]` is the **next greater element**
as
described above*.

##### Examples

**Example 1:**

<pre>
<b>Input:</b> nums1 = [4,1,2], nums2 = [1,3,4,2]
<b>Output:</b> [-1,3,-1]
<b>Explanation:</b> The next greater element for each value of nums1 is as follows:
- 4 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
- 1 is underlined in nums2 = [1,3,4,2]. The next greater element is 3.
- 2 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
</pre>

**Example 2:**

<pre>
<b>Input:</b> nums1 = [2,4], nums2 = [1,2,3,4]
<b>Output:</b> [3,-1]
<b>Explanation:</b> The next greater element for each value of nums1 is as follows:
- 2 is underlined in nums2 = [1,2,3,4]. The next greater element is 3.
- 4 is underlined in nums2 = [1,2,3,4]. There is no next greater element, so the answer is -1.
</pre>

##### Constraints

* <code>1 <= nums1.length <= nums2.length <= 1000</code>
* <code>0 <= nums1[i], nums2[i] <= 10<sup>4</sup></code>
* All integers in `nums1` and `nums2` are **unique**.
* All the integers of `nums1` also appear in `nums2`.
