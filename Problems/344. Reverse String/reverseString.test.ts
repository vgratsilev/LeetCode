import { reverseString } from './reverseString';

describe('344. Reverse String\n', () => {
    test('Example 1', () => {
        let s = [ 'h', 'e', 'l', 'l', 'o' ];
        reverseString(s);
        expect(s).toEqual([ 'o', 'l', 'l', 'e', 'h' ]);
    });

    test('Example 2', () => {
        let s = [ 'H', 'a', 'n', 'n', 'a', 'h' ];
        reverseString(s);
        expect(s).toEqual([ 'h', 'a', 'n', 'n', 'a', 'H' ]);
    });
});
