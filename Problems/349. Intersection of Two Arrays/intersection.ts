export function intersection(nums1: number[], nums2: number[]): number[] {
    let result: number[] = [];
    let setNum1 = new Set(nums1);

    result = [ ...new Set(nums2.filter(num => setNum1.has(num))) ];

    return result;
}
