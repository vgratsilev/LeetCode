import { convertToBase7 } from './convertToBase7';

describe('504. Base 7', () => {
    test('Example 1', () => {
        expect(convertToBase7(100)).toBe('202');
    });

    test('Example 2', () => {
        expect(convertToBase7(-7)).toBe('-10');
    });
});



