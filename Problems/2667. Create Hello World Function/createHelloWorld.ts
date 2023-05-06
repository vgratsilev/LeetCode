export function createHelloWorld() {
    // @ts-ignore
    return function(...args: any): string {
        return 'Hello World';
    };
}

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */
