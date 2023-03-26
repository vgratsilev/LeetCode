import { maxProfit } from './maxProfit';

describe('121. Best Time to Buy and Sell Stock', () => {
    test('Example 1', () => {
        expect(maxProfit([ 7, 1, 5, 3, 6, 4 ])).toBe(5);
    });

    test('Example 2', () => {
        expect(maxProfit([ 7, 6, 4, 3, 1 ])).toBe(0);
    });
});
