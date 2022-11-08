/**
 * @param {number[]} arr
 * @return {boolean}
 */
const validMountainArray = (arr) => {
    let isIncreasing = false;
    let isDecreasing = false;
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        if (arr[i] === arr[i + 1]) {
            return false;
        } else if (arr[i] < arr[i + 1]) {
            isIncreasing = true;

            if (isDecreasing) {
                return false;
            }
        } else {
            isDecreasing = true;
        }
    }

    return isIncreasing && isDecreasing;
};

module.exports = validMountainArray;
