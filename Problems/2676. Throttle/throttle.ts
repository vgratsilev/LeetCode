type F = (...args: any[]) => void;
type TTimeout = ReturnType<typeof setTimeout>;

export function throttle(fn: F, t: number): F {
    let timerID: TTimeout;
    let nextExecutionTimeStamp = Date.now();

    return (...args) => {
        const millisecondsUntilNextExecution = nextExecutionTimeStamp - Date.now();

        // cancel if in delay period
        if(millisecondsUntilNextExecution > 0) {
            clearTimeout(timerID);
        }

        // run fn when delay period is over
        timerID = setTimeout(() => {
            fn(...args);
            nextExecutionTimeStamp = Date.now() + t;
        }, millisecondsUntilNextExecution);
    };
}

/**
 * const throttled = throttle(console.log, 100);
 * throttled("log"); // logged immediately.
 * throttled("log"); // logged at t=100ms.
 */
