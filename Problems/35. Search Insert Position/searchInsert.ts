/**
 * Time complexity O(log n)
 * Space complexity O(1)
 */

export const searchInsert = (nums: number[], target: number): number => {
    let start = 0;
    let end = nums.length;
    let middle;

    while(start < end) {
        middle = start + Math.floor((end - start) / 2); // lower middle
        if(nums[middle] == target) {
            return middle;
        } else if(target > nums[middle]) {
            start = middle + 1;
        } else {
            end = middle;
        }
    }

    return start;
};
