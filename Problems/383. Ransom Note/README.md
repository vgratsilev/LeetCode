### [&#8592; Back to other problems](../../README.md)

## 383. [Ransom Note](https://leetcode.com/problems/execute-cancellable-function-with-delay/)

Given two strings `ransomNote` and `magazine`, return `true` *if `ransomNote` can be constructed by
using the letters from `magazine` and `false` otherwise*.

Each letter in `magazine` can only be used once in `ransomNote`.

##### Examples

**Example 1:**

<pre>
<b>Input:</b> ransomNote = "a", magazine = "b"
<b>Output:</b> false
</pre>

**Example 2:**

<pre>
<b>Input:</b> ransomNote = "aa", magazine = "ab"
<b>Output:</b> false
</pre>

**Example 3:**

<pre>
<b>Input:</b> ransomNote = "aa", magazine = "aab"
<b>Output:</b> true
</pre>

##### Constraints

* <code>1 <= ransomNote.length, magazine.length <= 10<sup>5</sup></code>
* `ransomNote` and `magazine` consist of lowercase English letters.
