import { lengthOfLastWord } from './lengthOfLastWord';

describe('58. Length of Last Word', () => {
    test('Example 1', () => {
        expect(lengthOfLastWord('Hello World')).toBe(5);
    });

    test('Example 2', () => {
        expect(lengthOfLastWord('   fly me   to   the moon  ')).toBe(4);
    });

    test('Example 2', () => {
        expect(lengthOfLastWord('luffy is still joyboy')).toBe(6);
    });
});


