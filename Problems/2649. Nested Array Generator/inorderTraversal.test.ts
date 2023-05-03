import { inorderTraversal } from './inorderTraversal';

describe('2649. Nested Array Generator', () => {
    test('Example 1', async() => {
        const arr = [ [ [ 6 ] ], [ 1, 3 ], [] ];
        const generator = inorderTraversal(arr);
        expect(generator.next().value).toBe(6);
        expect(generator.next().value).toBe(1);
        expect(generator.next().value).toBe(3);
        expect(generator.next().done).toBeTruthy();
    });

    test('Example 2', async() => {
        const arr: number[] = [];
        const generator = inorderTraversal(arr);
        expect(generator.next().value).toBeUndefined();
    });
});
