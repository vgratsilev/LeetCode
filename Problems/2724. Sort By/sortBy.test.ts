import { sortBy } from './sortBy';

describe('2724. Sort By', () => {
    test('Example 1', () => {
        const arr = [ 5, 4, 1, 2, 3 ];
        const fn = (x: number) => x;
        expect(sortBy(arr, fn)).toEqual([ 1, 2, 3, 4, 5 ]);
    });

    test('Example 2', () => {
        const arr = [ { 'x': 1 }, { 'x': 0 }, { 'x': -1 } ];
        const fn = (d: { x: number; }) => d.x;
        expect(sortBy(arr, fn)).toEqual([ { 'x': -1 }, { 'x': 0 }, { 'x': 1 } ]);
    });

    test('Example 3', () => {
        const arr = [ [ 3, 4 ], [ 5, 2 ], [ 10, 1 ] ];
        const fn = (x: number[]) => x[1];
        expect(sortBy(arr, fn)).toEqual([ [ 10, 1 ], [ 5, 2 ], [ 3, 4 ] ]);
    });
});

