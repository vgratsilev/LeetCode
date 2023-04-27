export function curry(fn: Function): Function {
    return function curried(...args: any[]) {
        if(fn.length === args.length) {
            return fn(...args);
        } else {
            return function(...newArgs: any) {
                return curried(...args, ...newArgs);
            };
        }
    };
}

/**
 * function sum(a, b) { return a + b; }
 * const csum = curry(sum);
 * csum(1)(2) // 3
 */
