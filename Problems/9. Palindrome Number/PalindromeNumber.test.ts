import { isPalindrome } from './PalindromeNumber';

describe('9. Palindrome Number', () => {
    test('Example 1', () => {
        expect(isPalindrome(121)).toBeTruthy();
    });

    test('Example 3', () => {
        expect(isPalindrome(-121)).toBeFalsy();
    });

    test('Example 3', () => {
        expect(isPalindrome(10)).toBeFalsy();
    });
});
