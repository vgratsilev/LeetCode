import { countBits, countBits2 } from './countBits';

describe('338. Counting Bits', () => {
    test('Example 1', () => {
        expect(countBits(2)).toEqual([ 0, 1, 1 ]);
    });

    test('Example 2', () => {
        expect(countBits(5)).toEqual([ 0, 1, 1, 2, 1, 2 ]);
    });

    test('Example 3', () => {
        expect(countBits2(2)).toEqual([ 0, 1, 1 ]);
    });

    test('Example 4', () => {
        expect(countBits2(5)).toEqual([ 0, 1, 1, 2, 1, 2 ]);
    });
});
