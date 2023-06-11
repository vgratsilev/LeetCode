import { isEmpty, isEmpty2 } from './isEmpty';

describe('2727. Is Object Empty\n', () => {
    test('Example 1a', () => {
        expect(isEmpty({ 'x': 5, 'y': 42 })).toBeFalsy();
    });

    test('Example 1b', () => {
        expect(isEmpty2({ 'x': 5, 'y': 42 })).toBeFalsy();
    });

    test('Example 2a', () => {
        expect(isEmpty({})).toBeTruthy();
    });

    test('Example 2b', () => {
        expect(isEmpty2({})).toBeTruthy();
    });

    test('Example 3a', () => {
        expect(isEmpty([ null, false, 0 ])).toBeTruthy();
    });

    test('Example 3b', () => {
        expect(isEmpty2([ null, false, 0 ])).toBeTruthy();
    });
});
