/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const needed = target - nums[i];
        if (map.has(needed)) {
            return [i, map.get(needed)];
        } else {
            map.set(nums[i], i);
        }
    }
};

module.exports = twoSum;
