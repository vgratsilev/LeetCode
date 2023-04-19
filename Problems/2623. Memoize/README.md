### [&#8592; Back to other problems](../../README.md)

## 2623. [Memoize](https://leetcode.com/problems/memoize/)

Given a function `fn`, return a **memoized** version of that function.

A **memoized** function is a function that will never be called twice with the same inputs. Instead
it
will returned a cached value.

You can assume there are **3** possible input functions: `sum`, `fib`, and `factorial`.

* `sum` accepts two integers `a` and `b` and returns `a + b`.
* `fib` accepts a single integer `n` and returns `1` if `n <= 1` or `fib(n - 1) + fib(n - 2)`
  otherwise.
* `factorial` accepts a single integer `n` and returns `1` if `n <= 1` or `factorial(n - 1) * n`
  otherwise.

##### Examples

**Example 1:**

<pre>
<b>Input:</b>
"sum"
["call","call","getCallCount","call","getCallCount"]
[[2,2],[2,2],[],[1,2],[]]
<b>Output:</b> [4,4,1,3,2]
<b>Explanation:</b>
const sum = (a, b) => a + b;
const memoizedSum = memoize(sum);
memoizedSum(2, 2); // Returns 4. sum() was called as (2, 2) was not seen before.
memoizedSum(2, 2); // Returns 4. However sum() was not called because the same inputs were seen before.
// Total call count: 1
memoizedSum(1, 2); // Returns 3. sum() was called as (1, 2) was not seen before.
// Total call count: 2
</pre>

**Example 2:**

<pre>
<b>Input:</b>
"factorial"
["call","call","call","getCallCount","call","getCallCount"]
[[2],[3],[2],[],[3],[]]
<b>Output:</b> [2,6,2,2,6,2]
<b>Explanation:</b>
const factorial = (n) => (n <= 1) ? 1 : (n * factorial(n - 1));
const memoFactorial = memoize(factorial);
memoFactorial(2); // Returns 2.
memoFactorial(3); // Returns 6.
memoFactorial(2); // Returns 2. However factorial was not called because 2 was seen before.
// Total call count: 2
memoFactorial(3); // Returns 6. However factorial was not called because 3 was seen before.
// Total call count: 2
</pre>

**Example 3:**

<pre>
<b>Input:</b>
"fib"
["call","getCallCount"]
[[5],[]]
<b>Output:</b> [8,1]
<b>Explanation:</b>
fib(5) = 8
// Total call count: 1
</pre>

##### Constraints

* <code>0 <= a, b <= 10<sup>5</sup></code>
* <code>1 <= n <= 10</code>
* <code>at most 10<sup>5</sup> function calls</code>
* <code>at most 10<sup>5</sup> attempts to access callCount calls</code>
* `input function is sum, fib, or factorial`
