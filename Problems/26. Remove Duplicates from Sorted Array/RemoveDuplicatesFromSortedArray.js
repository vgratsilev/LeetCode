/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums) => {
    let j = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[i + 1]) {
            nums[j++] = nums[i];
        }
    }

    return j;
};

module.exports = removeDuplicates;
