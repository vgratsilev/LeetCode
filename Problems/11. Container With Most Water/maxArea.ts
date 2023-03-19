/**
 * Time complexity: O(n)
 * Space complexity: O(1)
 */
export const maxArea = (height: number[]): number => {
    let maxWater = 0;

    let left = 0;
    let right = height.length - 1;

    while(left < right) {
        maxWater = Math.max(maxWater, Math.min(height[left], height[right]) * (right - left));

        if(height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxWater;
};
