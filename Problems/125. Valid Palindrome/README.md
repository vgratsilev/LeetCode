### [&#8592; Back to other problems](../../README.md)

## 125. [Valid Palindrome](https://leetcode.com/problems/valid-palindrome/)

A phrase is a **palindrome** if, after converting all uppercase letters into lowercase letters and
removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric
characters include letters and numbers.

Given a string `s`, return `true` *if it is a **palindrome**, or `false` otherwise*.

##### Examples

**Example 1:**

<pre>
<b>Input:</b> s = "A man, a plan, a canal: Panama"
<b>Output:</b> true
<b>Explanation:</b> "amanaplanacanalpanama" is a palindrome.
</pre>

**Example 2:**

<pre>
<b>Input:</b> s = "race a car"
<b>Output:</b> false
<b>Explanation:</b> "raceacar" is not a palindrome.
</pre>

**Example 3:**

<pre>
<b>Input:</b> s = " "
<b>Output:</b> true
<b>Explanation:</b> s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
</pre>

##### Constraints

* <code>1 <= s.length <= 2 * 10<sup>5</sup></code>
* `s` consists only of printable ASCII characters.
