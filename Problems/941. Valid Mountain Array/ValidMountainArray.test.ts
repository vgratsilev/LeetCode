import { validMountainArray } from './ValidMountainArray';

describe('941. Valid Mountain Array', () => {
    test('Example 1', () => {
        const nums: number[] = [2, 1];

        expect(validMountainArray(nums)).toBeFalsy();
    });

    test('Example 3', () => {
        const nums: number[] = [3, 5, 5];

        expect(validMountainArray(nums)).toBeFalsy();
    });

    test('Example 3', () => {
        const nums: number[] = [0, 3, 2, 1];

        expect(validMountainArray(nums)).toBeTruthy();
    });
});

