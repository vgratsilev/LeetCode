import { promisePool, promisePool2 } from './promisePool';

describe('2636. Promise Pool', () => {
    test('Example 1a', async() => {
        let t = Date.now();
        const functions = [
            () => new Promise(res => setTimeout(res, 300)),
            () => new Promise(res => setTimeout(res, 400)),
            () => new Promise(res => setTimeout(res, 200))
        ];

        promisePool(functions, 2).then((data) => {
            expect(data).toEqual([ [ 300, 400, 500 ], 500 ]);
            expect(Date.now() - t).toBe(500);
        });
    });

    test('Example 2a', async() => {
        let t = Date.now();
        const functions = [
            () => new Promise(res => setTimeout(res, 300)),
            () => new Promise(res => setTimeout(res, 400)),
            () => new Promise(res => setTimeout(res, 200))
        ];

        promisePool(functions, 5).then((data) => {
            expect(data).toEqual([ [ 300, 400, 200 ], 400 ]);
            expect(Date.now() - t).toBe(400);
        });
    });

    test('Example 3a', async() => {
        let t = Date.now();
        const functions = [
            () => new Promise(res => setTimeout(res, 300)),
            () => new Promise(res => setTimeout(res, 400)),
            () => new Promise(res => setTimeout(res, 200))
        ];

        promisePool(functions, 1).then((data) => {
            expect(data).toEqual([ [ 300, 700, 900 ], 900 ]);
            expect(Date.now() - t).toBe(900);
        });
    });

    test('Example 1b', async() => {
        let t = Date.now();
        const functions = [
            () => new Promise(res => setTimeout(res, 300)),
            () => new Promise(res => setTimeout(res, 400)),
            () => new Promise(res => setTimeout(res, 200))
        ];

        promisePool2(functions, 2).then((data) => {
            expect(data).toEqual([ [ 300, 400, 500 ], 500 ]);
            expect(Date.now() - t).toBe(500);
        });
    });

    test('Example 2b', async() => {
        let t = Date.now();
        const functions = [
            () => new Promise(res => setTimeout(res, 300)),
            () => new Promise(res => setTimeout(res, 400)),
            () => new Promise(res => setTimeout(res, 200))
        ];

        promisePool2(functions, 5).then((data) => {
            expect(data).toEqual([ [ 300, 400, 200 ], 400 ]);
            expect(Date.now() - t).toBe(400);
        });
    });

    test('Example 3b', async() => {
        let t = Date.now();
        const functions = [
            () => new Promise(res => setTimeout(res, 300)),
            () => new Promise(res => setTimeout(res, 400)),
            () => new Promise(res => setTimeout(res, 200))
        ];

        promisePool2(functions, 1).then((data) => {
            expect(data).toEqual([ [ 300, 700, 900 ], 900 ]);
            expect(Date.now() - t).toBe(900);
        });
    });
});
