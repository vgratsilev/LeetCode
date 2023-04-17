import { reduce } from './reduce';

describe('2626. Array Reduce Transformation', () => {
    test('Example 1', async() => {
        const nums: number[] = [ 1, 2, 3, 4 ];
        const fn = function sum(accum: number, curr: number): number {
            return accum + curr;
        };
        const init = 0;

        expect(reduce(nums, fn, init)).toBe(10);
    });

    test('Example 1', async() => {
        const nums: number[] = [ 1, 2, 3, 4 ];
        const fn = function sum(accum: number, curr: number): number {
            return accum + curr * curr;
        };
        const init = 100;

        expect(reduce(nums, fn, init)).toBe(130);
    });

    test('Example 1', async() => {
        const nums: number[] = [];
        const fn = function sum(_accum: number, _curr: number): number {
            return 0;
        };
        const init = 25;

        expect(reduce(nums, fn, init)).toBe(25);
    });
});
