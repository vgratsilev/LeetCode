import { Calculator } from './Calculator';

describe('2726. Calculator with Method Chaining', () => {
    test('Example 1', () => {
        const result = new Calculator(10).add(5).subtract(7).getResult();
        expect(result).toBe(8);
    });

    test('Example 2', () => {
        const result = new Calculator(2).multiply(5).power(2).getResult();
        expect(result).toBe(8);
    });

    test('Example 3', () => {
        const result = new Calculator(20).divide(0).getResult();
        expect(result).toThrow('Division by zero is not allowed');
    });
});
