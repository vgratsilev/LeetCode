import { integerBreak } from './integerBreak';

describe('343. Integer Break', () => {
    test('Example 1', () => {
        expect(integerBreak(2)).toBe(1);
    });

    test('Example 2', () => {
        expect(integerBreak(10)).toBe(36);
    });
});
