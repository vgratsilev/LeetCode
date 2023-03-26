import { maxProfit } from './maxProfit';

describe('122. Best Time to Buy and Sell Stock II', () => {
    test('Example 1', () => {
        expect(maxProfit([ 7, 1, 5, 3, 6, 4 ])).toBe(7);
    });

    test('Example 2', () => {
        expect(maxProfit([ 1, 2, 3, 4, 5 ])).toBe(4);
    });

    test('Example 3', () => {
        expect(maxProfit([ 7, 6, 4, 3, 1 ])).toBe(0);
    });
});
