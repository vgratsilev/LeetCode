const removeElement = require('./RemoveElement');

describe('27. Remove Element', () => {
    test('Example 1', () => {
        const nums = [3, 2, 2, 3];
        const val = 3;

        expect(removeElement(nums, val)).toBe(2);
    });

    test('Example 2', () => {
        const nums = [0, 1, 2, 2, 3, 0, 4, 2];
        const val = 2;

        expect(removeElement(nums, val)).toBe(5);
    });
});

