### [&#8592; Back to other problems](../../README.md)

## 2631. [Group By](https://leetcode.com/problems/group-by/)

Write code that enhances all arrays such that you can call the `array.groupBy(fn)` method on any
array and it will return a **grouped** version of the array.

A **grouped** array is an object where each key is the output of `fn(arr[i])` and each value is an
array containing all items in the original array with that key.

The provided callback `fn` will accept an item in the array and return a string key.

The order of each value list should be the order the items appear in the array. Any order of keys is
acceptable.

Please solve it without lodash's `_.groupBy` function.

##### Examples

**Example 1:**

<pre>
<b>Input:</b>
array = [
  {"id":"1"},
  {"id":"1"},
  {"id":"2"}
], 
fn = function (item) { 
  return item.id; 
}
<b>Output:</b>
{ 
  "1": [{"id": "1"}, {"id": "1"}],   
  "2": [{"id": "2"}] 
}
<b>Explanation:</b>
Output is from array.groupBy(fn).
The selector function gets the "id" out of each item in the array.
There are two objects with an "id" of 1. Both of those objects are put in the first array.
There is one object with an "id" of 2. That object is put in the second array.
</pre>

**Example 2:**

<pre>
<b>Input:</b>
array = [
  [1, 2, 3],
  [1, 3, 5],
  [1, 5, 9]
]
fn = function (list) { 
  return String(list[0]); 
}
<b>Output:</b> 
{ 
  "1": [[1, 2, 3], [1, 3, 5], [1, 5, 9]] 
}
<b>Explanation:</b>
The array can be of any type. In this case, the selector function defines the key as being the first element in the array. 
All the arrays have 1 as their first element so they are grouped together.
{
  "1": [[1, 2, 3], [1, 3, 5], [1, 5, 9]]
}
</pre>

**Example 3:**

<pre>
<b>Input:</b>
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
fn = function (n) { 
  return String(n > 5);
}
<b>Output:</b>
{
  "true": [6, 7, 8, 9, 10],
  "false": [1, 2, 3, 4, 5]
}
<b>Explanation:</b>
The selector function splits the array by whether each number is greater than 5.
</pre>

##### Constraints

* <code>0 <= array.length <= 10<sup>5</sup></code>
* fn returns a string
