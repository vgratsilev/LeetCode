export function islandPerimeter(grid: number[][]): number {
    return grid.reduce((acc, x, xIndex) => {
        x.forEach((y, yIndex) => {
            if (y === 1) {
                acc += 4;

                if (yIndex > 0 && x[yIndex - 1] === 1) {
                    acc -= 2;
                }

                if (xIndex > 0 && grid[xIndex - 1][yIndex] === 1) {
                    acc -= 2;
                }
            }
        });

        return acc;
    }, 0);
}
