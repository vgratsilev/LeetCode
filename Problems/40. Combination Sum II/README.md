### [&#8592; Back to other problems](../../README.md)

## 40. [Combination Sum II](https://leetcode.com/problems/combination-sum-ii/)

Given a collection of candidate numbers (`candidates`) and a target number (`target`), find all
unique
combinations in `candidates` where the candidate numbers sum to `target`.

Each number in `candidates` may only be used **once** in the combination.

**Note**: The solution set must not contain duplicate combinations.

##### Examples

**Example 1:**

<pre>
<b>Input:</b> candidates = [10,1,2,7,6,1,5], target = 8
<b>Output:</b> 
[
[1,1,6],
[1,2,5],
[1,7],
[2,6]
]
<b>Explanation:</b> 2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
7 is a candidate, and 7 = 7.
These are the only two combinations.
</pre>

**Example 2:**

<pre>
<b>Input:</b> candidates = [2,5,2,1,2], target = 5
<b>Output:</b> 
[
[1,2,2],
[5]
]
</pre>

##### Constraints

* <code>1 <= candidates.length <= 100</code>
* <code>1 <= candidates[i] <= 50</code>
* <code>1 <= target <= 30</code>
