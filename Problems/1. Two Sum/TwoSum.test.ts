import { twoSum } from './TwoSum';

describe('1. Two Sum', () => {
    test('Example 1', () => {
        const nums: number[] = [2, 7, 11, 15];
        const target: number = 9;

        expect(twoSum(nums, target)).toEqual([1, 0]);
    });

    test('Example 3', () => {
        const nums: number[] = [3, 2, 4];
        const target: number = 6;

        expect(twoSum(nums, target)).toEqual([2, 1]);
    });

    test('Example 3', () => {
        const nums: number[] = [3, 3];
        const target: number = 6;

        expect(twoSum(nums, target)).toEqual([1, 0]);
    });
});

