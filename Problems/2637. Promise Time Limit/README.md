### [&#8592; Back to other problems](../../README.md)

## 2637. [Promise Time Limit](https://leetcode.com/problems/promise-time-limit/)

Given an asyncronous function `fn` and a time `t` in milliseconds, return a new **time** limited
version of the input function.

A **time limited** function is a function that is identical to the original unless it takes longer
than `t` milliseconds to fullfill. In that case, it will reject with `"Time Limit Exceeded"`. Note
that it should reject with a string, not an `Error`.

##### Examples

**Example 1:**

<pre>
<b>Input:</b>
fn = async (n) => { 
  await new Promise(res => setTimeout(res, 100)); 
  return n * n; 
}
inputs = [5]
t = 50
<b>Output:</b> {"rejected":"Time Limit Exceeded","time":50}
<b>Explanation:</b>
The provided function is set to resolve after 100ms. However, the time limit is set to 50ms. It rejects at t=50ms because the time limit was reached.
</pre>

**Example 2:**

<pre>
<b>Input:</b>
fn = async (n) => { 
  await new Promise(res => setTimeout(res, 100)); 
  return n * n; 
}
inputs = [5]
t = 150
<b>Output:</b> {"resolved":25,"time":100}
<b>Explanation:</b>
The function resolved 5 * 5 = 25 at t=100ms. The time limit is never reached.
</pre>

**Example 3:**

<pre>
<b>Input:</b>
fn = async (a, b) => { 
  await new Promise(res => setTimeout(res, 120)); 
  return a + b; 
}
inputs = [5,10]
t = 150
<b>Output:</b> {"resolved":15,"time":120}
<b>Explanation:</b>
The function resolved 5 + 10 = 15 at t=120ms. The time limit is never reached.
</pre>

**Example 4:**

<pre>
<b>Input:</b>
fn = async () => { 
  throw "Error";
}
inputs = []
t = 1000
<b>Output:</b> {"rejected":"Error","time":0}
<b>Explanation:</b>
The function immediately throws an error.
</pre>

##### Constraints

* <code>0 <= inputs.length <= 10</code>
* <code>0 <= t <= 1000</code>
* <code>fn returns a promise</code>
