import { createCounter } from './createCounter';

describe('2665. Counter II', () => {
    test('Example 1', () => {
        const counter = createCounter(5);
        expect(counter.increment()).toBe(6);
        expect(counter.reset()).toBe(5);
        expect(counter.decrement()).toBe(4);
    });

    test('Example 2', () => {
        const counter = createCounter(0);
        expect(counter.increment()).toBe(1);
        expect(counter.increment()).toBe(2);
        expect(counter.decrement()).toBe(1);
        expect(counter.reset()).toBe(0);
        expect(counter.reset()).toBe(0);
    });
});
