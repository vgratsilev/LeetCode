export function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    let noAdjacent = 0;

    flowerbed.forEach((_, index) => {
        const prev = index - 1;
        const next = index + 1;

        if (!flowerbed[prev] && !flowerbed[index] && !flowerbed[next]) {
            noAdjacent++;
            flowerbed[index] = 1;
        }
    });

    return noAdjacent >= n;
}
