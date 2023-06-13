import { promiseAll } from './promiseAll';

describe('2721. Execute Asynchronous Functions in Parallel', () => {
    test('Example 1', () => {
        let t = Date.now();
        const functions = [
            () => new Promise(res => setTimeout(() => res(5), 200))
        ];

        promiseAll(functions).then((data) => {
            expect(data).toEqual([ 5 ]);
            expect(Date.now() - t).toBe(200);
        });
    });

    test('Example 2', () => {
        let t = Date.now();
        const functions = [
            () => new Promise(res => setTimeout(() => res(1), 200)),
            () => new Promise((_, rej) => setTimeout(() => rej('Error'), 100))
        ];

        promiseAll(functions).then((data) => {
            expect(data).toThrow('Error');
            expect(Date.now() - t).toBe(100);
        });
    });

    test('Example 3', () => {
        let t = Date.now();
        const functions = [
            () => new Promise(res => setTimeout(() => res(4), 50)),
            () => new Promise(res => setTimeout(() => res(10), 150)),
            () => new Promise(res => setTimeout(() => res(16), 100))
        ];

        promiseAll(functions).then((data) => {
            expect(data).toEqual([ 4, 5, 16 ]);
            expect(Date.now() - t).toBe(150);
        });
    });
});
