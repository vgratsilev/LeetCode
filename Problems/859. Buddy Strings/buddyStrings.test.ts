import { buddyStrings } from './buddyStrings';

describe('859. Buddy Strings', () => {
    test('Example 1', () => {
        expect(buddyStrings('ab', 'ba')).toBeTruthy();
    });

    test('Example 2', () => {
        expect(buddyStrings('ab', 'ab')).toBeFalsy();
    });

    test('Example 3', () => {
        expect(buddyStrings('aa', 'aa')).toBeTruthy();
    });
});
