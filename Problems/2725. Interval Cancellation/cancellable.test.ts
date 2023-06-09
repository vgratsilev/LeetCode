import { cancellable } from './cancellable';

describe('2725. Interval Cancellation', () => {
    test('Example 1', () => {
        const result: any[] = [];

        const fn = (x: number) => x * 2;
        const args = [ 4 ];
        const t = 20;
        const cancelT = 110;

        const start = performance.now();

        const log = (...argsArr: any[]) => {
            // @ts-ignore
            const val = fn(...argsArr);
            result.push({
                'time': Math.floor(performance.now() - start),
                // @ts-ignore
                'returned': fn(...argsArr)
            });
        };

        const cancel = cancellable(log, args, t);

        setTimeout(() => {
            cancel();
            expect(result).toEqual([
                { 'time': 0, 'returned': 8 },
                { 'time': 20, 'returned': 8 },
                { 'time': 40, 'returned': 8 },
                { 'time': 60, 'returned': 8 },
                { 'time': 80, 'returned': 8 },
                { 'time': 100, 'returned': 8 }
            ]);
        }, cancelT);
    });

    test('Example 2', () => {
        const result: any[] = [];

        const fn = (x1: number, x2: number) => (x1 * x2);
        const args = [ 2, 5 ];
        const t = 25;
        const cancelT = 140;

        const start = performance.now();

        const log = (...argsArr: any[]) => {
            // @ts-ignore
            const val = fn(...argsArr);
            result.push({
                'time': Math.floor(performance.now() - start),
                // @ts-ignore
                'returned': fn(...argsArr)
            });
        };

        const cancel = cancellable(log, args, t);

        setTimeout(() => {
            cancel();
            expect(result).toEqual([
                { 'time': 0, 'returned': 10 },
                { 'time': 25, 'returned': 10 },
                { 'time': 50, 'returned': 10 },
                { 'time': 75, 'returned': 10 },
                { 'time': 100, 'returned': 10 },
                { 'time': 125, 'returned': 10 }
            ]);
        }, cancelT);
    });

    test('Example 3', () => {
        const result: any[] = [];

        const fn = (x1: number, x2: number, x3: number) => (x1 + x2 + x3);
        const args = [ 5, 1, 3 ];
        const t = 50;
        const cancelT = 180;

        const start = performance.now();

        const log = (...argsArr: any[]) => {
            // @ts-ignore
            const val = fn(...argsArr);
            result.push({
                'time': Math.floor(performance.now() - start),
                // @ts-ignore
                'returned': fn(...argsArr)
            });
        };

        const cancel = cancellable(log, args, t);

        setTimeout(() => {
            cancel();
            expect(result).toEqual([
                { 'time': 0, 'returned': 9 },
                { 'time': 50, 'returned': 9 },
                { 'time': 100, 'returned': 9 },
                { 'time': 150, 'returned': 9 }
            ]);
        }, cancelT);
    });
});
