### [&#8592; Back to other problems](../../README.md)

## 492. [Construct the Rectangle](https://leetcode.com/problems/construct-the-rectangle/)

A web developer needs to know how to design a web page's size. So, given a specific rectangular web
page’s area, your job by now is to design a rectangular web page, whose length `L` and width `W`
satisfy the following requirements:

1. The area of the rectangular web page you designed must equal to the given target area.
2. The width `W` should not be larger than the length `L`, which means `L >= W`.
3. The difference between length `L` and width `W` should be as small as possible.

Return *an array `[L, W]` where `L` and `W` are the length and width of the web page you designed in
sequence*.

##### Examples

**Example 1:**

<pre>
<b>Input:</b> area = 4
<b>Output:</b> [2,2]
<b>Explanation:</b> The target area is 4, and all the possible ways to construct it are [1,4], 
[2,2], [4,1]. 
But according to requirement 2, [1,4] is illegal; according to requirement 3,[4,1] is 
not optimal compared to [2,2]. So the length L is 2, and the width W is 2.
</pre>

**Example 2:**

<pre>
<b>Input:</b> area = 37
<b>Output:</b> [37,1]
</pre>

**Example 3:**

<pre>
<b>Input:</b> area = 122122
<b>Output:</b> [427,286]
</pre>

##### Constraints

* <code>1 <= area <= 10<sup>7</sup></code>
