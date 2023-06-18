import { checkPerfectNumber } from './checkPerfectNumber';

describe('507. Perfect Number', () => {
    test('Example 1', () => {
        expect(checkPerfectNumber(28)).toBeTruthy();
    });

    test('Example 2', () => {
        expect(checkPerfectNumber(7)).toBeFalsy();
    });
});
