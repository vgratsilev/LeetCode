import { addBinary, addBinary2 } from './addBinary';

describe('67. Add Binary', () => {
    test('Example 1', () => {
        expect(addBinary('11', '1')).toBe('100');
    });

    test('Example 2', () => {
        expect(addBinary('1010', '1011')).toBe('10101');
    });

    test('Example 3', () => {
        expect(addBinary2('11', '1')).toBe('100');
    });

    test('Example 4', () => {
        expect(addBinary2('1010', '1011')).toBe('10101');
    });
});
