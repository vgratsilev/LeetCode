export function filter(arr: number[], fn: (n: number, i: number) => any): number[] {
    return arr.reduce((result: number[], elem: number, index: number) => {
        if(fn(elem, index)) {
            result.push(elem);
        }
        return result;
    }, []);
}
