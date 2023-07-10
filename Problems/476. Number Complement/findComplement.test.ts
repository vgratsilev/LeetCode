import { findComplement, findComplement2 } from './findComplement';

describe('476. Number Complement', () => {
    test('Example 1a', () => {
        expect(findComplement(5)).toBe(2);
    });

    test('Example 1b', () => {
        expect(findComplement2(5)).toBe(2);
    });

    test('Example 2a', () => {
        expect(findComplement(1)).toBe(0);
    });

    test('Example 2b', () => {
        expect(findComplement2(1)).toBe(0);
    });
});


