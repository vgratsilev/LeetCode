export const reverse = (x: number): number => {
    let result = 0;

    const isMinus = x < 0;
    let tmp = Math.abs(x).toString();

    result = Number(tmp.split('').reverse().join(''));

    if(Number.isNaN(result) || result > 2 ** 31) {
        return 0;
    }

    if(isMinus) {
        result *= -1;
    }
    return result;
};
