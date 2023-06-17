### [&#8592; Back to other problems](../../README.md)

## 859. [Buddy Strings](https://leetcode.com/problems/buddy-strings/)

Given two strings `s` and `goal`, return `true` *if you can swap two letters in `s` so the result is
equal to
`goal`, otherwise, return `false`*.

Swapping letters is defined as taking two indices `i` and `j` (0-indexed) such that `i != j` and
swapping
the characters at `s[i]` and `s[j]`.

* For example, swapping at indices `0` and `2` in `"abcd"` results in `"cbad"`.

##### Examples

**Example 1:**

<pre>
<b>Input:</b> s = "ab", goal = "ba"
<b>Output:</b> true
<b>Explanation:</b> You can swap s[0] = 'a' and s[1] = 'b' to get "ba", which is equal to goal.
</pre>

**Example 2:**

<pre>
<b>Input:</b> s = "ab", goal = "ab"
<b>Output:</b> false
<b>Explanation:</b> The only letters you can swap are s[0] = 'a' and s[1] = 'b', which results in "ba" != goal.
</pre>

**Example 3:**

<pre>
<b>Input:</b> s = "aa", goal = "aa"
<b>Output:</b> true
<b>Explanation:</b> You can swap s[0] = 'a' and s[1] = 'a' to get "aa", which is equal to goal.
</pre>

##### Constraints

* <code>1 <= s.length, goal.length <= 2 * 10<sup>4</sup></code>
* `s` and `goal` consist of lowercase letters.
