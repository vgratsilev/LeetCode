### [&#8592; Back to other problems](../../README.md)

## 2665. [Counter II](https://leetcode.com/problems/counter-ii/)

Write a function `createCounter`. It should accept an initial integer `init`. It should return an
object
with three functions.

The three functions are:

* `increment()` increases the current value by 1 and then returns it.
* `decrement()` reduces the current value by 1 and then returns it.
* `reset()` sets the current value to `init` and then returns it.

##### Examples

**Example 1:**

<pre>
<b>Input:</b> init = 5, calls = ["increment","reset","decrement"]
<b>Output:</b> [6,5,4]
<b>Explanation:</b>
const counter = createCounter(5);
counter.increment(); // 6
counter.reset(); // 5
counter.decrement(); // 4
</pre>

**Example 2:**

<pre>
<b>Input:</b> init = 0, calls = ["increment","increment","decrement","reset","reset"]
<b>Output:</b> [1,2,1,0,0]
<b>Explanation:</b>
const counter = createCounter(0);
counter.increment(); // 1
counter.increment(); // 2
counter.decrement(); // 1
counter.reset(); // 0
counter.reset(); // 0
</pre>

##### Constraints

* <code>-1000 <= init <= 1000</code>
* <code>total calls not to exceed 1000</code>
