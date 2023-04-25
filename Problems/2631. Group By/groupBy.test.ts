import { groupBy } from './groupBy';

describe('2631. Group By', () => {
    beforeEach(() => {
        // @ts-ignore
        Array.prototype.groupBy = groupBy;
    });

    afterEach(() => {
        // @ts-ignore
        Array.prototype.groupBy = null;
    });

    test('Example 1', () => {
        const array = [
            { 'id': '1' },
            { 'id': '1' },
            { 'id': '2' }
        ];
        const fn = function(item: { id: any; }) {
            return item.id;
        };

        const output = {
            '1': [ { 'id': '1' }, { 'id': '1' } ],
            '2': [ { 'id': '2' } ]
        };

        expect(array.groupBy(fn)).toEqual(output);
    });

    test('Example 2', () => {
        const array = [
            [ 1, 2, 3 ],
            [ 1, 3, 5 ],
            [ 1, 5, 9 ]
        ];
        const fn = function(list: number[]) {
            return String(list[0]);
        };

        const output = {
            '1': [ [ 1, 2, 3 ], [ 1, 3, 5 ], [ 1, 5, 9 ] ]
        };

        expect(array.groupBy(fn)).toEqual(output);
    });

    test('Example 3', () => {
        const array = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
        const fn = function(n: number) {
            return String(n > 5);
        };

        const output = {
            'true': [ 6, 7, 8, 9, 10 ],
            'false': [ 1, 2, 3, 4, 5 ]
        };

        expect(array.groupBy(fn)).toEqual(output);
    });
});
