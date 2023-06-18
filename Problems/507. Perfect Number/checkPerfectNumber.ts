export function checkPerfectNumber(num: number): boolean {
    if (num === 1) {
        return false;
    }

    let output = 0;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (!(num % i)) {
            const tmp = num / i !== i ? (num / i + i) : i;
            output += tmp;
        }
    }

    return output + 1 === num;
};
