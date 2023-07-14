### [&#8592; Back to other problems](../../README.md)

## 495. [Teemo Attacking](https://leetcode.com/problems/teemo-attacking/)

Our hero Teemo is attacking an enemy Ashe with poison attacks! When Teemo attacks Ashe, Ashe gets
poisoned for a exactly `duration` seconds. More formally, an attack at second `t` will mean Ashe is
poisoned during the inclusive time interval `[t, t + duration - 1]`. If Teemo attacks again
**before** the poison effect ends, the timer for it is reset, and the poison effect will
end `duration`
seconds after the new attack.

You are given a non-decreasing integer array `timeSeries`, where `timeSeries[i]` denotes that Teemo
attacks Ashe at second `timeSeries[i]`, and an integer `duration`.

Return *the **total** number of seconds that Ashe is poisoned*.

##### Examples

**Example 1:**

<pre>
<b>Input:</b> timeSeries = [1,4], duration = 2
<b>Output:</b> 4
<b>Explanation:</b> Teemo's attacks on Ashe go as follows:
- At second 1, Teemo attacks, and Ashe is poisoned for seconds 1 and 2.
- At second 4, Teemo attacks, and Ashe is poisoned for seconds 4 and 5.
Ashe is poisoned for seconds 1, 2, 4, and 5, which is 4 seconds in total.
</pre>

**Example 2:**

<pre>
<b>Input:</b> timeSeries = [1,2], duration = 2
<b>Output:</b> 3
<b>Explanation:</b> Teemo's attacks on Ashe go as follows:
- At second 1, Teemo attacks, and Ashe is poisoned for seconds 1 and 2.
- At second 2 however, Teemo attacks again and resets the poison timer. Ashe is poisoned for seconds 2 and 3.
Ashe is poisoned for seconds 1, 2, and 3, which is 3 seconds in total.
</pre>

**Example 3:**

<pre>
<b>Input:</b> area = 122122
<b>Output:</b> [427,286]
</pre>

##### Constraints

* <code>1 <= timeSeries.length <= 10<sup>4</sup></code>
* <code>0 <= timeSeries[i], duration <= 10<sup>7</sup></code>
* `timeSeries` is sorted in **non-decreasing** order.
