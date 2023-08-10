import { maxSum } from './maxSum';

describe('2815. Max Pair Sum in an Array', () => {
    test('Example 1', () => {
        expect(maxSum([ 51, 71, 17, 24, 42 ])).toBe(88);
    });

    test('Example 2', () => {
        expect(maxSum([ 1, 2, 3, 4 ])).toBe(-1);
    });
});


