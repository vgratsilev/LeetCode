/**
 * Time complexity O(n * m), n - wall height, m - wall width
 * Space complexity O(m)
 */

export const leastBricks = (wall: number[][]): number => {
    const map: { [key: string]: number } = {};
    let max = 0;

    wall.forEach((row) => {
        let sum = 0;
        for(let i = 0; i < row.length - 1; i++) {
            sum += row[i];
            map[sum] = map[sum] ? map[sum] + 1 : 1;
            max = Math.max(max, map[sum]);
        }
    });

    return wall.length - max;
};
