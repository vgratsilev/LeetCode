import { jsonToMatrix } from './jsonToMatrix';

describe('2675. Array of Objects to Matrix', () => {
    test('Example 1', () => {
        expect(jsonToMatrix([
            { 'b': 1, 'a': 2 },
            { 'b': 3, 'a': 4 }
        ])).toEqual([
            [ 'a', 'b' ],
            [ 2, 1 ],
            [ 4, 3 ]
        ]);
    });

    test('Example 2', () => {
        expect(jsonToMatrix([
            { 'a': 1, 'b': 2 },
            { 'c': 3, 'd': 4 },
            {}
        ])).toEqual([
            [ 'a', 'b', 'c', 'd' ],
            [ 1, 2, '', '' ],
            [ '', '', 3, 4 ],
            [ '', '', '', '' ]
        ]);
    });

    test('Example 3', () => {
        expect(jsonToMatrix([
            { 'a': { 'b': 1, 'c': 2 } },
            { 'a': { 'b': 3, 'd': 4 } }
        ])).toEqual([
            [ 'a.b', 'a.c', 'a.d' ],
            [ 1, 2, '' ],
            [ 3, '', 4 ]
        ]);
    });

    test('Example 4', () => {
        expect(jsonToMatrix([
            [ { 'a': null } ],
            [ { 'b': true } ],
            [ { 'c': 'x' } ]
        ])).toEqual([
            [ '0.a', '0.b', '0.c' ],
            [ null, '', '' ],
            [ '', true, '' ],
            [ '', '', 'x' ]
        ]);
    });

    test('Example 5', () => {
        expect(jsonToMatrix([
            {},
            {},
            {}
        ])).toEqual([
            [],
            [],
            [],
            []
        ]);
    });
});
