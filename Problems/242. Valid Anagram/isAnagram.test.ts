import { isAnagram } from './isAnagram';

describe('242. Valid Anagram', () => {
    test('Example 1', () => {
        expect(isAnagram('anagram', 'nagaram')).toBeTruthy();
    });

    test('Example 2', () => {
        expect(isAnagram('rat', 'car')).toBeFalsy();
    });

    test('Example 3', () => {
        expect(isAnagram('rat^', 't^ar')).toBeTruthy();
    });

    test('Example 4', () => {
        expect(isAnagram('ratё', 'tёar')).toBeTruthy();
    });
});
