import { threeSumClosest } from './threeSumClosest';

describe('16. 3Sum Closest', () => {
    test('Example 1', async() => {
        expect(threeSumClosest([ -1, 2, 1, -4 ], 1)).toBe(2);
    });

    test('Example 2', async() => {
        expect(threeSumClosest([ 0, 0, 0 ], 1)).toBe(0);
    });
});
