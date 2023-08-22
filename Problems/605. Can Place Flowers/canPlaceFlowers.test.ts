import { canPlaceFlowers } from './canPlaceFlowers';

describe('605. Can Place Flowers', () => {
    test('Example 1', () => {
        expect(canPlaceFlowers([ 1, 0, 0, 0, 1 ], 1)).toBeTruthy();
    });

    test('Example 2', () => {
        expect(canPlaceFlowers([ 1, 0, 0, 0, 1 ], 2)).toBeFalsy();
    });
});


