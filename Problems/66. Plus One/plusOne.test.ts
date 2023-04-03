import { plusOne, plusOne2 } from './plusOne';

describe('66. Plus One', () => {
    test('Example 1', () => {
        expect(plusOne([ 1, 2, 3 ])).toEqual([ 1, 2, 4 ]);
    });

    test('Example 2', () => {
        expect(plusOne([ 4, 3, 2, 1 ])).toEqual([ 4, 3, 2, 2 ]);
    });

    test('Example 2', () => {
        expect(plusOne([ 9 ])).toEqual([ 1, 0 ]);
    });

    test('Example 4', () => {
        expect(plusOne2([ 6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3 ])).toEqual([ 6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 4 ]);
    });

});


