const cache: number[] = [];

export function climbStairs(n: number): number {
    if(n <= 3) {
        return n;
    }

    if(n in cache) {
        return cache[n];
    }

    return (cache[n] = climbStairs(n - 1) + climbStairs(n - 2));
}

export function climbStairsIterate(n: number): number {
    if(n < 4) {
        return n;
    }

    return fib(n);
}

function fib(n: number, x1 = 0, x2 = 1): number {
    if(n <= 1) {
        return x1 + x2;
    }

    return fib(n - 1, x2, x1 + x2);
}
