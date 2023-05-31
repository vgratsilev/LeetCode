import { argumentsLength } from './argumentsLength';

describe('2703. Return Length of Arguments Passed', () => {
    test('Example 1', () => {
        expect(argumentsLength(5)).toBe(1);
    });

    test('Example 2', () => {
        expect(argumentsLength({}, null, '3')).toBe(3);
    });
});
