import { hammingDistance } from './hammingDistance';

describe('461. Hamming Distance', () => {
    test('Example 1', () => {
        expect(hammingDistance(1, 4)).toBe(2);
    });

    test('Example 2', () => {
        expect(hammingDistance(3, 1)).toBe(1);
    });
});


