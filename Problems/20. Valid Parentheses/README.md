### [&#8592; Back to other problems](../../README.md)

## 20. [Valid Parentheses](https://leetcode.com/problems/valid-parentheses/)

Given a string s containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`,
determine if the
input string is valid.

An input string is valid if:

* Open brackets must be closed by the same type of brackets.
* Open brackets must be closed in the correct order.
* Every close bracket has a corresponding open bracket of the same type.

##### Examples

**Example 1:**

<pre>
<b>Input:</b> s = "()"
<b>Output:</b> true
</pre>

**Example 2:**

<pre>
<b>Input:</b> s = "()[]{}"
<b>Output:</b> true
</pre>

**Example 3:**

<pre>
<b>Input:</b> s = "(]"
<b>Output:</b> false
</pre>

##### Constraints

* <code>1 <= s.length <= 10<sup>4</sup></code>
* `s` consists of parentheses only `'()[]{}'`.
