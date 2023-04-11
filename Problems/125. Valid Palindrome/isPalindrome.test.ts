import { isPalindrome } from './isPalindrome';

describe('125. Valid Palindrome', () => {
    test('Example 1', () => {
        expect(isPalindrome('A man, a plan, a canal: Panama')).toBeTruthy();
    });

    test('Example 2', () => {
        expect(isPalindrome('race a car')).toBeFalsy();
    });

    test('Example 3', () => {
        expect(isPalindrome(' ')).toBeTruthy();
    });
});
