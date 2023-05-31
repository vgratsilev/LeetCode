### [&#8592; Back to other problems](../../README.md)

## 2703. [Return Length of Arguments Passed](https://leetcode.com/problems/return-length-of-arguments-passed/description/)

Write a function `argumentsLength` that returns the count of arguments passed to it.

##### Examples

**Example 1:**

<pre>
<b>Input:</b> argsArr = [5]
<b>Output:</b> 1
<b>Explanation:</b>
argumentsLength(5); // 1

One value was passed to the function so it should return 1.
</pre>

**Example 2:**

<pre>
<b>Input:</b> argsArr = [{}, null, "3"]
<b>Output:</b> 3
<b>Explanation:</b>
argumentsLength({}, null, "3"); // 3

Three values were passed to the function so it should return 3.
</pre>

##### Constraints

* <code>argsArr is a valid JSON array</code>
* <code>0 <= argsArr.length <= 100</code>
