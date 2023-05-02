import { timeLimit } from './timeLimit';

describe('2637. Promise Time Limit', () => {
    test('Example 1', async() => {
        let t = Date.now();
        const fn = async(n: number) => {
            await new Promise(res => setTimeout(res, 100));
            return n * n;
        };
        const limited = timeLimit(fn, 50);

        limited(5).then((data) => {
            expect(data).toEqual({ 'rejected': 'Time Limit Exceeded', 'time': 50 });
            expect(Date.now() - t).toBe(50);
        });
    });

    test('Example 2', async() => {
        let t = Date.now();
        const fn = async(n: number) => {
            await new Promise(res => setTimeout(res, 100));
            return n * n;
        };
        const limited = timeLimit(fn, 150);

        limited(5).then((data) => {
            expect(data).toEqual({ 'resolved': 25, 'time': 100 });
            expect(Date.now() - t).toBe(100);
        });
    });

    test('Example 3', async() => {
        let t = Date.now();
        const fn = async(a: number, b: number) => {
            await new Promise(res => setTimeout(res, 120));
            return a + b;
        };
        const limited = timeLimit(fn, 150);

        limited(5, 10).then((data) => {
            expect(data).toEqual({ 'resolved': 15, 'time': 120 });
            expect(Date.now() - t).toBe(120);
        });
    });

    test('Example 4', async() => {
        let t = Date.now();
        const fn = async() => {
            throw 'Error';
        };
        const limited = timeLimit(fn, 1000);

        limited().then((data) => {
            expect(data).toThrowError('Error');
            expect(Date.now() - t).toBe(0);
        });
    });
});
