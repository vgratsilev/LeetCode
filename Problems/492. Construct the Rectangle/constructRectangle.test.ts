import { constructRectangle } from './constructRectangle';

describe('492. Construct the Rectangle', () => {
    test('Example 1', () => {
        expect(constructRectangle(4)).toEqual([ 2, 2 ]);
    });

    test('Example 2', () => {
        expect(constructRectangle(37)).toEqual([ 37, 1 ]);
    });

    test('Example 3', () => {
        expect(constructRectangle(122122)).toEqual([ 427, 286 ]);
    });
});


