const dfs = (nums: number[], target: number, index: number, sum: number, path: number[], result: number[][]) => {
    if(sum === target) {
        result.push([ ...path ]);
        return;
    }

    // path is wrong, stop
    if(sum > target || index === nums.length) {
        return;
    }

    sum = sum + nums[index];
    path.push(nums[index]);
    dfs(nums, target, index, sum, path, result);

    // exclude current element
    path.pop();
    sum = sum - nums[index];
    dfs(nums, target, index + 1, sum, path, result);
};

export const combinationSum = (candidates: number[], target: number): number[][] => {
    candidates = candidates.sort((a, b) => a - b);
    const result: number[][] = [];

    dfs(candidates, target, 0, 0, [], result);

    return result;
};
