function fib(n: number): number {
    if (n < 1) {
        return 0;
    }

    if (n <= 2) {
        return 1;
    }

    let curr = 2;
    let prev = 1;
    let result = 3;

    for (let i = 4; i <= n; i++) {
        result = curr + prev;
        prev = curr;
        curr = result;
    }

    return curr;
}
