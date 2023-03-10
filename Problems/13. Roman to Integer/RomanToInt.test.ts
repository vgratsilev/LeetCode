import { romanToInt } from './RomanToInt';

describe('13. Roman to Integer', () => {
    test('Example 1', () => {
        expect(romanToInt('III')).toBe(3);
    });

    test('Example 3', () => {
        expect(romanToInt('LVIII')).toBe(58);
    });

    test('Example 3', () => {
        expect(romanToInt('MCMXCIV')).toBe(1994);
    });
});
