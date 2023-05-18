export function integerBreak(n: number): number {
    let memo = new Map();

    function dp(n: number) {
        if(n == 1 || n == 2) {
            return 1;
        }

        if(memo.has(n)) {
            return memo.get(n);
        }

        let q = 0;
        for(let i = 1; i <= n / 2; i++) {
            q = Math.max(q, i * Math.max((n - i), dp(n - i)));
        }
        memo.set(n, q);
        return q;
    }

    return dp(n);
}
