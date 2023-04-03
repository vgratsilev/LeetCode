### [&#8592; Back to other problems](../../README.md)

## 66. [Plus One](https://leetcode.com/problems/plus-one/)

You are given a *large integer* represented as an integer array `digits`, where each `digits[i]` is
the
<code>i<sup>th</sup></code> digit of the integer. The digits are ordered from most significant to
least significant in left-to-right order. The large integer does not contain any leading `0`'s.

Increment the large integer by one and return *the resulting array of digits*.

##### Examples

**Example 1:**

<pre>
<b>Input:</b> digits = [1,2,3]
<b>Output:</b> [1,2,4]
<b>Explanation:</b> The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].
</pre>

**Example 2:**

<pre>
<b>Input:</b> digits = [4,3,2,1]
<b>Output:</b> [4,3,2,2]
<b>Explanation:</b> The array represents the integer 4321.
Incrementing by one gives 4321 + 1 = 4322.
Thus, the result should be [4,3,2,2].
</pre>

**Example 3:**

<pre>
<b>Input:</b> digits = [9]
<b>Output:</b> [1,0]
<b>Explanation:</b> The array represents the integer 9.
Incrementing by one gives 9 + 1 = 10.
Thus, the result should be [1,0].
</pre>

##### Constraints

* <code>1 <= digits.length <= 100</code>
* <code>0 <= digits[i] <= 9</code>
* `digits` does not contain any leading `0`'s.
