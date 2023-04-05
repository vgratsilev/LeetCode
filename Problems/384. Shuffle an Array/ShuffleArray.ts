/**
 * Time complexity O(n)
 * Space complexity O(n)
 */

export class Solution {
    private readonly nums: number[];

    constructor(nums: number[]) {
        this.nums = nums;
    }

    reset(): number[] {
        return this.nums;
    }

    shuffle(): number[] {
        const nums = this.nums.slice();
        for(let i = nums.length - 1; i > 0; i--) {
            let tmp = nums[i];
            let rnd = Math.floor(Math.random() * (i + 1));
            nums[i] = nums[rnd];
            nums[rnd] = tmp;
        }

        return nums;
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
