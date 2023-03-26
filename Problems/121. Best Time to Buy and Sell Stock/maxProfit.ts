/**
 * Time complexity O(n)
 * Space complexity O(1)
 */
export const maxProfit = (prices: number[]): number => {
    let maxProfit = 0;
    let minPrice = prices[0];
    for(let i = 0; i < prices.length; i++) {
        if(prices[i] < minPrice) {
            minPrice = prices[i];
        }

        let profit = prices[i] - minPrice;
        if(maxProfit < profit) {
            maxProfit = profit;
        }
    }
    return maxProfit;
};
