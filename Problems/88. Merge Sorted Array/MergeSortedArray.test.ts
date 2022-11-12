import { merge } from './MergeSortedArray';

describe('88. Merge Sorted Array', () => {
    test('Example 1', () => {
        const nums1: number[] = [1, 2, 3, 0, 0, 0];
        const m: number = 3;
        const nums2: number[] = [2, 5, 6];
        const n: number = 3;

        merge(nums1, m, nums2, n);

        expect(nums1).toEqual([1, 2, 2, 3, 5, 6]);
    });

    test('Example 2', () => {
        const nums1: number[] = [1];
        const m: number = 1;
        const nums2: number[] = [];
        const n: number = 0;

        merge(nums1, m, nums2, n);

        expect(nums1).toEqual([1]);
    });

    test('Example 3', () => {
        const nums1: number[] = [0];
        const m: number = 0;
        const nums2: number[] = [1];
        const n: number = 1;

        merge(nums1, m, nums2, n);

        expect(nums1).toEqual([1]);
    });
});

