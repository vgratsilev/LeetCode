type TGroupFunction<T> = (item: T) => string;

declare global {
    interface Array<T> {
        groupBy(fn: TGroupFunction<T>): Record<string, T[]>;
    }
}

export const groupBy = function <T>(this: any, fn: TGroupFunction<T>) {
    const result: { [key: string]: any; } = {};

    for(const elem of this) {
        const key = fn(elem);

        if(!result.hasOwnProperty(key)) {
            result[key] = [];
        }

        result[key].push(elem);
    }
    return result;
};

// @ts-ignore
Array.prototype.groupBy = groupBy;

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
