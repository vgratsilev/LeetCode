export function findNonMinOrMax(nums: number[]): number {
    if(nums.length < 3) {
        return -1;
    }

    return [ nums[0], nums[1], nums[2] ].sort((a, b) => a - b)[1];
}
