export function isPowerOfTwo(n: number): boolean {
    if(n < 1) {
        return false;
    }

    let result = false;
    let exponent = Number((Math.log(n) / Math.log(2)).toFixed(10));

    if(exponent % 1 === 0) {
        result = true;
    }
    return result;
}
