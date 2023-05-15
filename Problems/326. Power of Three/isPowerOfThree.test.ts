import { isPowerOfThree, isPowerOfThreeLoop } from './isPowerOfThree';

describe('326. Power of Three', () => {
    test('Example 1a', () => {
        expect(isPowerOfThree(27)).toBeTruthy();
    });

    test('Example 1b', () => {
        expect(isPowerOfThreeLoop(27)).toBeTruthy();
    });

    test('Example 2a', () => {
        expect(isPowerOfThree(0)).toBeFalsy();
    });

    test('Example 2b', () => {
        expect(isPowerOfThreeLoop(0)).toBeFalsy();
    });

    test('Example 3a', () => {
        expect(isPowerOfThree(-1)).toBeFalsy();
    });

    test('Example 3b', () => {
        expect(isPowerOfThreeLoop(-1)).toBeFalsy();
    });

    test('Example 4a', () => {
        expect(isPowerOfThree(1)).toBeTruthy();
    });

    test('Example 4b', () => {
        expect(isPowerOfThreeLoop(1)).toBeTruthy();
    });
});
