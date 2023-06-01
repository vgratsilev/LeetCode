import { expectFn } from './toBeOrNotToBe';

describe('2704. To Be Or Not To Be', () => {
    test('Example 1', () => {
        expect(expectFn(5).toBe(5)).toBeTruthy();
    });

    test('Example 2', () => {
        function execFn() {
            expectFn(5).toBe(null);
        }

        expect(execFn).toThrow('Not Equal');
    });

    test('Example 3', () => {
        expect(expectFn(5).notToBe(null)).toBeTruthy();
    });
});
