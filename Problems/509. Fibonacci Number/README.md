### [&#8592; Back to other problems](../../README.md)

## 509. [Fibonacci Number](https://leetcode.com/problems/fibonacci-number/)

The Fibonacci numbers, commonly denoted `F(n)` form a sequence, called the **Fibonacci sequence**,
such that each number is the sum of the two preceding ones, starting from `0` and `1`. That is,

```
F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.
```

Given `n`, calculate `F(n)`.

##### Examples

**Example 1:**

<pre>
<b>Input:</b> n = 2
<b>Output:</b> 1
<b>Explanation:</b> F(2) = F(1) + F(0) = 1 + 0 = 1.
</pre>

**Example 2:**

<pre>
<b>Input:</b> n = 3
<b>Output:</b> 2
<b>Explanation:</b> F(3) = F(2) + F(1) = 1 + 1 = 2.
</pre>

**Example 3:**

<pre>
<b>Input:</b> n = 4
<b>Output:</b> 3
<b>Explanation:</b> F(4) = F(3) + F(2) = 2 + 1 = 3.
</pre>

##### Constraints

* <code>0 <= n <= 30</code>
