/**
 * Time complexity O(n)
 * Space complexity O(1)
 */

// plusOne can't handle big digits array, but plusOne2 can
export const plusOne = (digits: number[]): number[] => {
    let multiplier = 1;
    let sum = 0;

    for(let i = digits.length - 1; i >= 0; i--) {
        sum += digits[i] * multiplier;
        multiplier *= 10;
    }

    sum += 1;

    return sum.toString().split('').map(Number);
};


export const plusOne2 = (digits: number[]): number[] => {
    let sum = BigInt(digits.join('')) + 1n;
    return sum.toString().split('').map(Number);
};
