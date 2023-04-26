import { filter } from './filter';

describe('2629. Function Composition', () => {
    test('Example 1', async() => {
        const arr = [ 0, 10, 20, 30 ];
        const fn = function greaterThan10(n: number) {
            return n > 10;
        };
        expect(filter(arr, fn)).toEqual([ 20, 30 ]);
    });

    test('Example 2', async() => {
        const arr = [ 1, 2, 3 ];
        const fn = function firstIndex(_n: any, i: number) {
            return i === 0;
        };
        expect(filter(arr, fn)).toEqual([ 1 ]);
    });

    test('Example 3', async() => {
        const arr = [ -2, -1, 0, 1, 2 ];
        const fn = function plusOne(n: number) {
            return n + 1;
        };
        expect(filter(arr, fn)).toEqual([ -2, 0, 1, 2 ]);
    });
});
