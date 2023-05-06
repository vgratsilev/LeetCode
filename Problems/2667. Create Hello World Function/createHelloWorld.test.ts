import { createHelloWorld } from './createHelloWorld';

describe('2667. Create Hello World Function', () => {
    test('Example 1', async() => {
        const f = createHelloWorld();
        expect(f()).toBe('Hello World');
    });

    test('Example 2', async() => {
        const f = createHelloWorld();
        expect(f({}, null, 42)).toBe('Hello World');
    });
});
