/**
 * Time complexity O(1)
 * Space complexity O(1)
 */

export const createCounter = (n: number): () => number => {
    let count = n - 1;

    return function() {
        return ++count;
    };
};


/**
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */
