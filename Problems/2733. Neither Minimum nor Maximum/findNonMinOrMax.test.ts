import { findNonMinOrMax } from './findNonMinOrMax';

describe('2733. Neither Minimum nor Maximum', () => {
    test('Example 1', () => {
        expect(findNonMinOrMax([ 3, 2, 1, 4 ])).toBe(2);
    });

    test('Example 2', () => {
        expect(findNonMinOrMax([ 1, 2 ])).toBe(-1);
    });

    test('Example 3', () => {
        expect(findNonMinOrMax([ 2, 1, 3 ])).toBe(2);
    });
});
