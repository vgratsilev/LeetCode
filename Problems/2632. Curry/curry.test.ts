import { curry } from './curry';

const sum = (a: number, b: number, c: number): number => {
    return a + b + c;
};

describe('2632. Curry', () => {
    test('Example 1', () => {
        const fn = sum;
        const curriedSum = curry(fn);
        expect(curriedSum(1)(2)(3)).toBe(6);
    });

    test('Example 2', () => {
        const fn = sum;
        const curriedSum = curry(fn);
        expect(curriedSum(1, 2)(3)).toBe(6);
        expect(curriedSum(1)(2, 3)).toBe(6);
    });

    test('Example 3', async() => {
        const fn = sum;
        const curriedSum = curry(fn);
        expect(curriedSum()()(1, 2, 3)).toBe(6);
    });

    test('Example 4', async() => {
        const fn = function life() {
            return 42;
        };
        const curriedLife = curry(fn);
        expect(curriedLife()).toBe(42);
    });

});
