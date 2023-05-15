export function isPowerOfFour(n: number): boolean {
    if(n < 1) {
        return false;
    }

    let result = false;
    let exponent = Number((Math.log(n) / Math.log(4)).toFixed(10));

    if(exponent % 1 === 0) {
        result = true;
    }
    return result;
}

/**
 * with loop
 * @param n
 */

export function isPowerOfFourLoop(n: number): boolean {
    if(n < 1) {
        return false;
    }

    while(n > 1) {
        if(n % 4 === 0) {
            n /= 4;
        } else {
            break;
        }
    }
    return n === 1;
}

