/**
 * Time complexity O(n)
 * Space complexity O(1)
 */

export const maxProfit = (prices: number[]): number => {
    let result = 0;
    for(let i = 0; i < prices.length; i++) {
        if(prices[i] > prices[i - 1]) {
            result += prices[i] - prices[i - 1];
        }
    }
    return result;
};
