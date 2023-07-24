enum medals {
    'Gold Medal',
    'Silver Medal',
    'Bronze Medal'
}

export function findRelativeRanks(score: number[]): string[] {
    const s: number[] = [ ...score ].sort((a, b) => b - a);

    return score.map((v: number) => {
        const p: number = s.indexOf(v);
        return p < 3 ? medals[p] : String(p + 1);
    });
}
