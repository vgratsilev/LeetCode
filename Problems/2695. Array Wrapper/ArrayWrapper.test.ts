import { ArrayWrapper } from './ArrayWrapper';

describe('2695. Array Wrapper', () => {
    test('Example 1', () => {
        const obj1 = new ArrayWrapper([ 1, 2 ]);
        const obj2 = new ArrayWrapper([ 3, 4 ]);
        // @ts-ignore
        expect(obj1 + obj2).toBe(10);
        expect(String(obj1)).toBe('[1,2]');
        expect(String(obj2)).toBe('[3,4]');
    });

    test('Example 2', () => {
        const obj = new ArrayWrapper([ 23, 98, 42, 70 ]);
        expect(String(obj)).toBe('[23,98,42,70]');
    });

    test('Example 3', () => {
        const obj1 = new ArrayWrapper([]);
        const obj2 = new ArrayWrapper([]);
        // @ts-ignore
        expect(obj1 + obj2).toBe(0);
        expect(String(obj1)).toBe('[]');
        expect(String(obj2)).toBe('[]');
    });
});
