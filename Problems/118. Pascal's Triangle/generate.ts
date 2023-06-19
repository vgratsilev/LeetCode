/**
 * Time complexity O(n)
 * Space complexity O(n)
 */
export function generate(numRows: number): number[][] {
    const result: number[][] = Array.from(Array(numRows), () => []);
    let p1 = 0;
    let p2 = 0;
    let i = 0;

    result[0][0] = 1;

    while(i < numRows - 1) {
        if(p1 === p2) {
            result[i + 1].push(result[i][p1]);
            p2++;
        } else if(!result[i][p2]) {
            result[i + 1].push(result[i][p1]);
            i++;
            p2 = 0;
            p1 = 0;
        } else {
            result[i + 1].push(result[i][p1] + result[i][p2]);
            p2++;
            p1++;
        }
    }

    return result;
}
