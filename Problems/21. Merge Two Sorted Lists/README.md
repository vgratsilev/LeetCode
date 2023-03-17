### [&#8592; Back to other problems](../../README.md)

## 21. [Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/)

You are given the heads of two sorted linked lists `list1` and `list2`.

Merge the two lists in a one **sorted** list. The list should be made by splicing together the nodes
of
the first two lists.

Return the head of the merged linked list.

##### Examples

**Example 1:**

![merge two sorted list example](assets/merge_ex1.jpg "Merge Two Sorted List example")

<pre>
<b>Input:</b> list1 = [1,2,4], list2 = [1,3,4]
<b>Output:</b> [1,1,2,3,4,4]
</pre>

**Example 2:**

<pre>
<b>Input:</b> list1 = [], list2 = []
<b>Output:</b> []
</pre>

**Example 3:**

<pre>
<b>Input:</b> list1 = [], list2 = [0]
<b>Output:</b> [0]
</pre>

##### Constraints

* The number of nodes in both lists is in the range `[0, 50]`.
* <code>-100 <= Node.val <= 100</code>
* Both `list1` and `list2` are sorted in **non-decreasing** order.
