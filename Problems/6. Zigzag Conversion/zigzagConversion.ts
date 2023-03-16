export const convert = (s: string, numRows: number): string => {
    if(numRows === 1) {
        return s;
    }

    let isAsc = true;
    let currentRow = -1;

    const rows = new Array(numRows).fill('');

    for(let i = 0; i < s.length; i++) {
        currentRow += isAsc ? 1 : -1;
        rows[currentRow] += s[i];

        if(currentRow === numRows - 1) {
            isAsc = false;
        } else if(currentRow === 0) {
            isAsc = true;
        }
    }

    return rows.join('');
};
