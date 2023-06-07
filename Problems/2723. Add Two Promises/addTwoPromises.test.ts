import { addTwoPromises } from './addTwoPromises';

describe('2705. Compact Object', () => {
    test('Example 1', () => {
        const promise1: Promise<number> = new Promise(resolve => setTimeout(() => resolve(2), 20));
        const promise2: Promise<number> = new Promise(resolve => setTimeout(() => resolve(5), 60));
        addTwoPromises(promise1, promise2).then(res => {
            expect(res).toBe(7);
        });

    });

    test('Example 2', () => {
        const promise1: Promise<number> = new Promise(resolve => setTimeout(() => resolve(10), 20));
        const promise2: Promise<number> = new Promise(resolve => setTimeout(() => resolve(-12), 60));
        addTwoPromises(promise1, promise2).then(res => {
            expect(res).toBe(-2);
        });
    });
});
