export function isPowerOfThree(n: number): boolean {
    if(n < 1) {
        return false;
    }

    let result = false;
    let exponent = Number((Math.log(n) / Math.log(3)).toFixed(10));

    if(exponent % 1 === 0) {
        result = true;
    }
    return result;
}

/**
 * with loop
 * @param n
 */

export function isPowerOfThreeLoop(n: number): boolean {
    if(n < 1) {
        return false;
    }

    while(n > 1) {
        if(n % 3 === 0) {
            n /= 3;
        } else {
            break;
        }
    }
    return n === 1;
}

