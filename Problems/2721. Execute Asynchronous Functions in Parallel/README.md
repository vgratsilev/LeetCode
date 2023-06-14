### [&#8592; Back to other problems](../../README.md)

## 2721. [Execute Asynchronous Functions in Parallel](https://leetcode.com/problems/execute-asynchronous-functions-in-parallel/)

Given an array of asynchronous functions `functions`, return a new promise `promise`. Each function
in
the array accepts no arguments and returns a promise.

`promise` resolves:

* When all the promises returned from `functions` were resolved successfully. The resolved value of
  promise should be an array of all the resolved values of promises in the same order as they were
  in
  the `functions`.

`promise` rejects:

* When any of the promises returned from `functions` were rejected. `promise` should also reject
  with the
  reason of the first rejection.

Please solve it without using the built-in `Promise.all` function.

##### Examples

**Example 1:**

<pre>
<b>Input:</b>
functions = [
  () => new Promise(resolve => setTimeout(() => resolve(5), 200))
]
<b>Output:</b> {"t": 200, "resolved": [5]}
<b>Explanation:</b>
promiseAll(functions).then(console.log); // [5]

The single function was resolved at 200ms with a value of 5.
</pre>

**Example 2:**

<pre>
<b>Input:</b>
functions = [
    () => new Promise(resolve => setTimeout(() => resolve(1), 200)), 
    () => new Promise((resolve, reject) => setTimeout(() => reject("Error"), 100))
]
<b>Output:</b> {"t": 100, "rejected": "Error"}
<b>Explanation:</b>
Since one of the promises rejected, the returned promise also rejected with the same error at the same time.
</pre>

**Example 3:**

<pre>
<b>Input:</b>
functions = [
    () => new Promise(resolve => setTimeout(() => resolve(4), 50)), 
    () => new Promise(resolve => setTimeout(() => resolve(10), 150)), 
    () => new Promise(resolve => setTimeout(() => resolve(16), 100))
]
<b>Output:</b> {"t": 150, "resolved": [4, 10, 16]}
<b>Explanation:</b>
All the promises resolved with a value. The returned promise resolved when the last promise resolved.
</pre>

##### Constraints

* <code>functions is an array of functions that returns promises</code>
* <code>1 <= functions.length <= 10</code>