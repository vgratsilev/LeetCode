import { cancellable } from './cancellable';

describe('2650. Design Cancellable Function', () => {
    test('Example 1', async() => {
        const generatorFunction = function* () {
            return 42;
        };
        const cancelledAt = 100;
        const generator = generatorFunction();

        let t = Date.now();

        const [ cancel, promise ] = cancellable(generator);
        setTimeout(cancel, cancelledAt);
        promise.then((data) => {
            // resolves 42 at t=0ms
            expect(data).toBe(42);
            expect(Date.now() - t).toBeLessThan(10);
        });
    });

    test('Example 2', async() => {
        const generatorFunction = function* () {
            // @ts-ignore
            const msg = yield new Promise(res => res('Hello'));
            throw `Error: ${msg}`;
        };
        const generator = generatorFunction();

        let t = Date.now();

        const [ cancel, promise ] = cancellable(generator);
        setTimeout(cancel);
        promise.then((data) => {
            expect(data).toEqual({ 'rejected': 'Error: Hello' });
            expect(Date.now() - t).toBe(0);
        });
    });

    test('Example 3', async() => {
        const generatorFunction = function* () {
            yield new Promise(res => setTimeout(res, 200));
            return 'Success';
        };
        const cancelledAt = 100;
        const generator = generatorFunction();

        let t = Date.now();

        const [ cancel, promise ] = cancellable(generator);
        setTimeout(cancel, cancelledAt);
        promise.then((data) => {
            expect(data).toEqual({ 'rejected': 'Cancelled' });
            expect(Date.now() - t).toBe(100);
        });
    });

    test('Example 4', async() => {
        const generatorFunction = function* () {
            let result = 0;
            yield new Promise(res => setTimeout(res, 100));
            // @ts-ignore
            result += yield new Promise(res => res(1));
            yield new Promise(res => setTimeout(res, 100));
            // @ts-ignore
            result += yield new Promise(res => res(1));
            return result;
        };
        const generator = generatorFunction();

        let t = Date.now();

        const [ cancel, promise ] = cancellable(generator);
        setTimeout(cancel);
        promise.then((data) => {
            expect(data).toEqual({ 'resolved': 2 });
            expect(Date.now() - t).toBe(200);
        });
    });

    test('Example 5', async() => {
        const generatorFunction = function* () {
            let result = 0;
            try {
                yield new Promise(res => setTimeout(res, 100));
                // @ts-ignore
                result += yield new Promise(res => res(1));
                yield new Promise(res => setTimeout(res, 100));
                // @ts-ignore
                result += yield new Promise(res => res(1));
            } catch(e) {
                return result;
            }
            return result;
        };
        const cancelledAt = 150;
        const generator = generatorFunction();

        let t = Date.now();

        const [ cancel, promise ] = cancellable(generator);
        setTimeout(cancel, cancelledAt);
        promise.then((data) => {
            expect(data).toEqual({ 'resolved': 1 });
            expect(Date.now() - t).toBe(150);
        });
    });

    test('Example 6', async() => {
        const generatorFunction = function* () {
            try {
                yield new Promise((_resolve, reject) => reject('Promise Rejected'));
            } catch(e) {
                // @ts-ignore
                let a = yield new Promise(resolve => resolve(2));
                // @ts-ignore
                let b = yield new Promise(resolve => resolve(2));
                return a + b;
            }

        };
        const generator = generatorFunction();

        let t = Date.now();

        const [ cancel, promise ] = cancellable(generator);
        setTimeout(cancel);
        promise.then((data) => {
            expect(data).toEqual({ 'resolved': 4 });
            expect(Date.now() - t).toBe(150);
        });
    });
});
