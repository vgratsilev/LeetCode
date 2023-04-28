import { map } from './map';

describe('2633. Convert Object to JSON String', () => {
    test('Example 1', async() => {
        const arr = [ 1, 2, 3 ];
        const fn = function plusone(n: number) {
            return n + 1;
        };
        expect(map(arr, fn)).toEqual([ 2, 3, 4 ]);
    });

    test('Example 2', async() => {
        const arr = [ 1, 2, 3 ];
        const fn = function plusI(n: number, i: number) {
            return n + i;
        };
        expect(map(arr, fn)).toEqual([ 1, 3, 5 ]);
    });

    test('Example 3', async() => {
        const arr = [ 10, 20, 30 ];
        const fn = function constant() {
            return 42;
        };
        expect(map(arr, fn)).toEqual([ 42, 42, 42 ]);
    });
});
