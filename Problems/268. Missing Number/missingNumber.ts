export function missingNumber(nums: number[]): number {
    // return nums.reduce((acc, val, index) => acc += index - val, nums.length);

    let acc = nums.length;
    for(let index = 0; index < nums.length; index++) {
        acc += index - nums[index];
    }

    return acc;
}
