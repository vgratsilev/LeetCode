### [&#8592; Back to other problems](../../README.md)

## 389. [Find the Difference](https://leetcode.com/problems/find-the-difference/)

You are given two strings `s` and `t`.

String `t` is generated by random shuffling string `s` and then add one more letter at a random
position.

Return the letter that was added to `t`.

##### Examples

**Example 1:**

<pre>
<b>Input:</b> s = "abcd", t = "abcde"
<b>Output:</b> "e"
<b>Explanation:</b> "e" is the letter that was added.
</pre>

**Example 2:**

<pre>
<b>Input:</b> s = "", t = "y"
<b>Output:</b> "y"
</pre>

##### Constraints

* <code>0 <= s.length <= 1000</code>
* <code>t.length == s.length + 1</code>
* `s` and `t` consist of lowercase English letters.
