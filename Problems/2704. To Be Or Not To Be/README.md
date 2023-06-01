### [&#8592; Back to other problems](../../README.md)

## 2704. [To Be Or Not To Be](https://leetcode.com/problems/to-be-or-not-to-be/)

Write a function expect that helps developers test their code. It should take in any value `val` and
return an object with the following two functions.

* `toBe(val)` accepts another value and returns `true` if the two values `===` each other. If they
  are not
  equal, it should throw an error `"Not Equal"`.
* `notToBe(val)` accepts another value and returns `true` if the two values `!==` each other. If
  they are
  equal, it should throw an error `"Equal"`.

##### Examples

**Example 1:**

<pre>
<b>Input:</b> func = () => expect(5).toBe(5)
<b>Output:</b> {"value": true}
<b>Explanation:</b> 5 === 5 so this expression returns true.
</pre>

**Example 2:**

<pre>
<b>Input:</b> func = () => expect(5).toBe(null)
<b>Output:</b> {"error": "Not Equal"}
<b>Explanation:</b> 5 !== null so this expression throw the error "Not Equal".
</pre>

**Example 3:**

<pre>
<b>Input:</b> func = () => expect(5).notToBe(null)
<b>Output:</b> {"value": true}
<b>Explanation:</b> 5 !== null so this expression returns true.
</pre>
