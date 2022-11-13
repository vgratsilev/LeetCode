import { duplicateZeros } from './DuplicateZeros';

describe('1089. Duplicate Zeros', () => {
    test('Example 1', () => {
        const arr: number[] = [1, 0, 2, 3, 0, 4, 5, 0];

        duplicateZeros(arr);

        expect(arr).toEqual([1, 0, 0, 2, 3, 0, 0, 4]);
    });

    test('Example 2', () => {
        const arr: number[] = [1, 2, 3];

        duplicateZeros(arr);

        expect(arr).toEqual([1, 2, 3]);
    });
});

