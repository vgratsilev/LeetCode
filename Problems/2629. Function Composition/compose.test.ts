import { compose, compose2 } from './compose';

describe('2629. Function Composition', () => {
    test('Example 1a', async() => {
        const functions = [ (x: number) => x + 1, (x: number) => x * x, (x: number) => 2 * x ];
        const fn = compose(functions);
        expect(fn(4)).toBe(65);
    });

    test('Example 2a', async() => {
        const functions = [ (x: number) => 10 * x, (x: number) => 10 * x, (x: number) => 10 * x ];
        const fn = compose(functions);
        expect(fn(1)).toBe(1000);
    });

    test('Example 3a', async() => {
        const functions: ((x: number) => number)[] = [];
        const fn = compose(functions);
        expect(fn(42)).toBe(42);
    });

    test('Example 1b', async() => {
        const functions = [ (x: number) => x + 1, (x: number) => x * x, (x: number) => 2 * x ];
        const fn = compose2(functions);
        expect(fn(4)).toBe(65);
    });

    test('Example 2b', async() => {
        const functions = [ (x: number) => 10 * x, (x: number) => 10 * x, (x: number) => 10 * x ];
        const fn = compose2(functions);
        expect(fn(1)).toBe(1000);
    });

    test('Example 3b', async() => {
        const functions: ((x: number) => number)[] = [];
        const fn = compose2(functions);
        expect(fn(42)).toBe(42);
    });
});
