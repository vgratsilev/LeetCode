import { findDisappearedNumbers } from './findDisappearedNumbers';

describe('448. Find All Numbers Disappeared in an Array', () => {
    test('Example 1', () => {
        expect(findDisappearedNumbers([ 4, 3, 2, 7, 8, 2, 3, 1 ])).toEqual([ 5, 6 ]);
    });

    test('Example 2', () => {
        expect(findDisappearedNumbers([ 1, 1 ])).toEqual([ 2 ]);
    });
});


