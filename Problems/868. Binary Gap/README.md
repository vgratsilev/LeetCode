### [&#8592; Back to other problems](../../README.md)

## 868. [Binary Gap](https://leetcode.com/problems/binary-gap/)

Given a positive integer `n`, find and return *the **longest distance** between any
two **adjacent** `1`'s in the binary representation of `n`. If there are no two adjacent `1`'s,
return `0`*.

Two `1`'s are **adjacent** if there are only `0`'s separating them (possibly no `0`'s). The *
*distance** between two `1`'s is the absolute difference between their bit positions. For example,
the two `1`'s in `"1001"` have a distance of 3.

##### Examples

**Example 1:**

<pre>
<b>Input:</b> n = 22
<b>Output:</b> 2
<b>Explanation:</b> 22 in binary is "10110".
The first adjacent pair of 1's is "10110" with a distance of 2.
The second adjacent pair of 1's is "10110" with a distance of 1.
The answer is the largest of these two distances, which is 2.
Note that "10110" is not a valid pair since there is a 1 separating the two 1's underlined.
</pre>

**Example 2:**

<pre>
<b>Input:</b> n = 8
<b>Output:</b> 0
<b>Explanation:</b> 8 in binary is "1000".
There are not any adjacent pairs of 1's in the binary representation of 8, so we return 0.
</pre>

**Example 3:**

<pre>
<b>Input:</b> n = 5
<b>Output:</b> 2
<b>Explanation:</b> 5 in binary is "101".
</pre>

##### Constraints

* <code>1 <= n <= 10<sup>5</sup></code>
