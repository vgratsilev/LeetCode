import { sortedSquares } from './SquaresSortedArray';

describe('977. Squares of a Sorted Array', () => {
    test('Example 1', () => {
        const nums: number[] = [-4, -1, 0, 3, 10];

        expect(sortedSquares(nums)).toEqual([0, 1, 9, 16, 100]);
    });

    test('Example 2', () => {
        const nums: number[] = [-7, -3, 2, 3, 11];

        expect(sortedSquares(nums)).toEqual([4, 9, 9, 49, 121]);
    });
});

