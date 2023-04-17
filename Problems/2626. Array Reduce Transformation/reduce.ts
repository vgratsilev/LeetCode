/**
 * Time complexity O(n)
 * Space complexity  O(1)
 */

type Fn = (accum: number, curr: number) => number

export function reduce(nums: number[], fn: Fn, init: number): number {
    let result = init;
    nums.forEach((item) => {
        result = fn(result, item);
    });
    return result;
}
