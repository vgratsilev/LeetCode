import { TimeLimitedCache } from './TimeLimitedCache';

describe('2622. Cache With Time Limit', () => {
    test('Example 1', () => {
        const cacheObj = new TimeLimitedCache();
        setTimeout(() => {
            const param_1 = cacheObj.set(1, 42, 100);
            expect(param_1).toBeFalsy();
        }, 0);

        setTimeout(() => {
            const param_2 = cacheObj.get(1);
            expect(param_2).toBe(42);
        }, 50);

        setTimeout(() => {
            const param_3 = cacheObj.count();
            expect(param_3).toBe(1);
        }, 50);

        setTimeout(() => {
            const param_4 = cacheObj.get(1);
            expect(param_4).toBe(-1);
        }, 150);
    });
});
