/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return         -1 if num is higher than the picked number
 *                  1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

//const pick: number = 0;

export function guessNumber(n: number, pick: number): number {
    function guess(num: number) {
        if(num > pick) {
            return -1;
        }
        if(num < pick) {
            return 1;
        }
        return 0;
    }

    let start = 1;
    let end = n;

    while(start <= end) {
        let middle = Math.floor((start + end) / 2);

        if(guess(middle) === 1) {
            start = middle + 1;
        } else if(guess(middle) === -1) {
            end = middle - 1;
        } else {
            return middle;
        }
    }

    return -1;
}
