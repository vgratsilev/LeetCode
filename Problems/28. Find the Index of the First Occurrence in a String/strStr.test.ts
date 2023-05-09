import { strStr } from './strStr';

describe('28. Find the Index of the First Occurrence in a String', () => {
    test('Example 1', () => {
        expect(strStr('sadbutsad', 'sad')).toBe(0);
    });

    test('Example 2', () => {
        expect(strStr('leetcode', 'leeto')).toBe(-1);
    });
});
