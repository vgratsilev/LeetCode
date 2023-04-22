describe('2619. Array Prototype Last', () => {
    beforeAll(() => {
        // @ts-ignore
        Array.prototype.last = function() {
            return this.length ? this.at(-1) : -1;
        };
    });

    afterAll(() => {
        // @ts-ignore
        Array.prototype.last = false;
    });

    test('Example 1', () => {
        // @ts-ignore
        expect([ 1, 2, 3 ].last()).toBe(3);
    });

    test('Example 2', () => {
        // @ts-ignore
        expect([].last()).toBe(-1);
    });
});
