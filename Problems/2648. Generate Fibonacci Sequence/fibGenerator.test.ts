import { fibGenerator } from './fibGenerator';

describe('2648. Generate Fibonacci Sequence', () => {
    test('Example 1', async() => {
        const gen = fibGenerator();
        expect(gen.next().value).toBe(0);
        expect(gen.next().value).toBe(1);
        expect(gen.next().value).toBe(1);
        expect(gen.next().value).toBe(2);
        expect(gen.next().value).toBe(3);
    });
});
