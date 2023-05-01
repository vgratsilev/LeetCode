### [&#8592; Back to other problems](../../README.md)

## 2636. [Promise Pool](https://leetcode.com/problems/promise-pool/)

Given an array of asyncronous functions `functions` and a **pool limit** `n`, return an asyncronous
function
`promisePool`. It should return a promise that resolves when all the input functions resolve.

**Pool limit** is defined as the maximum number promises that can be pending at once. `promisePool`
should
begin execution of as many functions as possible and continue executing new functions when old
promises resolve. `promisePool` should execute `functions[i]` then `functions[i + 1]` then
`functions[i + 2]`, etc. When the last promise resolves, `promisePool` should also resolve.

For example, if `n = 1`, `promisePool` will execute one function at a time in series. However,
if `n = 2`,
it first executes two functions. When either of the two functions resolve, a 3rd function should be
executed (if available), and so on until there are no functions left to execute.

You can assume all `functions` never reject. It is acceptable for `promisePool` to return a promise
that
resolves any value.

##### Examples

**Example 1:**

<pre>
<b>Input:</b>
functions = [
  () => new Promise(res => setTimeout(res, 300)),
  () => new Promise(res => setTimeout(res, 400)),
  () => new Promise(res => setTimeout(res, 200))
]
n = 2
<b>Output:</b> [[300,400,500],500]
<b>Explanation:</b>
Three functions are passed in. They sleep for 300ms, 400ms, and 200ms respectively.
At t=0, the first 2 functions are executed. The pool size limit of 2 is reached.
At t=300, the 1st function resolves, and the 3rd function is executed. Pool size is 2.
At t=400, the 2nd function resolves. There is nothing left to execute. Pool size is 1.
At t=500, the 3rd function resolves. Pool size is zero so the returned promise also resolves.
</pre>

**Example 2:**

<pre>
<b>Input:</b>
functions = [
  () => new Promise(res => setTimeout(res, 300)),
  () => new Promise(res => setTimeout(res, 400)),
  () => new Promise(res => setTimeout(res, 200))
]
n = 5
<b>Output:</b> [[300,400,200],400]
<b>Explanation:</b>
At t=0, all 3 functions are executed. The pool limit of 5 is never met.
At t=200, the 3rd function resolves. Pool size is 2.
At t=300, the 1st function resolved. Pool size is 1.
At t=400, the 2nd function resolves. Pool size is 0, so the returned promise also resolves.
</pre>

**Example 3:**

<pre>
<b>Input:</b>
functions = [
  () => new Promise(res => setTimeout(res, 300)),
  () => new Promise(res => setTimeout(res, 400)),
  () => new Promise(res => setTimeout(res, 200))
]
n = 1
<b>Output:</b> [[300,700,900],900]
<b>Explanation:</b>
At t=0, the 1st function is executed. Pool size is 1.
At t=300, the 1st function resolves and the 2nd function is executed. Pool size is 1.
At t=700, the 2nd function resolves and the 3rd function is executed. Pool size is 1.
At t=900, the 3rd function resolves. Pool size is 0 so the returned promise resolves.
</pre>

##### Constraints

* <code>0 <= functions.length <= 10</code>
* <code>1 <= n <= 10</code>
