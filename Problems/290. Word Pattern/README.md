### [&#8592; Back to other problems](../../README.md)

## 290. [Word Pattern](https://leetcode.com/problems/word-pattern/)

Given a `pattern` and a string `s`, find if `s` follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in `pattern` and a
non-empty word in `s`.

##### Examples

**Example 1:**

<pre>
<b>Input:</b> pattern = "abba", s = "dog cat cat dog"
<b>Output:</b> true
</pre>

**Example 2:**

<pre>
<b>Input:</b> pattern = "abba", s = "dog cat cat fish"
<b>Output:</b> false
</pre>

**Example 3:**

<pre>
<b>Input:</b> pattern = "aaaa", s = "dog cat cat dog"
<b>Output:</b> false
</pre>

##### Constraints

* <code>1 <= pattern.length <= 300</code>
* `pattern` contains only lower-case English letters.
* <code>1 <= s.length <= 3000</code>
* `s` contains only lowercase English letters and spaces `' '`.
* `s` does not contain any leading or trailing spaces.
* All the words in `s` are separated by a single space.
