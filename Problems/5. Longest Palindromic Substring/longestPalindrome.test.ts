import { longestPalindrome } from './longestPalindrome';

describe('5. Longest Palindromic Substring', () => {
    test('Example 1', () => {
        expect([ 'bab', 'aba' ]).toContain(longestPalindrome('babad'));
    });

    test('Example 2', () => {
        expect(longestPalindrome('cbbd')).toEqual('bb');
    });

    test('Example 3', () => {
        expect(longestPalindrome('abb')).toEqual('bb');
    });
});
