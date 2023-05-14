export function countBits(n: number): number[] {
    const res = new Uint8Array(n + 1);
    for(let i = 0; i < res.length; i++) {
        res[i] = res[i >> 1] + (i & 1);
    }

    return [ ...res ];
}

export function countBits2(n: number): number[] {
    return Array(n + 1).fill('').map((_, i: number) =>
        i.toString(2).replace(/0/g, '').length
    );
}
