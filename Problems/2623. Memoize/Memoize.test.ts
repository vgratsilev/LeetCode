import { memoize } from './Memoize';

describe('2623. Memoize', () => {
    test('Example 1', () => {
        let callCount = 0;
        const memoizedFn = memoize(function(a, b) {
            callCount += 1;
            return a + b;
        });
        expect(memoizedFn(2, 3)).toBe(5);
        expect(memoizedFn(2, 3)).toBe(5);
        expect(callCount).toBe(1);
    });
});
