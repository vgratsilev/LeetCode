import { cancellable } from './cancellable';

describe('2715. Execute Cancellable Function With Delay', () => {
    test('Example 1', () => {
        const fn = (x: number) => x * 5;
        const args = [ 2 ];
        const t = 20;
        const cancel = cancellable(fn, args, t);

        setTimeout(() => {
            expect(cancel()).toEqual({ 'time': 20, 'returned': 10 });
        }, 50);
    });

    test('Example 2', () => {
        const fn = (x: number) => x ** 2;
        const args = [ 2 ];
        const t = 100;
        const cancel = cancellable(fn, args, t);

        setTimeout(() => {
            expect(cancel()).toBeUndefined();
        }, 50);
    });

    test('Example 3', () => {
        const fn = (x1: number, x2: number) => x1 * x2;
        const args = [ 2, 4 ];
        const t = 30;
        const cancel = cancellable(fn, args, t);

        setTimeout(() => {
            expect(cancel()).toEqual({ 'time': 30, 'returned': 8 });
        }, 100);
    });
});
