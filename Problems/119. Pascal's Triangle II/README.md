### [&#8592; Back to other problems](../../README.md)

## 119. [Pascal's Triangle II](https://leetcode.com/problems/pascals-triangle-ii/)

Given an integer `rowIndex`, return the <code>rowIndex<sup>th</sup></code> (**0-indexed**) row of
the **Pascal's triangle**.

In **Pascal's triangle**, each number is the sum of the two numbers directly above it as shown:

![pascal triangle example](assets/PascalTriangleAnimated2.gif "Pascal's triangle example")

**Example 1:**

<pre>
<b>Input:</b> rowIndex = 3
<b>Output:</b> [1,3,3,1]
</pre>

**Example 2:**

<pre>
<b>Input:</b> rowIndex = 0
<b>Output:</b> [1]
</pre>

**Example 3:**

<pre>
<b>Input:</b> rowIndex = 1
<b>Output:</b> [1,1]
</pre>

##### Constraints

* <code>0 <= rowIndex <= 33</code>

**Follow up**: Could you optimize your algorithm to use only `O(rowIndex)` extra space?
