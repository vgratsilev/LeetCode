import { countSegments } from './countSegments';

describe('434. Number of Segments in a String', () => {
    test('Example 1', () => {
        expect(countSegments('Hello, my name is John')).toBe(5);
    });

    test('Example 2', () => {
        expect(countSegments('Hello')).toBe(1);
    });

    test('Example 3', () => {
        expect(countSegments('')).toBe(0);
    });
});


