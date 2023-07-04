export function arrangeCoins(n: number): number {
    const d = 8 * n + 1;
    return Math.floor((-1 + d ** 0.5) / 2);
}
