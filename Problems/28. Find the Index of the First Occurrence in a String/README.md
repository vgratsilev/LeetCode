### [&#8592; Back to other problems](../../README.md)

## 28. [Find the Index of the First Occurrence in a String](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/)

Given two strings `needle` and `haystack`, return the index of the first occurrence of `needle` in
`haystack`, or `-1` if `needle` is not part of `haystack`.

##### Examples

**Example 1:**

<pre>
<b>Input:</b> haystack = "sadbutsad", needle = "sad"
<b>Output:</b> 0
<b>Explanation:</b> "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.
</pre>

**Example 2:**

<pre>
<b>Input:</b> haystack = "leetcode", needle = "leeto"
<b>Output:</b> -1
<b>Explanation:</b> "leeto" did not occur in "leetcode", so we return -1.
</pre>

##### Constraints

* <code>1 <= haystack.length, needle.length <= 10<sup>4</sup></code>
* `haystack` and `needle` consist of only lowercase English characters.
