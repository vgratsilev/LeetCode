### [&#8592; Back to other problems](../../README.md)

## 2727. [Is Object Empty](https://leetcode.com/problems/is-object-empty/)

Given an object or an array, return if it is empty.

* An empty object contains no key-value pairs.
* An empty array contains no elements.

You may assume the object or array is the output of `JSON.parse`.

##### Examples

**Example 1:**

<pre>
<b>Input:</b> obj = {"x": 5, "y": 42}
<b>Output:</b> false
<b>Explanation:</b> The object has 2 key-value pairs so it is not empty.
</pre>

**Example 2:**

<pre>
<b>Input:</b> obj = {}
<b>Output:</b> true
<b>Explanation:</b> The object doesn't have any key-value pairs so it is empty.
</pre>

**Example 3:**

<pre>
<b>Input:</b> obj = [null, false, 0]
<b>Output:</b> false
<b>Explanation:</b> The array has 3 elements so it is not empty.

The error should be thrown because we cannot divide by zero.
</pre>

##### Constraints

* <code>2 <= JSON.stringify(obj).length <= 10<sup>5</sup></code>

**Can you solve it in O(1) time?**
