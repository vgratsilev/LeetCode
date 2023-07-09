import { islandPerimeter } from './islandPerimeter';

describe('463. Island Perimeter', () => {
    test('Example 1', () => {
        expect(islandPerimeter([ [ 0, 1, 0, 0 ], [ 1, 1, 1, 0 ], [ 0, 1, 0, 0 ], [ 1, 1, 0, 0 ] ])).toBe(16);
    });

    test('Example 2', () => {
        expect(islandPerimeter([ [ 1 ] ])).toBe(4);
    });

    test('Example 3', () => {
        expect(islandPerimeter([ [ 1, 0 ] ])).toBe(4);
    });
});


