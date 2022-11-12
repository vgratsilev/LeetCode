import { removeElement } from './RemoveElement';

describe('27. Remove Element', () => {
    test('Example 1', () => {
        const nums: number[] = [3, 2, 2, 3];
        const val: number = 3;

        expect(removeElement(nums, val)).toBe(2);
    });

    test('Example 2', () => {
        const nums: number[] = [0, 1, 2, 2, 3, 0, 4, 2];
        const val: number = 2;

        expect(removeElement(nums, val)).toBe(5);
    });
});
