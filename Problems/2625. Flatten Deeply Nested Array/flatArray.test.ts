import { flat } from './flatArray';

describe('2625. Flatten Deeply Nested Array', () => {
    test('Example 1', () => {
        const arr = [ 1, 2, 3, [ 4, 5, 6 ], [ 7, 8, [ 9, 10, 11 ], 12 ], [ 13, 14, 15 ] ];
        expect(flat(arr, 0)).toEqual(arr);
    });

    test('Example 2', () => {
        const arr = [ 1, 2, 3, [ 4, 5, 6 ], [ 7, 8, [ 9, 10, 11 ], 12 ], [ 13, 14, 15 ] ];
        expect(flat(arr, 1)).toEqual([ 1, 2, 3, 4, 5, 6, 7, 8, [ 9, 10, 11 ], 12, 13, 14, 15 ]
        );
    });

    test('Example 2', () => {
        const arr = [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, [ 9, 10, 11 ], 12 ], [ 13, 14, 15 ] ];
        expect(flat(arr, 2)).toEqual([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ]
        );
    });
});

