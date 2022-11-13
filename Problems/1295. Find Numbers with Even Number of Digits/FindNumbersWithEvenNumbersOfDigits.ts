export const findNumbers = (nums: number[]): number => {
    let result = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i].toString().length % 2 === 0) {
            result++;
        }
    }
    return result;
};
