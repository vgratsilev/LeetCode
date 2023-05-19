export function topKFrequent(nums: number[], k: number): number[] {
    const result: number[] = [];
    const map = new Map();

    nums.forEach((item) => {
        map.set(item, map.get(item) + 1 || 1);
    });

    const sortedNums = [ ...map.entries() ].sort((a: [ number, number ], b: [ number, number ]) => b[1] - a[1]);

    for(let i = 0; i < k; i++) {
        result.push(sortedNums[i][0])
    }

    return result;
}
