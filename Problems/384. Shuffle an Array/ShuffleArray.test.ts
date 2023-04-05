import { Solution } from './ShuffleArray';

describe('384. Shuffle an Array', () => {
    test('Example 1', () => {
        const nums = [ 1, 2, 3 ];
        const obj = new Solution(nums);
        const param_1 = obj.shuffle();
        const param_2 = obj.reset();
        const param_3 = obj.shuffle();

        expect(param_1).not.toEqual([ 1, 2, 3 ]);
        expect(param_2).toEqual([ 1, 2, 3 ]);
        expect(param_3).not.toEqual([ 1, 2, 3 ]);
    });
});
