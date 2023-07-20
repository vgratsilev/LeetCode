export function convertToBase7(num: number): string {
    if (num === 0 || num === 1) {
        return `${num}`;
    }

    let tempNum = num < 0 ? num * -1 : num;
    let result = '';

    while (tempNum > 0) {
        let residual = tempNum % 7;
        tempNum = Math.floor(tempNum / 7);
        result = `${residual}${result}`;
    }
    return num > 0 ? result : `-${result}`;
}
