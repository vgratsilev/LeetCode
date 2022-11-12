export const removeDuplicates = (nums: number[]): number => {
    let j = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[i + 1]) {
            nums[j++] = nums[i];
        }
    }

    return j;
};
