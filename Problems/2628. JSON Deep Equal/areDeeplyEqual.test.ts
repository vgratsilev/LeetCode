import { areDeeplyEqual } from './areDeeplyEqual';

describe('2628. JSON Deep Equal', () => {
    test('Example 1', async() => {
        const o1 = { 'x': 1, 'y': 2 };
        const o2 = { 'x': 1, 'y': 2 };
        expect(areDeeplyEqual(o1, o2)).toBeTruthy();
    });

    test('Example 2', async() => {
        const o1 = { 'y': 2, 'x': 1 };
        const o2 = { 'x': 1, 'y': 2 };
        expect(areDeeplyEqual(o1, o2)).toBeTruthy();
    });

    test('Example 3', async() => {
        const o1 = { 'x': null, 'L': [ 1, 2, 3 ] };
        const o2 = { 'x': null, 'L': [ '1', '2', '3' ] };
        expect(areDeeplyEqual(o1, o2)).toBeFalsy();
    });

    test('Example 4', async() => {
        const o1 = true;
        const o2 = false;
        expect(areDeeplyEqual(o1, o2)).toBeFalsy();
    });
});
