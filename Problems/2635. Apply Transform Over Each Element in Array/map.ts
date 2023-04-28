/**
 * Time complexity O(n)
 * Space complexity O(n)
 */

export const map = (arr: number[], fn: (n: number, i: number) => number): number[] => {
    const result: number[] = [];
    arr.forEach((item, index) => {
        result.push(fn(item, index));
    });
    return result;
};
