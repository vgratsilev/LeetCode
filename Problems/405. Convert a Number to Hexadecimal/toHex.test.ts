import { toHex } from './toHex';

describe('405. Convert a Number to Hexadecimal', () => {
    test('Example 1', () => {
        expect(toHex(26)).toBe('1a');
    });

    test('Example 2', () => {
        expect(toHex(-1)).toBe('ffffffff');
    });
});


