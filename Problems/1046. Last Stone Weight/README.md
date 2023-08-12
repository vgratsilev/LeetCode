### [&#8592; Back to other problems](../../README.md)

## 1046. [Last Stone Weight](https://leetcode.com/problems/last-stone-weight/)

You are given an array of integers `stones` where `stones[i]` is the weight of the
<code>i<sup>th</sup></code> stone.

We are playing a game with the stones. On each turn, we choose the heaviest two stones and smash
them together. Suppose the heaviest two stones have weights `x` and `y` with `x <= y`. The result of
this smash is:

* If `x == y`, both stones are destroyed, and
* If `x != y`, the stone of weight `x` is destroyed, and the stone of weight `y` has new
  weight `y - x`.

At the end of the game, there is **at most one** stone left.

Return *the weight of the last remaining stone*. If there are no stones left, return `0`.

##### Examples

**Example 1:**

<pre>
<b>Input:</b> stones = [2,7,4,1,8,1]
<b>Output:</b> 1
<b>Explanation:</b>
We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of the last stone.
</pre>

**Example 2:**

<pre>
<b>Input:</b> stones = [1]
<b>Output:</b> 1
</pre>

##### Constraints

* <code>1 <= stones.length <= 30</code>
* <code>1 <= stones[i] <= 1000</code>
