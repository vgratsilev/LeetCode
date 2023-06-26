import { canWinNim } from './canWinNim';

describe('292. Nim Game', () => {
    test('Example 1', () => {
        expect(canWinNim(4)).toBeFalsy();
    });

    test('Example 2', () => {
        expect(canWinNim(1)).toBeTruthy();
    });

    test('Example 3', () => {
        expect(canWinNim(2)).toBeTruthy();
    });
});

