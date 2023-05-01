type F = () => Promise<any>;

export function promisePool(functions: F[], n: number): Promise<any> {
    //recursive function that will add the next function to the pool
    let next: () => Promise<any> = () => functions[n++]?.().then(next);

    return Promise.all(functions.slice(0, n).map(f => f().then(next)));
}

/**
 * const sleep = (t) => new Promise(res => setTimeout(res, t));
 * promisePool([() => sleep(500), () => sleep(400)], 1)
 *   .then(console.log) // After 900ms
 */


/**
 * Iterator and workers
 */
export function promisePool2(functions: F[], n: number): Promise<any> {
    const iterator = functions[Symbol.iterator]();

    let worker = async(): Promise<any> => {
        for(const func of iterator) {
            await func();
        }
    };

    let workers: Promise<any>[] = [];
    while(n-- > 0) {
        workers.push(worker());
    }

    return Promise.all(workers);
}
