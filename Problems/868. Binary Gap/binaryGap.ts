export function binaryGap(n: number): number {
    return Math.max(0,
        ...n.toString(2)
            .split('1')
            .slice(1, -1)
            .map((gap) => gap.length + 1)
    );
}
