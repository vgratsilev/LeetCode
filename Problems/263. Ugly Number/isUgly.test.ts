import { isUgly, isUglyLoop } from './isUgly';

describe('263. Ugly Number', () => {
    test('Example 1a', () => {
        expect(isUgly(6)).toBeTruthy();
    });

    test('Example 1b', () => {
        expect(isUglyLoop(6)).toBeTruthy();
    });

    test('Example 2a', () => {
        expect(isUgly(1)).toBeTruthy();
    });

    test('Example 2b', () => {
        expect(isUglyLoop(1)).toBeTruthy();
    });

    test('Example 3a', () => {
        expect(isUgly(14)).toBeFalsy();
    });

    test('Example 3b', () => {
        expect(isUglyLoop(14)).toBeFalsy();
    });
});
