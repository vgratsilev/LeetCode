/**
 Do not return anything, modify nums in-place instead.
 */
export function moveZeroes(nums: number[]): void {
    let writePointer = 0;

    for(let readPointer = 0; readPointer < nums.length; readPointer++) {
        const val = nums[readPointer];
        nums[readPointer] = 0;
        
        if(val !== 0) {
            nums[writePointer] = val;
            writePointer++;
        }
    }
}
