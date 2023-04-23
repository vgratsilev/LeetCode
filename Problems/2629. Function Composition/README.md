### [&#8592; Back to other problems](../../README.md)

## 2629. [Function Composition](https://leetcode.com/problems/function-composition/)

Given an array of
functions <code>[f<sub>1</sub>, f<sub>2</sub>, f<sub>3</sub>, ..., f<sub>n</sub>]</code>, return a
new function <code>f<sub>n</sub></code> that is the **function composition** of the array of
functions.

The **function composition** of `[f(x), g(x), h(x)]` is `fn(x) = f(g(h(x)))`.

The **function composition** of an empty list of functions is the **identity function** `f(x) = x`.

You may assume each function in the array accepts one integer as input and returns one integer as
output.

##### Examples

**Example 1:**

<pre>
<b>Input:</b> functions = [x => x + 1, x => x * x, x => 2 * x], x = 4
<b>Output:</b> 65
<b>Explanation:</b>
Evaluating from right to left ...
Starting with x = 4.
2 * (4) = 8
(8) * (8) = 64
(64) + 1 = 65
</pre>

**Example 2:**

<pre>
<b>Input:</b> functions = [x => 10 * x, x => 10 * x, x => 10 * x], x = 1
<b>Output:</b> 1000
<b>Explanation:</b>
Evaluating from right to left ...
10 * (1) = 10
10 * (10) = 100
10 * (100) = 1000
</pre>

**Example 3:**

<pre>
<b>Input:</b> functions = [], x = 42
<b>Output:</b> 42
<b>Explanation:</b>
The composition of zero functions is the identity function
</pre>

##### Constraints

* <code>-1000 <= x <= 1000</code>
* <code>0 <= functions.length <= 1000</code>
* `all functions accept and return a single integer`
