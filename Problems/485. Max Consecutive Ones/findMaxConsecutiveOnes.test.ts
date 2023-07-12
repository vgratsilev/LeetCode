import { findMaxConsecutiveOnes } from './findMaxConsecutiveOnes';

describe('485. Max Consecutive Ones', () => {
    test('Example 1', () => {
        expect(findMaxConsecutiveOnes([ 1, 1, 0, 1, 1, 1 ])).toBe(3);
    });

    test('Example 2', () => {
        expect(findMaxConsecutiveOnes([ 1, 0, 1, 1, 0, 1 ])).toBe(2);
    });
});


