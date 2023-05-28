// too slow
// export function isPerfectSquare(num: number): boolean {
//     let check = 1;
//     while(num >= check) {
//         let tmp = check ** 2;
//         if(tmp === num) {
//             return true;
//         } else {
//             check++;
//         }
//     }
//     return false;
// }

// Taylor series
export function isPerfectSquareTaylorSeries(num: number): boolean {
    //taylor series 1+3+5+7 = 16 ..
    let i = 1;
    while(num > 0) {
        num -= i;
        i += 2;
    }

    return num === 0;
}

// Binary search
export function isPerfectSquareBinarySearch(num: number): boolean {
    if(num < 1) {
        return false;
    }

    if(num === 1) {
        return true;
    }

    let left = 1;
    let right = num;

    while(left <= right) {
        let mid = Math.floor((left + right) / 2);
        if(mid * mid === num) {
            return true;
        } else if(mid * mid > num) {
            right = mid - 1;
        } else if(mid * mid < num) {
            left = mid + 1;
        }
    }
    return false;
}
