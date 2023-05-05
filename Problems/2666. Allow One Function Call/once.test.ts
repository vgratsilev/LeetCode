import { once } from './once';

describe('2666. Allow One Function Call', () => {
    test('Example 1', () => {
        const fn = (a: number, b: number, c: number) => (a + b + c);
        const onceFn = once(fn);
        expect(onceFn(1, 2, 3)).toBe(6);
        expect(onceFn(2, 3, 6)).toBeUndefined();
    });

    test('Example 2', () => {
        const fn = (a: number, b: number, c: number) => (a * b * c);
        const onceFn = once(fn);
        expect(onceFn(5, 7, 4)).toBe(140);
        expect(onceFn(2, 3, 6)).toBeUndefined();
        expect(onceFn(4, 6, 8)).toBeUndefined();
    });
});
