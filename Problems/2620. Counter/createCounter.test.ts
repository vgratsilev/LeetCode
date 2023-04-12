import { createCounter } from './createCounter';

describe('2620. Counter', () => {
    test('Example 1', () => {
        const counter = createCounter(10);
        expect(counter()).toBe(10);
        expect(counter()).toBe(11);
        expect(counter()).toBe(12);
    });

    test('Example 2', () => {
        const counter = createCounter(-2);
        expect(counter()).toBe(-2);
        expect(counter()).toBe(-1);
        expect(counter()).toBe(0);
        expect(counter()).toBe(1);
        expect(counter()).toBe(2);
    });
});
