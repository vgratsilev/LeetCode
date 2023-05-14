### [&#8592; Back to other problems](../../README.md)

## 338. [Counting Bits](https://leetcode.com/problems/counting-bits/description/)

Given an integer `n`, return *an array `ans` of length `n + 1` such that for
each `i` (`0 <= i <= n`),` ans[i]`
is the **number of `1`'s** in the binary representation of `i`*.

##### Examples

**Example 1:**

<pre>
<b>Input:</b> n = 2
<b>Output:</b> [0,1,1]
<b>Explanation:</b>
0 --> 0
1 --> 1
2 --> 10
</pre>

**Example 2:**

<pre>
<b>Input:</b> n = 5
<b>Output:</b> [0,1,1,2,1,2]
<b>Explanation:</b>
0 --> 0
1 --> 1
2 --> 10
3 --> 11
4 --> 100
5 --> 101
</pre>

##### Constraints

* <code>0 <= n <= 10<sup>5</sup> - 1</code>

**Follow up:**

* It is very easy to come up with a solution with a runtime of `O(n log n)`. Can you do it in linear
  time `O(n)` and possibly in a single pass?
* Can you do it without using any built-in function (i.e., like `__builtin_popcount` in C++)?
