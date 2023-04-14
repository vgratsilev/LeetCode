### [&#8592; Back to other problems](../../README.md)

## 2621. [Sleep](https://leetcode.com/problems/sleep/)

Write an asynchronous function that accepts a positive integer `millis` and sleeps for that many
milliseconds. It can resolve any value.

##### Examples

**Example 1:**

<pre>
<b>Input:</b> millis = 100
<b>Output:</b> 100
<b>Explanation:</b> It should return a promise that resolves after 100ms.
let t = Date.now();
sleep(100).then(() => {
  console.log(Date.now() - t); // 100
});
</pre>

**Example 2:**

<pre>
<b>Input:</b> millis = 200
<b>Output:</b> 200
<b>Explanation:</b> It should return a promise that resolves after 200ms.
</pre>

##### Constraints

* <code>1 <= millis <= 1000</code>
