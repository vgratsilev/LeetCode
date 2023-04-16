### [&#8592; Back to other problems](../../README.md)

## 2618. [Check if Object Instance of Class](https://leetcode.com/problems/check-if-object-instance-of-class/)

Write a function that checks if a given object is an instance of a given class or superclass.

There are no constraints on the data types that can be passed to the function.

##### Examples

**Example 1:**

<pre>
<b>Input:</b> func = () => checkIfInstance(new Date(), Date)
<b>Output:</b> true
<b>Explanation:</b> The object returned by the Date constructor is, by definition, an instance of Date.
</pre>

**Example 2:**

<pre>
<b>Input:</b> func = () => { class Animal {}; class Dog extends Animal {}; return checkIfInstance(new Dog(), Animal); }
<b>Output:</b> true
<b>Explanation:</b>
class Animal {};
class Dog extends Animal {};
checkIfInstance(new Dog(), Animal); // true

Dog is a subclass of Animal. Therefore, a Dog object is an instance of both Dog and Animal.
</pre>

**Example 3:**

<pre>
<b>Input:</b> func = () => checkIfInstance(Date, Date)
<b>Output:</b> false
<b>Explanation:</b>
A date constructor cannot logically be an instance of itself.
</pre>

**Example 4:**

<pre>
<b>Input:</b> func = () => checkIfInstance(5, Number)
<b>Output:</b> true
<b>Explanation:</b>
5 is a Number. Note that the "instanceof" keyword would return false.
</pre>
