import { guessNumber } from './guessNumber';

describe('374. Guess Number Higher or Lower', () => {
    test('Example 1', () => {
        expect(guessNumber(10, 6)).toBe(6);
    });

    test('Example 2', () => {
        expect(guessNumber(1, 1)).toBe(1);
    });

    test('Example 3', () => {
        expect(guessNumber(2, 1)).toBe(1);
    });
});
