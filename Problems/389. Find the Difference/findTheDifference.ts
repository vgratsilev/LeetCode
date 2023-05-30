/**
 * Time complexity O(n)
 * Space complexity O(1)
 */

export function findTheDifference(s: string, t: string): string {
    for(let l of s) {
        t = t.replace(l, '');
    }

    return t;
}

export function findTheDifferenceArrays(s: string, t: string): string {
    const sArr: string[] = s.split('').sort();
    const tArr: string[] = t.split('').sort();

    for(let i = 0; i < tArr.length; i++) {
        if(sArr[i] != tArr[i]) return tArr[i];
    }

    return '';
}

/***
 * Bitwise XOR ^ operator.
 * For every NUMBER X:
 * X^X=0
 * X^0=X
 */
export function findTheDifferenceBitwise(s: string, t: string): string {
    let xor = t.charCodeAt(t.length - 1); // t is 1 letter longer, so the last char is not accessed in the loop

    for(let i = 0; i < s.length; i++) { // one loop for both strings
        xor ^= s.charCodeAt(i); // you can take a char code in 1 operation instead of 2
        xor ^= t.charCodeAt(i);
    }

    return String.fromCharCode(xor);
}

