### [&#8592; Back to other problems](../../README.md)

## 2634. [Filter Elements from Array](https://leetcode.com/problems/filter-elements-from-array/)

Given an integer array `arr` and a filtering function `fn`, return a new array with a fewer or equal
number of elements.

The returned array should only contain elements where `fn(arr[i], i)` evaluated to a truthy value.

Please solve it without the built-in `Array.filter` method.

##### Examples

**Example 1:**

<pre>
<b>Input:</b> arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }
<b>Output:</b> [20,30]
<b>Explanation:</b>
const newArray = filter(arr, fn); // [20, 30]
The function filters out values that are not greater than 10
</pre>

**Example 2:**

<pre>
<b>Input:</b> arr = [1,2,3], fn = function firstIndex(n, i) { return i === 0; }
<b>Output:</b> [1]
<b>Explanation:</b>
fn can also accept the index of each element
In this case, the function removes elements not at index 0
</pre>

**Example 3:**

<pre>
<b>Input:</b> arr = [-2,-1,0,1,2], fn = function plusOne(n) { return n + 1 }
<b>Output:</b> [-2,0,1,2]
<b>Explanation:</b>
Falsy values such as 0 should be filtered out
</pre>

##### Constraints

* <code>0 <= arr.length <= 1000</code>
* <code>-10<sup>9</sup> <= arr[i] <= 10<sup>9</sup></code>
