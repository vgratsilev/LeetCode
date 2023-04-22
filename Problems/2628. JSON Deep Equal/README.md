### [&#8592; Back to other problems](../../README.md)

## 2628. [JSON Deep Equal](https://leetcode.com/problems/json-deep-equal/)

Given two objects `o1` and `o2`, check if they are **deeply equal**.

For two objects to be **deeply equal**, they must contain the same keys, and the associated values
must also be **deeply equal**. Two objects are also considered **deeply equal** if they pass
the `===` equality check.

You may assume both objects are the output of `JSON.parse`. In other words, they are valid JSON.

Please solve it without using lodash's `_.isEqual()` function.

##### Examples

**Example 1:**

<pre>
<b>Input:</b> o1 = {"x":1,"y":2}, o2 = {"x":1,"y":2}
<b>Output:</b> true
<b>Explanation:</b> The keys and values match exactly.
</pre>

**Example 2:**

<pre>
<b>Input:</b> o1 = {"y":2,"x":1}, o2 = {"x":1,"y":2}
<b>Output:</b> true
<b>Explanation:</b> Although the keys are in a different order, they still match exactly.
</pre>

**Example 3:**

<pre>
<b>Input:</b> o1 = {"x":null,"L":[1,2,3]}, o2 = {"x":null,"L":["1","2","3"]}
<b>Output:</b> false
<b>Explanation:</b> The array of numbers is different from the array of strings.
</pre>

**Example 4:**

<pre>
<b>Input:</b> o1 = true, o2 = false
<b>Output:</b> false
<b>Explanation:</b> true !== false
</pre>

##### Constraints

* <code>1 <= JSON.stringify(o1).length <= 10<sup>5</sup></code>
* <code>1 <= JSON.stringify(o2).length <= 10<sup>5</sup></code>
* <code>maxNestingDepth <= 1000</code>
