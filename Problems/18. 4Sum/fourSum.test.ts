import { fourSum } from './fourSum';

describe('18. 4Sum', () => {
    test('Example 1', () => {
        expect(fourSum([ 1, 0, -1, 0, -2, 2 ], 0)).toEqual([ [ -2, -1, 1, 2 ], [ -2, 0, 0, 2 ], [ -1, 0, 0, 1 ] ]);
    });

    test('Example 2', () => {
        expect(fourSum([ 2, 2, 2, 2, 2 ], 8)).toEqual([ [ 2, 2, 2, 2 ] ]);
    });
});
