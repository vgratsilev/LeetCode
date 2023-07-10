/**
 * Converting number to Binary
 * Converting binary number to array
 * complementing the result in "res" array
 * Converting "res" into number and return it
 * @param num
 */
export function findComplement(num: number): number {
    let res: string[] = [];
    let rev = (num >>> 0).toString(2).split('');

    rev.forEach(n => {
        (n == '1') ? res.push('0') : res.push('1');
    });

    return parseInt(res.join(''), 2);
}

/**
 * Time complexity O(log n)
 * Space complexity O(1)
 * @param num
 */
export function findComplement2(num: number): number {
    let ones = 0;

    while (num > ones) {
        ones = (ones << 1) | 1;
    }

    return num ^ ones;
}
