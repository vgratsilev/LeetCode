import { wordPattern } from './wordPattern';

describe('290. Word Pattern', () => {
    test('Example 1', () => {
        expect(wordPattern("abba", "dog cat cat dog")).toBeTruthy();
    });

    test('Example 2', () => {
        expect(wordPattern("abba", "dog cat cat fish")).toBeFalsy();
    });

    test('Example 3', () => {
        expect(wordPattern("aaaa", "dog cat cat dog")).toBeFalsy();
    });
});
