import { distanceTraveled, distanceTraveled2 } from './distanceTraveled';

describe('2739. Total Distance Traveled', () => {
    test('Example 1a', () => {
        expect(distanceTraveled(5, 10)).toBe(60);
    });

    test('Example 1b', () => {
        expect(distanceTraveled2(5, 10)).toBe(60);
    });

    test('Example 2a', () => {
        expect(distanceTraveled(1, 2)).toBe(10);
    });

    test('Example 2b', () => {
        expect(distanceTraveled2(1, 2)).toBe(10);
    });
});
