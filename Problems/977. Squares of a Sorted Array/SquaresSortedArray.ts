export const sortedSquares = (nums: number[]): number[] => {
    // brute solution
    // return nums.map((item) => item ** 2).sort((a, b) => a - b);

    // two pointers
    const result: number[] = [];
    let left = 0;
    let right = nums.length - 1;
    let i = right;

    while (left <= right) {
        if (nums[left] ** 2 > nums[right] ** 2) {
            result[i--] = nums[left++] ** 2;
        } else {
            result[i--] = nums[right--] ** 2;
        }
    }

    return result;
};
