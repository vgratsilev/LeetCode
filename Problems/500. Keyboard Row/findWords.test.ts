import { findWords, findWords2 } from './findWords';

describe('500. Keyboard Row', () => {
    test('Example 1a', () => {
        expect(findWords([ 'Hello', 'Alaska', 'Dad', 'Peace' ])).toEqual([ 'Alaska', 'Dad' ]);
    });

    test('Example 1b', () => {
        expect(findWords2([ 'Hello', 'Alaska', 'Dad', 'Peace' ])).toEqual([ 'Alaska', 'Dad' ]);
    });

    test('Example 2a', () => {
        expect(findWords([ 'omk' ])).toEqual([]);
    });

    test('Example 2b', () => {
        expect(findWords2([ 'omk' ])).toEqual([]);
    });

    test('Example 3a', () => {
        expect(findWords([ 'adsdf', 'sfd' ])).toEqual([ 'adsdf', 'sfd' ]);
    });

    test('Example 3b', () => {
        expect(findWords2([ 'adsdf', 'sfd' ])).toEqual([ 'adsdf', 'sfd' ]);
    });
});


