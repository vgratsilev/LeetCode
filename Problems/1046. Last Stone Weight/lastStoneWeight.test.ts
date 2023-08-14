import { lastStoneWeight } from './lastStoneWeight';

describe('1046. Last Stone Weight', () => {
    test('Example 1', () => {
        expect(lastStoneWeight([ 2, 7, 4, 1, 8, 1 ])).toBe(1);
    });

    test('Example 2', () => {
        expect(lastStoneWeight([ 1 ])).toBe(1);
    });
});


