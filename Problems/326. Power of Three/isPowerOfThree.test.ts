import { isPowerOfThree } from './isPowerOfThree';

describe('326. Power of Three', () => {
    test('Example 1', () => {
        expect(isPowerOfThree(27)).toBeTruthy();
    });

    test('Example 2', () => {
        expect(isPowerOfThree(0)).toBeFalsy();
    });

    test('Example 3', () => {
        expect(isPowerOfThree(-1)).toBeFalsy();
    });
});
