/**
 * Time complexity O(n * m)
 * Space complexity O(1)
 */

export const numIslands = (grid: string[][]): number => {
    let counter = 0;
    let rowsLength = grid.length; // n
    let colsLength = grid[0].length; // m

    if(rowsLength === 0) {
        return 0;
    }

    const markNeighbour = (grid: string[][], r: number, c: number) => {
        grid[r][c] = '7';
        if(grid[r][c - 1] === '1') {
            markNeighbour(grid, r, c - 1);
        }
        if(grid[r][c + 1] === '1') {
            markNeighbour(grid, r, c + 1);
        }
        if(grid?.[r - 1]?.[c] === '1') {
            markNeighbour(grid, r - 1, c);
        }
        if(grid?.[r + 1]?.[c] === '1') {
            markNeighbour(grid, r + 1, c);
        }
    };

    for(let r = 0; r < rowsLength; r++) {
        for(let c = 0; c < colsLength; c++) {
            if(grid[r][c] === '1') {
                counter++;
                markNeighbour(grid, r, c);
            }
        }
    }

    return counter;
};
