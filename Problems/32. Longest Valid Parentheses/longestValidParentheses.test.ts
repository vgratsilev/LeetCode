import { longestValidParentheses } from './longestValidParentheses';

describe('32. Longest Valid Parentheses', () => {
    test('Example 1', () => {
        expect(longestValidParentheses('(()')).toBe(2);
    });

    test('Example 2', () => {
        expect(longestValidParentheses(')()())')).toBe(4);
    });

    test('Example 3', () => {
        expect(longestValidParentheses('')).toBe(0);
    });

    test('Example 4', () => {
        expect(longestValidParentheses('()(()')).toBe(2);
    });

    test('Example 5', () => {
        expect(longestValidParentheses('(()((')).toBe(2);
    });

    test('Example 6', () => {
        expect(longestValidParentheses('()()')).toBe(4);
    });
});
