import { isPowerOfTwo } from './isPowerOfTwo';

describe('231. Power of Two\n', () => {
    test('Example 1', () => {
        expect(isPowerOfTwo(1)).toBeTruthy();
    });

    test('Example 2', () => {
        expect(isPowerOfTwo(16)).toBeTruthy();
    });

    test('Example 3', () => {
        expect(isPowerOfTwo(3)).toBeFalsy();
    });
});
