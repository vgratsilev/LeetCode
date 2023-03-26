/**
 * Time complexity O(n * log n)
 * Space complexity O(n)
 */

export const merge = (intervals: number[][]): number[][] => {
    if(intervals.length < 2) {
        return intervals;
    }

    //1. sort array by intervals start
    intervals.sort(([ start1 ], [ start2 ]) => start1 - start2);

    //2. return
    const result = [ intervals[0] ];

    //3. Merge intervals
    for(const interval of intervals) {
        let recent = result.at(-1);
        if(recent![1] >= interval[0]) {
            recent![1] = Math.max(recent![1], interval[1]);
        } else {
            result.push(interval);
        }
    }

    return result;
};
