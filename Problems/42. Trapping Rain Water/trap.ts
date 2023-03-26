/**
 * Time complexity O(n)
 * Space complexity O(1)
 */

export const trap = (height: number[]): number => {
    let maxLeft = height[0];
    let maxRight = height[height.length - 1];

    let left = 1;
    let right = height.length - 2;

    let result = 0;

    while(left <= right) {
        if(maxLeft <= maxRight) {
            if(maxLeft - height[left] > 0) {
                result += maxLeft - height[left];
            }
            maxLeft = Math.max(maxLeft, height[left]);
            left++;
        } else {
            if(maxRight - height[right] > 0) {
                result += maxRight - height[right];
            }
            maxRight = Math.max(maxRight, height[right]);
            right--;
        }
    }


    return result;
};
