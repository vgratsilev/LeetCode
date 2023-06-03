import { canConstruct } from './canConstruct';

describe('383. Ransom Note', () => {
    test('Example 1', () => {
        expect(canConstruct('a', 'b')).toBeFalsy();
    });

    test('Example 2', () => {
        expect(canConstruct('aa', 'ab')).toBeFalsy();
    });

    test('Example 3', () => {
        expect(canConstruct('aa', 'aab')).toBeTruthy();
    });
});
