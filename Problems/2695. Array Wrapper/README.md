### [&#8592; Back to other problems](../../README.md)

## 2695. [Array Wrapper](https://leetcode.com/problems/array-wrapper/)

Create a class `ArrayWrapper` that accepts an array of integers in it's constructor. This class
should
have two features:

* When two instances of this class are added together with the `+` operator, the resulting value is
  the
  sum of all the elements in both arrays.
* When the `String()` function is called on the instance, it will return a comma separated string
  surrounded by brackets. For example, `[1,2,3]`.

##### Examples

**Example 1:**

<pre>
<b>Input:</b> nums = [[1,2],[3,4]], operation = "Add"
<b>Output:</b> 10
<b>Explanation:</b>
const obj1 = new ArrayWrapper([1,2]);
const obj2 = new ArrayWrapper([3,4]);
obj1 + obj2; // 10
</pre>

**Example 2:**

<pre>
<b>Input:</b> nums = [[23,98,42,70]], operation = "String"
<b>Output:</b> "[23,98,42,70]"
<b>Explanation:</b>
const obj = new ArrayWrapper([23,98,42,70]);
String(obj); // "[23,98,42,70]"
</pre>

**Example 3:**

<pre>
<b>Input:</b> nums = [[],[]], operation = "Add"
<b>Output:</b> 0
<b>Explanation:</b>
const obj1 = new ArrayWrapper([]);
const obj2 = new ArrayWrapper([]);
obj1 + obj2; // 0
</pre>

##### Constraints

* <code>0 <= nums.length <= 1000</code>
* <code>0 <= nums[i] <= 1000</code>
* <code>Note: nums is the array passed to the constructor</code>
