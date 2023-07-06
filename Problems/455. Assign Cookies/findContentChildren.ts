export function findContentChildren(g: number[], s: number[]): number {
    if (!s.length) {
        return 0;
    }

    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);

    let cookieIdx = 0;
    let greedIdx = 0;
    let cookies = 0;

    while (cookieIdx < s.length && greedIdx < g.length) {
        if (s[cookieIdx] >= g[greedIdx]) {
            cookies++;
            greedIdx++;
        }
        cookieIdx++;
    }

    return cookies;
}
