import { checkIfExist, checkIfExist_v2 } from './CheckIfNAndDoubleExist';

describe('1346. Check If N and Its Double Exist', () => {
    test('Example 1', () => {
        const nums: number[] = [10, 2, 5, 3];

        expect(checkIfExist(nums)).toBeTruthy();
        expect(checkIfExist_v2(nums)).toBeTruthy();
    });

    test('Example 2', () => {
        const nums: number[] = [3, 1, 7, 11];

        expect(checkIfExist(nums)).toBeFalsy();
        expect(checkIfExist_v2(nums)).toBeFalsy();
    });

    test('Example 3', () => {
        const nums: number[] = [10, 2, 6, 8, 3, 12];

        expect(checkIfExist(nums)).toBeTruthy();
    });
});

