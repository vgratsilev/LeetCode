/**
 * Time complexity O(n)
 * Space complexity O(1)
 */

const BASE: number = 16;
const Hex = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f' ];

export function toHex(num: number): string {
    if (num == 0) {
        return Hex[num];
    }

    if (num < 0) {
        num += 2 ** 32;
    }

    let result: string = '';
    while (num != 0) {
        let rem: string = Hex[num % BASE];
        result = rem + result;
        num = Math.floor(num / BASE);
    }

    return result;
}
