type F = (x: number) => number;

export function compose(functions: F[]): F {
    return function(x) {
        return functions.reduceRight((acc, f) => f(acc), x);
    };
}

/**
 * Time complexity O(n)
 * Space complexity O(1)
 */

export function compose2(functions: F[]): F {
    return function(x) {
        for(let i = functions.length; i--;) {
            x = functions[i](x);
        }
        return x;
    };
}

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
