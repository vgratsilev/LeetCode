### [&#8592; Back to other problems](../../README.md)

## 2666. [Allow One Function Call](https://leetcode.com/problems/allow-one-function-call/)

Given a function `fn`, return a new function that is identical to the original function except that
it
ensures `fn` is called at most once.

* The first time the returned function is called, it should return the same result as `fn`.
* Every subsequent time it is called, it should return `undefined`.

##### Examples

**Example 1:**

<pre>
<b>Input:</b> fn = (a,b,c) => (a + b + c), calls = [[1,2,3],[2,3,6]]
<b>Output:</b> [{"calls":1,"value":6}]
<b>Explanation:</b>
const onceFn = once(fn);
onceFn(1, 2, 3); // 6
onceFn(2, 3, 6); // undefined, fn was not called
</pre>

**Example 2:**

<pre>
<b>Input:</b> fn = (a,b,c) => (a * b * c), calls = [[5,7,4],[2,3,6],[4,6,8]]
<b>Output:</b> [{"calls":1,"value":140}]
<b>Explanation:</b>
const onceFn = once(fn);
onceFn(5, 7, 4); // 140
onceFn(2, 3, 6); // undefined, fn was not called
onceFn(4, 6, 8); // undefined, fn was not called
</pre>

##### Constraints

* <code>1 <= calls.length <= 10</code>
* <code>1 <= calls[i].length <= 100</code>
* <code>2 <= JSON.stringify(calls).length <= 1000</code>
