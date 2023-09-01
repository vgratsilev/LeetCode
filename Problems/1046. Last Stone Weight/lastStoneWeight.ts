export function lastStoneWeight(stones: number[]): number {
    if (stones.length === 1) {
        return stones[0];
    }

    stones.sort((a, b) => a - b);

    // @ts-ignore
    stones.push(stones.pop() - stones.pop());

    return lastStoneWeight(stones);
}
