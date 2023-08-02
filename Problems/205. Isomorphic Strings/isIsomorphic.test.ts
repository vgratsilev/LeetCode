import { isIsomorphic } from './isIsomorphic';

describe('205. Isomorphic Strings', () => {
    test('Example 1', () => {
        expect(isIsomorphic('egg', 'add')).toBeTruthy();
    });

    test('Example 2', () => {
        expect(isIsomorphic('foo', 'bar')).toBeFalsy();
    });

    test('Example 3', () => {
        expect(isIsomorphic('paper', 'title')).toBeTruthy();
    });
});


