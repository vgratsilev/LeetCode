/**
 * Time complexity O(1)
 * Space complexity O(n)
 */

type Fn = (...params: any) => any

export function memoize(fn: Fn): Fn {
    const map = new Map<string, number>();
    return function(...args) {
        const key = args.join('_');

        if(map.has(key)) {
            return map.get(key);
        }

        const val = Number(fn(...args));
        map.set(key, val);
        return val;
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
