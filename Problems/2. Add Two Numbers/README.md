### [&#8592; Back to other problems](../../README.md)

## 2. [Add Two Numbers](https://leetcode.com/problems/add-two-numbers/)

You are given two **non-empty** linked lists representing two non-negative integers. The digits are
stored in **reverse order**, and each of their nodes contains a single digit. Add the two numbers
and
return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

![add two numbers example](assets/add_two_number.jpg "Add Two Numbers example")

##### Examples

**Example 1:**

<pre>
<b>Input:</b> l1 = [2,4,3], l2 = [5,6,4]
<b>Output:</b> [7,0,8]
<b>Explanation:</b> 342 + 465 = 807.
</pre>

**Example 2:**

<pre>
<b>Input:</b> l1 = [0], l2 = [0]
<b>Output:</b> [0]
</pre>

**Example 3:**

<pre>
<b>Input:</b> l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
<b>Output:</b> [8,9,9,9,0,0,0,1]
<b>Explanation:</b> 9999999 + 9999 = 10009998.
</pre>

##### Constraints

* The number of nodes in each linked list is in the range `[1, 100]`.
* <code>0 <= Node.length <= 9</code>
* It is guaranteed that the list represents a number that does not have leading zeros.
