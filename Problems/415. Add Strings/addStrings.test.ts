import { addStrings } from './addStrings';

describe('415. Add Strings', () => {
    test('Example 1', () => {
        expect(addStrings('11', '123')).toBe('134');
    });

    test('Example 2', () => {
        expect(addStrings('456', '77')).toBe('533');
    });

    test('Example 3', () => {
        expect(addStrings('0', '0')).toBe('0');
    });
});


