export const twoSum = (nums: number[], target: number): number[] => {
    const map = new Map();
    let result: number[] = [];
    for (let i = 0; i < nums.length; i++) {
        const needed = target - nums[i];
        if (map.has(needed)) {
            result = [i, map.get(needed)];
            break;
        } else {
            map.set(nums[i], i);
        }
    }

    return result;
};
