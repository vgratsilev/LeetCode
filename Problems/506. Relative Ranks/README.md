### [&#8592; Back to other problems](../../README.md)

## 506. [Relative Ranks](https://leetcode.com/problems/relative-ranks/)

You are given an integer array `score` of size `n`, where `score[i]` is the score of the
<code>i<sup>th</sup></code> athlete in a competition. All the scores are guaranteed to be unique.

The athletes are placed based on their scores, where the <code>1<sup>st</sup></code> place athlete
has the highest score, the <code>2<sup>nd</sup></code> place athlete has the <code>2<sup>
nd</sup></code> highest score, and so on. The placement of each athlete determines
their rank:

* The <code>1<sup>st</sup></code> place athlete's rank is `"Gold Medal"`.
* The <code>2<sup>nd</sup></code> place athlete's rank is `"Silver Medal"`.
* The <code>3<sup>rd</sup></code> place athlete's rank is `"Bronze Medal"`.
* For the <code>4<sup>th</sup></code> place to the nth place athlete, their rank is their placement
  number (i.e., the <code>x<sup>th</sup></code> place athlete's rank is `"x"`).

Return an array `answer` of size `n` where `answer[i]` is the rank of the <code>i<sup>
th</sup></code> athlete.

##### Examples

**Example 1:**

<pre>
<b>Input:</b> score = [5,4,3,2,1]
<b>Output:</b> ["Gold Medal","Silver Medal","Bronze Medal","4","5"]
<b>Explanation:</b> The placements are [1st, 2nd, 3rd, 4th, 5th].

</pre>

**Example 2:**

<pre>
<b>Input:</b> score = [10,3,8,9,4]
<b>Output:</b> ["Gold Medal","5","Bronze Medal","Silver Medal","4"]
<b>Explanation:</b> The placements are [1st, 5th, 3rd, 2nd, 4th].
</pre>

##### Constraints

* <code>n == score.length</code>
* <code>1 <= n <= 10<sup>4</sup></code>
* <code>0 <= score[i] <= 10<sup>6</sup></code>
* All the values in score are **unique**.
