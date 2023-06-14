import { moveZeroes } from './moveZeroes';

describe('283. Move Zeroes', () => {
    test('Example 1', () => {
        const nums = [ 0, 1, 0, 3, 12 ];
        moveZeroes(nums);
        expect(nums).toEqual([ 1, 3, 12, 0, 0 ]);
    });

    test('Example 2', () => {
        const nums = [ 0 ];
        moveZeroes(nums);
        expect(nums).toEqual([ 0 ]);
    });
});
