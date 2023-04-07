import { totalNQueens } from './totalNQueens';

describe('52. N-Queens II', () => {
    test('Example 1', () => {
        expect(totalNQueens(4)).toBe(2);
    });

    test('Example 2', () => {
        expect(totalNQueens(1)).toBe(1);
    });
});
