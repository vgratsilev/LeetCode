import { climbStairs, climbStairsIterate } from './climbStairs';

describe('70. Climbing Stairs', () => {
    test('Example 1a', () => {
        expect(climbStairs(2)).toBe(2);
    });

    test('Example 1b', () => {
        expect(climbStairsIterate(2)).toBe(2);
    });

    test('Example 2a', () => {
        expect(climbStairs(3)).toBe(3);
    });

    test('Example 2b', () => {
        expect(climbStairsIterate(3)).toBe(3);
    });
});
