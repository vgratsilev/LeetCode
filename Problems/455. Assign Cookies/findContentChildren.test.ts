import { findContentChildren } from './findContentChildren';

describe('455. Assign Cookies', () => {
    test('Example 1', () => {
        expect(findContentChildren([ 1, 2, 3 ], [ 1, 1 ])).toBe(1);
    });

    test('Example 2', () => {
        expect(findContentChildren([ 1, 2 ], [ 1, 2, 3 ])).toBe(2);
    });
});


