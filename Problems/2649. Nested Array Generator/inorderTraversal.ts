type MultidimensionalArray = (MultidimensionalArray | number)[]

export function* inorderTraversal(arr: MultidimensionalArray): Generator<number, void, unknown> {
    for(const el of arr) {
        if(typeof (el) === 'number') {
            yield el;
        } else {
            const gen = inorderTraversal(el);
            let tmp = gen.next();
            while(!tmp.done) {
                yield Number(tmp.value);
                tmp = gen.next();
            }
        }
    }
}

/**
 * const gen = inorderTraversal([1, [2, 3]]);
 * gen.next().value; // 1
 * gen.next().value; // 2
 * gen.next().value; // 3
 */
