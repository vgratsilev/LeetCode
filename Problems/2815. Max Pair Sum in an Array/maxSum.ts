export function maxSum(nums: number[]): number {
    let map = new Map<number, number[]>(); // max digit of numbers   :   numbers

    for (let digit of nums) {
        let digitsStr = '' + digit;
        let sortedDigits = digitsStr.split('').map((e) => +e).sort((a, b) => b - a);
        let maxDigit = sortedDigits[0];

        if (!map.has(maxDigit)) {
            map.set(maxDigit, []);
        }
        const arr = map.get(maxDigit) ?? [];
        arr.push(digit);
        map.set(maxDigit, arr);

    }

    let max2sum = -1;

    for (let value of map.values()) {
        if (value.length > 1) {
            const val = value.sort((a, b) => b - a);
            let sumOf2MaxNumbers = val[0] + val[1];
            max2sum = Math.max(max2sum, sumOf2MaxNumbers);
        }
    }
    return max2sum;
}
