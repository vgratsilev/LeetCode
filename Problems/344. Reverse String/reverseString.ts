/**
 Do not return anything, modify s in-place instead.
 */
export function reverseString(s: string[]): void {
    let start = 0;
    let end = s.length - 1;
    while(start < end) {
        [ s[start], s[end] ] = [ s[end], s[start] ];
        start++;
        end--;
    }
}
