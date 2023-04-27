### [&#8592; Back to other problems](../../README.md)

## 2632. [Curry](https://leetcode.com/problems/curry/)

Given a function `fn`, return a **curried** version of that function.

A **curried** function is a function that accepts fewer or an equal number of parameters as the
original function and returns either another **curried** function or the same value the original
function would have returned.

In practical terms, if you called the original function like `sum(1,2,3)`, you would call the *
*curried**
version like `csum(1)(2)(3)`, `csum(1)(2,3)`, `csum(1,2)(3)`, or `csum(1,2,3)`. All these methods of
calling
the **curried** function should return the same value as the original.

##### Examples

**Example 1:**

<pre>
<b>Input:</b>
fn = function sum(a, b, c) { return a + b + c; }
inputs = [[1],[2],[3]]
<b>Output:</b> 6
<b>Explanation:</b>
The code being executed is:
const curriedSum = curry(fn);
curriedSum(1)(2)(3) === 6;
curriedSum(1)(2)(3) should return the same value as sum(1, 2, 3).
</pre>

**Example 2:**

<pre>
<b>Input:</b>
fn = function sum(a, b, c) { return a + b + c; }
inputs = [[1,2],[3]]
<b>Output:</b> 6
<b>Explanation:</b>
curriedSum(1, 2)(3) should return the same value as sum(1, 2, 3).
</pre>

**Example 3:**

<pre>
<b>Input:</b>
fn = function sum(a, b, c) { return a + b + c; }
inputs = [[],[],[1,2,3]]
<b>Output:</b> 6
<b>Explanation:</b>
You should be able to pass the parameters in any way, including all at once or none at all.
curriedSum()()(1, 2, 3) should return the same value as sum(1, 2, 3).
</pre>

**Example 3:**

<pre>
<b>Input:</b>
fn = function life() { return 42; }
inputs = [[]]
<b>Output:</b> 42
<b>Explanation:</b>
currying a function that accepts zero parameters should effectively do nothing.
curriedLife() === 42
</pre>

##### Constraints

* <code>1 <= inputs.length <= 1000</code>
* <code>0 <= inputs[i][j] <= 10<sup>5</sup></code>
* <code>0 <= fn.length <= 1000</code>
* `inputs.flat().length == fn.length`
