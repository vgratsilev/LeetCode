import { leastBricks } from './leastBricks';

describe('554. Brick Wall', () => {
    test('Example 1', () => {
        expect(leastBricks([ [ 1, 2, 2, 1 ], [ 3, 1, 2 ], [ 1, 3, 2 ], [ 2, 4 ], [ 3, 1, 2 ], [ 1, 3, 1, 1 ] ])).toBe(2);
    });

    test('Example 2', () => {
        expect(leastBricks([ [ 1 ], [ 1 ], [ 1 ] ])).toBe(3);
    });
});
