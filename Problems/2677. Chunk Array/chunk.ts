/**
 * Time complexity O(n)
 * Space complexity O(n)
 */


export function chunk(arr: any[], size: number): any[][] {
    const result = [];

    for(let i = 0; i < arr.length; i++) {
        result.push(arr.slice(i, Math.min(i + size, arr.length)));
        i += size - 1;
    }

    return result;
}
