import { removeDuplicates } from './RemoveDuplicatesFromSortedArray';

describe('26. Remove Duplicates from Sorted Array', () => {
    test('Example 1', () => {
        const nums: number[] = [1, 1, 2];

        expect(removeDuplicates(nums)).toBe(2);
    });

    test('Example 2', () => {
        const nums: number[] = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

        expect(removeDuplicates(nums)).toBe(5);
    });
});
