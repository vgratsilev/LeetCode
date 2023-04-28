### [&#8592; Back to other problems](../../README.md)

## 2633. [Convert Object to JSON String](https://leetcode.com/problems/convert-object-to-json-string/)

Given an object, return a valid JSON string of that object. You may assume the object only inludes
strings, integers, arrays, objects, booleans, and null. The returned string should not include extra
spaces. The order of keys should be the same as the order returned by `Object.keys()`.

Please solve it without using the built-in `JSON.stringify` method.

##### Examples

**Example 1:**

<pre>
<b>Input:</b> object = {"y":1,"x":2}
<b>Output:</b> {"y":1,"x":2}
<b>Explanation:</b>
Return the JSON representation.
Note that the order of keys should be the same as the order returned by Object.keys().
</pre>

**Example 2:**

<pre>
<b>Input:</b> object = {"a":"str","b":-12,"c":true,"d":null}
<b>Output:</b> {"a":"str","b":-12,"c":true,"d":null}
<b>Explanation:</b>
The primitives of JSON are strings, numbers, booleans, and null.
</pre>

**Example 3:**

<pre>
<b>Input:</b> object = {"key":{"a":1,"b":[{},null,"Hello"]}}
<b>Output:</b> {"key":{"a":1,"b":[{},null,"Hello"]}}
<b>Explanation:</b>
Objects and arrays can include other objects and arrays.
</pre>

**Example 4:**

<pre>
<b>Input:</b> object = true
<b>Output:</b> true
<b>Explanation:</b>
Primitive types are valid inputs.
</pre>

##### Constraints

* `object includes strings, integers, booleans, arrays, objects, and null`
* <code>1 <= JSON.stringify(object).length <= 10<sup>5</sup></code>
* `maxNestingLevel <= 1000`
* `all strings will only contain alphanumeric characters`
