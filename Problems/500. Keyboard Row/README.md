### [&#8592; Back to other problems](../../README.md)

## 500. [Keyboard Row](https://leetcode.com/problems/keyboard-row/)

Given an array of strings `words`, return *the words that can be typed using letters of the alphabet
on only one row of American keyboard like the image below*.

In the **American keyboard**:

* the first row consists of the characters `"qwertyuiop"`,
* the second row consists of the characters `"asdfghjkl"`, and
* the third row consists of the characters `"zxcvbnm"`.

![keyboard example](assets/keyboard.png "keyboard example")

##### Examples

**Example 1:**

<pre>
<b>Input:</b> words = ["Hello","Alaska","Dad","Peace"]
<b>Output:</b> ["Alaska","Dad"]
</pre>

**Example 2:**

<pre>
<b>Input:</b> words = ["omk"]
<b>Output:</b> []
</pre>

**Example 3:**

<pre>
<b>Input:</b> words = ["adsdf","sfd"]
<b>Output:</b> ["adsdf","sfd"]
</pre>

##### Constraints

* <code>1 <= words.length <= 20</code>
* <code>1 <= words[i].length <= 100</code>
* `words[i]` consists of English letters (both lowercase and uppercase).
