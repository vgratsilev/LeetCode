export function findDisappearedNumbers(nums: number[]): number[] {
    let set = new Set(nums);
    const result: number[] = [];
    for (let i = 1; i < nums.length + 1; i++) {
        if (!set.has(i)) {
            result.push(i);
        }
    }
    return result;
}
