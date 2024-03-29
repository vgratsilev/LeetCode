export function cancellable(fn: Function, args: any[], t: number): Function {
    // var timerId;
    // var time = 0;
    // var result = [];
    //
    // function executeFn() {
    //     var returnedValue = fn.apply(null, args);
    //     result.push({ time: time, returned: returnedValue });
    //     time += t;
    // }
    //
    // function cancelFn() {
    //     clearInterval(timerId);
    // }
    //
    // executeFn();
    // timerId = setInterval(executeFn, t);
    //
    // return cancelFn;
    fn(...args);
    let func = setInterval(
        fn,
        t,
        ...args
    );
    return function() {
        clearInterval(func);
    };
}

/**
 *  const result = []
 *
 *  const fn = (x) => x * 2
 *  const args = [4], t = 20, cancelT = 110
 *
 *  const start = performance.now()
 *
 *  const log = (...argsArr) => {
 *		const val = fn(...argsArr)
 *      result.push({"time": Math.floor(performance.now() - start), "returned": fn(...argsArr)})
 *  }
 *
 *  const cancel = cancellable(log, args, t);
 *
 *  setTimeout(() => {
 *     cancel()
 *     console.log(result) // [
 *                         //      {"time":0,"returned":8},
 *                         //      {"time":20,"returned":8},
 *                         //      {"time":40,"returned":8},
 *                         //      {"time":60,"returned":8},
 *                         //      {"time":80,"returned":8},
 *                         //      {"time":100,"returned":8}
 *                         //  ]
 *  }, cancelT)
 */
