// @ts-ignore
declare global {
    interface Array<T> {
        snail(rowsCount: number, colsCount: number): number[][];
    }
}

export const snail = function(this: any, rowsCount: number, colsCount: number): number[][] {
    if(this.length !== rowsCount * colsCount) {
        return [];
    }

    let result: number[][] = Array(rowsCount).fill([]).map(() => []);

    for(let j = 0; j < this.length; j++) {
        const i = Math.floor(j / rowsCount);
        if(i % 2 === 0) {
            result[j % rowsCount][i] = this[j];
        } else {
            result[rowsCount - j % rowsCount - 1][i] = this[j];
        }
    }
    return result;
};

// @ts-ignore
Array.prototype.snail = snail;

/**
 * const arr = [1,2,3,4];
 * arr.snail(1,4); // [[1,2,3,4]]
 */
