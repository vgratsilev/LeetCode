import { isValid } from './validParentheses';

describe('20. Valid Parentheses', () => {
    test('Example 1', () => {
        expect(isValid('()')).toBeTruthy();
    });

    test('Example 2', () => {
        expect(isValid('()[]{}')).toBeTruthy();
    });

    test('Example 3', () => {
        expect(isValid('(]')).toBeFalsy();
    });

    test('Example 4', () => {
        expect(isValid('{[]}')).toBeTruthy();
    });
});
