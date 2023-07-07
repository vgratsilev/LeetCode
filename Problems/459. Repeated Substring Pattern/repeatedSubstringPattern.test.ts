import { repeatedSubstringPattern } from './repeatedSubstringPattern';

describe('459. Repeated Substring Pattern', () => {
    test('Example 1', () => {
        expect(repeatedSubstringPattern('abab')).toBeTruthy();
    });

    test('Example 2', () => {
        expect(repeatedSubstringPattern('aba')).toBeFalsy();
    });

    test('Example 3', () => {
        expect(repeatedSubstringPattern('abcabcabcabc')).toBeTruthy();
    });
});


