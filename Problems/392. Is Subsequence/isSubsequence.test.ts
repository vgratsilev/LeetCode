import { isSubsequence, isSubsequence2 } from './isSubsequence';

describe('392. Is Subsequence', () => {
    test('Example 1a', () => {
        expect(isSubsequence('abc', 'ahbgdc')).toBeTruthy();
    });

    test('Example 1b', () => {
        expect(isSubsequence2('abc', 'ahbgdc')).toBeTruthy();
    });

    test('Example 2a', () => {
        expect(isSubsequence('axc', 'ahbgdc')).toBeFalsy();
    });

    test('Example 2b', () => {
        expect(isSubsequence2('axc', 'ahbgdc')).toBeFalsy();
    });
});

