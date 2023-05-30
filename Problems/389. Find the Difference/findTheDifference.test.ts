import {
    findTheDifference,
    findTheDifferenceArrays,
    findTheDifferenceBitwise
} from './findTheDifference';

describe('374. Guess Number Higher or Lower', () => {
    test('Example 1a', () => {
        expect(findTheDifference('abcd', 'abcde')).toBe('e');
    });

    test('Example 1b', () => {
        expect(findTheDifferenceArrays('abcd', 'abcde')).toBe('e');
    });

    test('Example 1c', () => {
        expect(findTheDifferenceBitwise('abcd', 'abcde')).toBe('e');
    });

    test('Example 2a', () => {
        expect(findTheDifference('', 'y')).toBe('y');
    });

    test('Example 2b', () => {
        expect(findTheDifferenceArrays('', 'y')).toBe('y');
    });

    test('Example 2c', () => {
        expect(findTheDifferenceBitwise('', 'y')).toBe('y');
    });
});
