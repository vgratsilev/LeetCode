import { reverse } from './reverseInteger';

describe('7. Reverse Integer', () => {
    test('Example 1', () => {
        expect(reverse(123)).toBe(321);
    });

    test('Example 2', () => {
        expect(reverse(-123)).toBe(-321);
    });

    test('Example 3', () => {
        expect(reverse(120)).toBe(21);
    });

    test('Example 4', () => {
        expect(reverse(1534236469)).toBe(0);
    });
});
