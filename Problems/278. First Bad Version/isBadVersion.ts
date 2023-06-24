/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

// Binary search solution

// var solution = function (isBadVersion: any) {
export function firstBadVersion(isBadVersion: any) {

    return function (n: number): number {
        let start = 0;
        let end = n;
        let lastBadVersion = 1;

        while (start <= end) {
            let mid = Math.floor((start + end) / 2);

            if (isBadVersion(mid)) {
                end = mid - 1;
                lastBadVersion = mid;
            } else {
                start = mid + 1;
            }
        }

        return lastBadVersion;
    };
}
