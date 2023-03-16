import { longestCommonPrefix } from './LongestCommonPrefix';

describe('14. Longest Common Prefix', () => {
    test('Example 1', () => {
        expect(longestCommonPrefix([ 'flower', 'flow', 'flight' ])).toBe('fl');
    });

    test('Example 2', () => {
        expect(longestCommonPrefix([ 'dog', 'racecar', 'car' ])).toBe('');
    });

    test('Example 3', () => {
        expect(longestCommonPrefix([ 'flower', 'flower', 'flower', 'flower' ])).toBe('flower');
    });
});
