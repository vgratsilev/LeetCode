### [&#8592; Back to other problems](../../README.md)

## 2705. [Compact Object](https://leetcode.com/problems/compact-object/)

Given an object or array `obj`, return a **compact object**. A **compact object** is the same as the
original
object, except with keys containing **falsy** values removed. This operation applies to the object
and
any nested objects. Arrays are considered objects where the indices are keys. A value is considered
**falsy** when `Boolean(value)` returns `false`.

You may assume the `obj` is the output of `JSON.parse`. In other words, it is valid JSON.

##### Examples

**Example 1:**

<pre>
<b>Input:</b> obj = [null, 0, false, 1]
<b>Output:</b> [1]
<b>Explanation:</b> All falsy values have been removed from the array.
</pre>

**Example 2:**

<pre>
<b>Input:</b> obj = {"a": null, "b": [false, 1]}
<b>Output:</b> {"b": [1]}
<b>Explanation:</b> obj["a"] and obj["b"][0] had falsy values and were removed.
</pre>

**Example 3:**

<pre>
<b>Input:</b> obj = [null, 0, 5, [0], [false, 16]]
<b>Output:</b> [5, [], [16]]
<b>Explanation:</b> obj[0], obj[1], obj[3][0], and obj[4][0] were falsy and removed.
</pre>

##### Constraints

* <code>obj is a valid JSON object</code>
* <code>2 <= JSON.stringify(obj).length <= 10<sup>5</sup></code>
