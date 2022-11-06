const threeSum = require('./3Sum');

describe('15. 3Sum', () => {
    test('Example 1', () => {
        const nums = [-1, 0, 1, 2, -1, -4];

        expect(threeSum(nums)).toEqual([[-1, -1, 2], [-1, 0, 1]])
    });

    test('Example 3', () => {
        const nums = [0, 1, 1];

        expect(threeSum(nums)).toEqual([])
    });

    test('Example 3', () => {
        const nums = [0, 0, 0];

        expect(threeSum(nums)).toEqual([[0, 0, 0]])
    });

    test('Example 4', () => {
        const nums = [-2, 0, 0, 2, 2];

        expect(threeSum(nums)).toEqual([[-2, 0, 2]])
    });
});

