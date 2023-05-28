import { isPerfectSquareTaylorSeries, isPerfectSquareBinarySearch } from './isPerfectSquare';

describe('268. Missing Number', () => {
    test('Example 1a', () => {
        expect(isPerfectSquareTaylorSeries(16)).toBeTruthy();
    });

    test('Example 1b', () => {
        expect(isPerfectSquareBinarySearch(16)).toBeTruthy();
    });

    test('Example 2a', () => {
        expect(isPerfectSquareTaylorSeries(14)).toBeFalsy();
    });

    test('Example 2b', () => {
        expect(isPerfectSquareBinarySearch(14)).toBeFalsy();
    });
});
