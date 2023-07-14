import { findPoisonedDuration } from './findPoisonedDuration';

describe('495. Teemo Attacking', () => {
    test('Example 1', () => {
        expect(findPoisonedDuration([ 1, 4 ], 2)).toBe(4);
    });

    test('Example 2', () => {
        expect(findPoisonedDuration([ 1, 2 ], 2)).toBe(3);
    });
});



