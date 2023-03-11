import { longestCommonPrefix } from './LongestCommonPrefix';

describe('13. Roman to Integer', () => {
    test('Example 1', () => {
        expect(longestCommonPrefix([ 'flower', 'flow', 'flight' ])).toBe('fl');
    });

    test('Example 2', () => {
        expect(longestCommonPrefix([ 'dog', 'racecar', 'car' ])).toBe('');
    });
});
