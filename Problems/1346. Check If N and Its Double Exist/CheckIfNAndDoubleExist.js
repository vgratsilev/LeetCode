/**
 * Two pointers solution
 * @param {number[]} arr
 * @return {boolean}
 */
const checkIfExist = (arr) => {
    let left = 0, right = 1;

    while (left < arr.length - 1) {
        if (arr[left] === (arr[right] * 2) || arr[right] === (arr[left] * 2)) {
            return true;
        } else if (right === arr.length - 1) {
            left++;
            right = left + 1;
        } else {
            right++;
        }
    }
    return false;
};

/**
 * Hashmap solution
 * @param arr
 * @returns {boolean}
 */
const checkIfExist_v2 = (arr) => {
    let result = false;

    if (arr.filter((item) => item === 0).length > 1) {
        return true;
    }

    const map = new Map();
    for (let i = 0; i < arr.length; i++) {
        if (!map.has(arr[i])) {
            map.set(i, arr[i]);
            for (let j = 0; j < map.size; j++) {
                let a = arr[i];
                let b = map.get(j);

                if (b * 2 === a || a * 2 === b) {
                    return true;
                }
            }
        } else {

        }
    }

    return result;
};

module.exports = {
    checkIfExist,
    checkIfExist_v2,
};
