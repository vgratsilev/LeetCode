import { compactObject } from './compactObject';

describe('2705. Compact Object', () => {
    test('Example 1', () => {
        expect(compactObject([ null, 0, false, 1 ])).toEqual([ 1 ]);
    });

    test('Example 2', () => {
        expect(compactObject({ 'a': null, 'b': [ false, 1 ] })).toEqual({ 'b': [ 1 ] });
    });

    test('Example 3', () => {
        expect(compactObject([ null, 0, 5, [ 0 ], [ false, 16 ] ])).toEqual([ 5, [], [ 16 ] ]);
    });
});
