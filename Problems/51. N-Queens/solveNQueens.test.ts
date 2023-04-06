import { solveNQueens, solveNQueens2 } from './solveNQueens';

describe('51. N-Queens', () => {
    test('Example 1', () => {
        expect(solveNQueens(4)).toEqual([ [ '.Q..', '...Q', 'Q...', '..Q.' ], [ '..Q.', 'Q...', '...Q', '.Q..' ] ]);
    });

    test('Example 2', () => {
        expect(solveNQueens(1)).toEqual([ [ 'Q' ] ]);
    });

    test('Example 3', () => {
        expect(solveNQueens2(4)).toEqual([ [ '.Q..', '...Q', 'Q...', '..Q.' ], [ '..Q.', 'Q...', '...Q', '.Q..' ] ]);
    });

    test('Example 4', () => {
        expect(solveNQueens2(1)).toEqual([ [ 'Q' ] ]);
    });
});
