### [&#8592; Back to other problems](../../README.md)

## 2715. [Execute Cancellable Function With Delay](https://leetcode.com/problems/execute-cancellable-function-with-delay/)

Given a function `fn`, an array or arguments `args`, and a timeout `t` in milliseconds, return a
cancel
function `cancelFn`.

After a delay of `t`, `fn` should be called with `args` passed as parameters **unless** `cancelFn`
was called
first. In that case, `fn` should never be called.

##### Examples

**Example 1:**

<pre>
<b>Input:</b> fn = (x) => x * 5, args = [2], t = 20, cancelTime = 50
<b>Output:</b> [{"time": 20, "returned": 10}]
<b>Explanation:</b>
const cancel = cancellable(fn, [2], 20); // fn(2) called at t=20ms
setTimeout(cancel, 50);

the cancelTime (50ms) is after the delay time (20ms), so fn(2) should be called at t=20ms. The value returned from fn is 10.
</pre>

**Example 2:**

<pre>
<b>Input:</b> fn = (x) => x**2, args = [2], t = 100, cancelTime = 50
<b>Output:</b> []
<b>Explanation:</b> fn(2) was never called because cancelTime (50ms) is before the delay time (100ms).
</pre>

**Example 3:**

<pre>
<b>Input:</b> fn = (x1, x2) => x1 * x2, args = [2,4], t = 30, cancelTime = 100
<b>Output:</b> [{"time": 30, "returned": 8}]
<b>Explanation:</b> fn(2, 4) was called at t=30ms because cancelTime > t.
</pre>

##### Constraints

* <code>fn is a function</code>
* <code>args is a valid JSON array</code>
* <code>1 <= args.length <= 10</code>
* <code>20 <= t <= 1000</code>
* <code>10 <= cancelT <= 1000</code>
