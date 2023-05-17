import { reverseVowels, reverseVowelsRegex } from './reverseVowels';

describe('345. Reverse Vowels of a String', () => {
    test('Example 1a', () => {
        expect(reverseVowels('hello')).toBe('holle');
    });

    test('Example 1b', () => {
        expect(reverseVowelsRegex('hello')).toBe('holle');
    });

    test('Example 2a', () => {
        expect(reverseVowels('leetcode')).toBe('leotcede');
    });

    test('Example 2b', () => {
        expect(reverseVowelsRegex('leetcode')).toBe('leotcede');
    });
});
