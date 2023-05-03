### [&#8592; Back to other problems](../../README.md)

## 2649. [Nested Array Generator](https://leetcode.com/problems/nested-array-generator/)

Given a **multi-dimensional** array of integers, return a generator object which yields integers in
the same order as **inorder traversal**.

A **multi-dimensional** array is a recursive data structure that contains both integers and other *
*multi-dimensional arrays**.

**inorder traversal** iterates over each array from left to right, yielding any integers it
encounters or applying **inorder traversal** to any arrays it encounters.

##### Examples

**Example 1:**

<pre>
<b>Input:</b> arr = [[[6]],[1,3],[]]
<b>Output:</b> [6,1,3]
<b>Explanation:</b>
const generator = inorderTraversal(arr);
generator.next().value; // 6
generator.next().value; // 1
generator.next().value; // 3
generator.next().done; // true
</pre>

**Example 2:**

<pre>
<b>Input:</b> arr = []
<b>Output:</b> []
<b>Explanation:</b> There are no integers so the generator doesn't yield anything.
</pre>

##### Constraints

* <code>0 <= arr.flat().length <= 10<sup>5</sup></code>
* <code>0 <= arr.flat()[i] <= 10<sup>5</sup></code>
* <code>maxNestingDepth <= 10<sup>5</sup></code>
