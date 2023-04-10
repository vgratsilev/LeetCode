/**
 * Time complexity O(n)
 * Space complexity O(1)
 */

export const singleNumber = (nums: number[]): number => {
    let result = 0;
    for(let i = 0; i < nums.length; i++) {
        result = result ^ nums[i]; // xor
    }
    return result;
};

// xor
// x ^ 0 = x
// x ^ x = 0
// x ^ y ^ x = (x ^ x) ^ y = y

