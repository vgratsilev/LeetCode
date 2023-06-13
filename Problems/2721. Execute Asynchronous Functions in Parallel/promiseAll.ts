export async function promiseAll<T>(functions: (() => Promise<T>)[]): Promise<T[]> {
    return new Promise((resolve, reject) => {
        const result = new Array(functions.length);
        let count = functions.length;

        for(let index = 0; index < functions.length; index++) {
            const func = functions[index];
            func()
                .then((value) => {
                    result[index] = value;
                    count--;

                    if(count === 0) {
                        return resolve(result);
                    }
                })
                .catch(reject);
        }
    });
}

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */
