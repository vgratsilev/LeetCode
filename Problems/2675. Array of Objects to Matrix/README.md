### [&#8592; Back to other problems](../../README.md)

## 2675. [Array of Objects to Matrix](https://leetcode.com/problems/array-of-objects-to-matrix/)

Write a function that converts an array of objects `arr` into a matrix `m`.

`arr` is an array of objects or arrays. Each item in the array can be deeply nested with child
arrays
and child objects. It can also contain numbers, strings, booleans, and null values.

The first row `m` should be the column names. If there is no nesting, the column names are the
unique
keys within the objects. If there is nesting, the column names are the respective paths in the
object separated by `"."`.

Each of the remaining rows corresponds to an object in `arr`. Each value in the matrix corresponds
to
a value in an object. If a given object doesn't contain a value for a given column, the cell should
contain an empty string `""`.

The colums in the matrix should be in **lexographically ascending** order.

##### Examples

**Example 1:**

<pre>
<b>Input:</b>
arr = [
  {"b": 1, "a": 2},
  {"b": 3, "a": 4}
]
<b>Output:</b>
[
  ["a", "b"],
  [2, 1],
  [4, 3]
]
<b>Explanation:</b>
There are two unique column names in the two objects: "a" and "b".
"a" corresponds with [2, 4].
"b" corresponds with [1, 3].
</pre>

**Example 2:**

<pre>
<b>Input:</b>
arr = [
  {"a": 1, "b": 2},
  {"c": 3, "d": 4},
  {}
]
<b>Output:</b>
[
  ["a", "b", "c", "d"],
  [1, 2, "", ""],
  ["", "", 3, 4],
  ["", "", "", ""]
]
<b>Explanation:</b>
There are 4 unique column names: "a", "b", "c", "d".
The first object has values associated with "a" and "b".
The second object has values associated with "c" and "d".
The third object has no keys, so it is just a row of empty strings.
</pre>

**Example 3:**

<pre>
<b>Input:</b>
arr = [
  {"a": {"b": 1, "c": 2}},
  {"a": {"b": 3, "d": 4}}
]
<b>Output:</b>
[
  ["a.b", "a.c", "a.d"],
  [1, 2, ""],
  [3, "", 4]
]
<b>Explanation:</b>
In this example, the objects are nested. The keys represent the full path to each value separated by periods.
There are three paths: "a.b", "a.c", "a.d".
</pre>

**Example 4:**

<pre>
<b>Input:</b>
arr = [
  [{"a": null}],
  [{"b": true}],
  [{"c": "x"}]
]
<b>Output:</b>
[
  ["0.a", "0.b", "0.c"],
  [null, "", ""],
  ["", true, ""],
  ["", "", "x"]
]
<b>Explanation:</b>
Arrays are also considered objects with their keys being their indices.
Each array has one element so the keys are "0.a", "0.b", and "0.c".
</pre>

**Example 5:**

<pre>
<b>Input:</b>
arr = [
  {},
  {},
  {},
]
<b>Output:</b>
[
  [],
  [],
  [],
  []
]
<b>Explanation:</b>
There are no keys so every row is an empty array.
</pre>

##### Constraints

* <code>1 <= arr.length <= 1000</code>
* <code>unique keys <= 1000</code>
