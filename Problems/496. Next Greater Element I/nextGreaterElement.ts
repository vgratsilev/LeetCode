export function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    return nums1.map(num => {
        let idx = nums2.indexOf(num);
        if (idx === -1) {
            return -1;
        }

        for (let i = idx; i < nums2.length; i++) {
            if (nums2[i] > num) {
                return nums2[i];
            }
        }
        return -1;
    });
}
