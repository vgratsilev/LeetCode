import { maxArea } from './maxArea';

describe('11. Container With Most Water', () => {
    test('Example 1', () => {
        expect(maxArea([ 1, 8, 6, 2, 5, 4, 8, 3, 7 ])).toEqual(49);
    });

    test('Example 2', () => {
        expect(maxArea([ 1, 1 ])).toEqual(1);
    });
});

