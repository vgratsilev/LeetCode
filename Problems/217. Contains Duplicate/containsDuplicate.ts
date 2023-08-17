export function containsDuplicate(nums: number[]): boolean {
    const numSet = new Set(nums);
    return nums.length !== numSet.size;
}
