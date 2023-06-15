### [&#8592; Back to other problems](../../README.md)

## 917. [Reverse Only Letters](https://leetcode.com/problems/reverse-only-letters/)

Given a string `s`, reverse the string according to the following rules:

* All the characters that are not English letters remain in the same position.
* All the English letters (lowercase or uppercase) should be reversed.
*

Return `s` *after reversing it*.

##### Examples

**Example 1:**

<pre>
<b>Input:</b> s = "ab-cd"
<b>Output:</b> "dc-ba"
</pre>

**Example 2:**

<pre>
<b>Input:</b> s = "a-bC-dEf-ghIj"
<b>Output:</b> "j-Ih-gfE-dCba"
</pre>

**Example 3:**

<pre>
<b>Input:</b> s = "Test1ng-Leet=code-Q!"
<b>Output:</b> "Qedo1ct-eeLg=ntse-T!"
</pre>

##### Constraints

* <code>1 <= s.length <= 100</code>
* `s` consists of characters with ASCII values in the range `[33, 122]`.
* `s`  does not contain `'\"'` or `'\\'`.
