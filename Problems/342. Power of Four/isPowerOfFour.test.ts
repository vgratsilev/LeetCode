import { isPowerOfFour, isPowerOfFourLoop } from './isPowerOfFour';

describe('342. Power of Four', () => {
    test('Example 1a', () => {
        expect(isPowerOfFour(16)).toBeTruthy();
    });

    test('Example 1b', () => {
        expect(isPowerOfFourLoop(16)).toBeTruthy();
    });

    test('Example 2a', () => {
        expect(isPowerOfFour(5)).toBeFalsy();
    });

    test('Example 2b', () => {
        expect(isPowerOfFourLoop(5)).toBeFalsy();
    });

    test('Example 3a', () => {
        expect(isPowerOfFour(1)).toBeTruthy();
    });

    test('Example 3b', () => {
        expect(isPowerOfFourLoop(1)).toBeTruthy();
    });
});
