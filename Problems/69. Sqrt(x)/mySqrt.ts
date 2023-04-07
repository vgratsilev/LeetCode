export const mySqrt = (x: number): number => {
    if(x < 2) {
        return x;
    }

    let low = 1;
    let high = x;

    while(low <= high) {
        const mid = Math.floor(low + (high - low) / 2);
        const squared = mid * mid;
        if(squared === x) {
            return mid;
        } else if(squared > x) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return high;
};
