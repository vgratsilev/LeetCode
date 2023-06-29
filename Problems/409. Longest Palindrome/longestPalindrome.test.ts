import { longestPalindrome } from './longestPalindrome';

describe('409. Longest Palindrome', () => {
    test('Example 1', () => {
        expect(longestPalindrome('abccccdd')).toBe(7);
    });

    test('Example 2', () => {
        expect(longestPalindrome('a')).toBe(1);
    });
});


