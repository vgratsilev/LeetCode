import { findNumbers } from './FindNumbersWithEvenNumbersOfDigits';

describe('1295. Find Numbers with Even Number of Digits', () => {
    test('Example 1', () => {
        const nums: number[] = [12, 345, 2, 6, 7896];

        expect(findNumbers(nums)).toBe(2);
    });

    test('Example 2', () => {
        const nums: number[] = [555, 901, 482, 1771];

        expect(findNumbers(nums)).toBe(1);
    });
});

