export function intersect(nums1: number[], nums2: number[]): number[] {
    let result: number[] = [];

    let a1 = nums1.sort((a, b) => a - b);
    let a2 = nums2.sort((a, b) => a - b);

    while(a1.length && a2.length) {
        if(a1[a1.length - 1] === a2[a2.length - 1]) {
            const tmp = a2.pop();
            if(tmp !== undefined) {
                result.push(tmp);
            }
            a1.pop();
        } else if(a1[a1.length - 1] > a2[a2.length - 1]) {
            a1.pop();
        } else {
            a2.pop();
        }
    }

    return result;
}
