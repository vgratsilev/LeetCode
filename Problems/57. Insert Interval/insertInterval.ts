/**
 * Time complexity O(n)
 * Space complexity O(n)
 */

export const insert = (intervals: number[][], newInterval: number[]): number[][] => {
    const n = intervals.length;

    if(n === 0) {
        return [ newInterval ];
    }

    let [ newStart, newEnd ] = newInterval;

    const left: number[][] = [];
    const right: number[][] = [];

    for(let interval of intervals) {
        const [ start, end ] = interval;
        if(end < newStart) {
            left.push(interval);
        } else if(start > newEnd) {
            right.push(interval);
        } else {
            newStart = Math.min(start, newStart);
            newEnd = Math.max(end, newEnd);
        }
    }

    return [ ...left, [ newStart, newEnd ], ...right ];
};
