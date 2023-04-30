### [&#8592; Back to other problems](../../README.md)

## 2648. [Generate Fibonacci Sequence](https://leetcode.com/problems/generate-fibonacci-sequence/)

Write a generator function that returns a generator object which yields the **fibonacci sequence**.

The **fibonacci sequence** is defined by the relation <code>X<sub>n</sub> = X<sub>n-1</sub> + X<sub>
n-2</sub></code>.

The first few numbers of the series are `0, 1, 1, 2, 3, 5, 8, 13`.

##### Examples

**Example 1:**

<pre>
<b>Input:</b> callCount = 5
<b>Output:</b> [0,1,1,2,3]
<b>Explanation:</b>
const gen = fibGenerator();
gen.next().value; // 0
gen.next().value; // 1
gen.next().value; // 1
gen.next().value; // 2
gen.next().value; // 3
</pre>

**Example 2:**

<pre>
<b>Input:</b> callCount = 0
<b>Output:</b> []
<b>Explanation:</b>
gen.next() is never called so nothing is outputted
</pre>

##### Constraints

* <code>0 <= callCount <= 50</code>
