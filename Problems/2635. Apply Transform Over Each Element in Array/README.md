### [&#8592; Back to other problems](../../README.md)

## 2635. [Apply Transform Over Each Element in Array](https://leetcode.com/problems/apply-transform-over-each-element-in-array/)

Given an integer array `arr` and a mapping function fn, return a new array with a transformation
applied to each element.

The returned array should be created such that `returnedArray[i] = fn(arr[i], i)`.

Please solve it without the built-in `Array.map` method.

##### Examples

**Example 1:**

<pre>
<b>Input:</b> arr = [1,2,3], fn = function plusOne(n) { return n + 1; }
<b>Output:</b> [2,3,4]
<b>Explanation:</b>
const newArray = map(arr, plusOne); // [2,3,4]
The function increases each value in the array by one. 
</pre>

**Example 2:**

<pre>
<b>Input:</b> arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
<b>Output:</b> [1,3,5]
<b>Explanation:</b>
The function increases each value by the index it resides in.
</pre>

**Example 3:**

<pre>
<b>Input:</b> arr = [10,20,30], fn = function constant() { return 42; }
<b>Output:</b> [42,42,42]
<b>Explanation:</b>
The function always returns 42.
</pre>

##### Constraints

* <code>0 <= arr.length <= 1000</code>
* <code>-10<sup>9</sup> <= arr[i] <= 10<sup>9</sup></code>
* `fn returns a number`
