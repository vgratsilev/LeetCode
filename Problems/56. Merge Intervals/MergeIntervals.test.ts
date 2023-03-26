import { merge } from './MergeIntervals';

describe('56. Merge Intervals', () => {
    test('Example 1', () => {
        expect(merge([ [ 1, 3 ], [ 2, 6 ], [ 8, 10 ], [ 15, 18 ] ])).toEqual([ [ 1, 6 ], [ 8, 10 ], [ 15, 18 ] ]);
    });

    test('Example 2', () => {
        expect(merge([ [ 1, 4 ], [ 4, 5 ] ])).toEqual([ [ 1, 5 ] ]);
    });

    test('Example 3', () => {
        expect(merge([ [ 11, 12 ], [ 2, 3 ], [ 5, 7 ], [ 1, 4 ], [ 8, 10 ], [ 6, 8 ] ])).toEqual([ [ 1, 4 ], [ 5, 10 ], [ 11, 12 ] ]);
    });
});
