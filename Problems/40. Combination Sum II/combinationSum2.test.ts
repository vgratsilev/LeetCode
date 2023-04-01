import { combinationSum2 } from './combinationSum2';

describe('40. Combination Sum II', () => {
    test('Example 1', () => {
        expect(combinationSum2([ 10, 1, 2, 7, 6, 1, 5 ], 8)).toEqual([
            [ 1, 1, 6 ],
            [ 1, 2, 5 ],
            [ 1, 7 ],
            [ 2, 6 ]
        ]);
    });

    test('Example 2', () => {
        expect(combinationSum2([ 2, 5, 2, 1, 2 ], 5)).toEqual([
            [ 1, 2, 2 ],
            [ 5 ]
        ]);
    });
});

