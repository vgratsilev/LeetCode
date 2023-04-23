type Fn = (...params: any) => any

export function memoize(fn: Fn): Fn {
    const root = new Map();

    return function(...args) {
        let current = root;

        for(let i = 0; i < args.length; i++) {
            if(!current.has(args[i])) {
                current.set(args[i], new Map());
            }
            current = current.get(args[i]);
        }

        if(!current.has('result')) {
            current.set('result', fn(...args));
        }
        return current.get('result');
    };
}


/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */
